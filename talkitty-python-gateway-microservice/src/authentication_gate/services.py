import logging
from typing import Dict, Any, Optional
from django.conf import settings
import requests

from .exceptions import (
    MicroserviceConnectionError,
    AuthenticationValidationError
)

logger = logging.getLogger(__name__)

class AuthenticationService:
    """
    Service layer for handling authentication-related operations
    """
    @staticmethod
    def validate_token(token: str) -> Dict[str, Any]:
        """
        Validate authentication token with user microservice

        Args:
            token (str): Authentication token to validate

        Returns:
            Dict[str, Any]: Validated token information

        Raises:
            MicroserviceConnectionError: If unable to connect to microservice
            AuthenticationValidationError: If token validation fails
        """
        try:
            response = requests.post(
                f"{settings.USER_MICROSERVICE_BASE_URL}/auth/token/verify/",
                headers={'Authorization': f'Bearer {token}'},
                timeout=5
            )

            if response.status_code == 200:
                return response.json()

            # Log potential validation errors
            logger.warning(f"Token validation failed: {response.text}")
            raise AuthenticationValidationError(response.json())

        except requests.RequestException as e:
            logger.error(f"Microservice connection error: {e}")
            raise MicroserviceConnectionError(
                settings.USER_MICROSERVICE_BASE_URL,
                original_error=e
            )
