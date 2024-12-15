import re
import uuid
import random
import string
from typing import Dict, Any

from django.core.mail import send_mail
from django.conf import settings
from django.utils import timezone
from django.contrib.auth import get_user_model

from .models import AuthToken

User = get_user_model()

def generate_unique_token(length: int = 32) -> str:
    """
    Generate a unique, cryptographically secure token

    Args:
        length (int): Length of the token to generate

    Returns:
        str: Unique token
    """
    # Combine UUID and random string for enhanced uniqueness
    unique_part = uuid.uuid4().hex[:16]
    random_part = ''.join(
        random.choices(
            string.ascii_letters + string.digits,
            k=length - len(unique_part)
        )
    )
    return unique_part + random_part

def validate_password_strength(password: str) -> Dict[str, Any]:
    """
    Validate password strength based on multiple criteria

    Args:
        password (str): Password to validate

    Returns:
        dict: Validation results
    """
    results = {
        'is_valid': True,
        'errors': []
    }

    # Check minimum length
    if len(password) < 8:
        results['is_valid'] = False
        results['errors'].append('Password must be at least 8 characters long')

    # Check for uppercase letters
    if not re.search(r'[A-Z]', password):
        results['is_valid'] = False
        results['errors'].append('Password must contain at least one uppercase letter')

    # Check for lowercase letters
    if not re.search(r'[a-z]', password):
        results['is_valid'] = False
        results['errors'].append('Password must contain at least one lowercase letter')

    # Check for digits
    if not re.search(r'\d', password):
        results['is_valid'] = False
        results['errors'].append('Password must contain at least one number')

    # Check for special characters
    if not re.search(r'[!@#$%^&*(),.?":{}|<>]', password):
        results['is_valid'] = False
        results['errors'].append('Password must contain at least one special character')

    return results

def create_auth_token(
    user: User,
    token_type: str,
    expiration_hours: int = 1
) -> AuthToken:
    """
    Create an authentication token for a specific purpose

    Args:
        user (User): User for whom token is created
        token_type (str): Purpose of the token
        expiration_hours (int): Hours until token expires

    Returns:
        AuthToken: Created authentication token
    """
    return AuthToken.objects.create(
        user=user,
        token=generate_unique_token(),
        token_type=token_type,
        expires_at=timezone.now() + timezone.timedelta(hours=expiration_hours)
    )

def send_verification_email(
    email: str,
    verification_token: str
) -> bool:
    """
    Send email verification email

    Args:
        email (str): Recipient email
        verification_token (str): Verification token

    Returns:
        bool: Whether email was sent successfully
    """
    try:
        verification_link = f"{settings.FRONTEND_URL}/verify-email?token={verification_token}"

        send_mail(
            'Verify Your Email',
            f'Click the following link to verify your email: {verification_link}',
            settings.DEFAULT_FROM_EMAIL,
            [email],
            fail_silently=False,
        )
        return True
    except Exception as e:
        # Log the error in a real-world scenario
        return False

def generate_otp(length: int = 6) -> str:
    """
    Generate a numeric One-Time Password (OTP)

    Args:
        length (int): Length of OTP

    Returns:
        str: Generated OTP
    """
    return ''.join(
        random.choices(string.digits, k=length)
    )

def log_login_attempt(
    email: str,
    ip_address: str,
    is_successful: bool,
    user: User = None
) -> None:
    """
    Log a login attempt for security tracking

    Args:
        email (str): Email used in login attempt
        ip_address (str): IP address of the attempt
        is_successful (bool): Whether login was successful
        user (User, optional): User if login was successful
    """
    from .models import LoginAttempt

    LoginAttempt.objects.create(
        user=user,
        email=email,
        ip_address=ip_address,
        is_successful=is_successful
    )

def is_email_already_registered(email: str) -> bool:
    """
    Check if an email is already registered

    Args:
        email (str): Email to check

    Returns:
        bool: Whether email is already registered
    """
    return User.objects.filter(email=email).exists()