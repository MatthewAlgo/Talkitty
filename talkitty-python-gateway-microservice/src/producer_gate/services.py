import logging
import uuid
from typing import Dict, Any
from django.conf import settings
import requests

from .exceptions import MessagePublishError, ProducerValidationError

logger = logging.getLogger(__name__)

class MessageProducerService:
    """
    Service for handling message production and routing
    """
    @classmethod
    def publish_message(
        cls,
        message: Dict[str, Any],
        user_id: uuid.UUID
    ) -> Dict[str, Any]:
        """
        Publish a message to the producer microservice

        Args:
            message (Dict[str, Any]): Message payload
            user_id (uuid.UUID): ID of the sending user

        Returns:
            Dict[str, Any]: Publishing result

        Raises:
            MessagePublishError: If message publishing fails
            ProducerValidationError: If message validation fails
        """
        try:
            # Enrich message with user context
            enriched_message = {
                **message,
                'user_id': str(user_id),
                'message_id': str(uuid.uuid4()),
                'timestamp': cls._get_current_timestamp()
            }

            response = requests.post(
                f"{settings.PRODUCER_MICROSERVICE_BASE_URL}/messages/publish/",
                json=enriched_message,
                headers={'Content-Type': 'application/json'},
                timeout=5
            )

            if response.status_code == 201:
                return response.json()

            logger.warning(f"Message publishing failed: {response.text}")
            raise ProducerValidationError(response.json())

        except requests.RequestException as e:
            logger.error(f"Microservice connection error: {e}")
            raise MessagePublishError(
                queue_name='default_queue',
                original_error=e
            )

    @staticmethod
    def _get_current_timestamp():
        from django.utils import timezone
        return timezone.now().isoformat()
