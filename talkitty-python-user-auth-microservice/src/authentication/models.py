from django.db import models
from django.utils import timezone
from django.conf import settings
from django.core.exceptions import ValidationError

import uuid

class AuthToken(models.Model):
    """
    Model to store and manage authentication tokens
    for additional security and tracking
    """
    TOKEN_TYPES = (
        ('password_reset', 'Password Reset'),
        ('email_verification', 'Email Verification'),
        ('api_access', 'API Access'),
    )

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name='auth_tokens'
    )
    token = models.CharField(max_length=255, unique=True)
    token_type = models.CharField(
        max_length=20,
        choices=TOKEN_TYPES
    )
    created_at = models.DateTimeField(auto_now_add=True)
    expires_at = models.DateTimeField()
    is_used = models.BooleanField(default=False)
    ip_address = models.GenericIPAddressField(null=True, blank=True)

    class Meta:
        verbose_name = 'Authentication Token'
        verbose_name_plural = 'Authentication Tokens'
        ordering = ['-created_at']
        indexes = [
            models.Index(fields=['user', 'token_type']),
            models.Index(fields=['expires_at']),
        ]

    def __str__(self):
        return f"{self.user.email} - {self.token_type}"

    def is_valid(self):
        """
        Check if the token is still valid
        """
        return not self.is_used and timezone.now() < self.expires_at

    def validate_unique(self, exclude=None):
        """
        Ensure token uniqueness
        """
        super().validate_unique(exclude)
        if AuthToken.objects.filter(token=self.token).exists():
            raise ValidationError('Token must be unique')

    def save(self, *args, **kwargs):
        """
        Custom save method to ensure token validity
        """
        if not self.expires_at:
            # Default expiration: 1 hour from creation
            self.expires_at = timezone.now() + timezone.timedelta(hours=1)

        self.full_clean()
        return super().save(*args, **kwargs)

class LoginAttempt(models.Model):
    """
    Model to track login attempts for security monitoring
    """
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name='login_attempts',
        null=True,
        blank=True
    )
    email = models.EmailField()
    ip_address = models.GenericIPAddressField()
    timestamp = models.DateTimeField(auto_now_add=True)
    is_successful = models.BooleanField(default=False)

    class Meta:
        verbose_name = 'Login Attempt'
        verbose_name_plural = 'Login Attempts'
        ordering = ['-timestamp']
        indexes = [
            models.Index(fields=['email', 'timestamp']),
            models.Index(fields=['ip_address', 'timestamp']),
        ]

    def __str__(self):
        status = 'Successful' if self.is_successful else 'Failed'
        return f"{self.email} - {status} Login at {self.timestamp}"