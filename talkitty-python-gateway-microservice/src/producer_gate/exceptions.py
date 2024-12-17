# producer_gate/exceptions.py
class ProducerGatewayError(Exception):
    """Base exception for Producer Gateway errors"""
    def __init__(self, message, error_code=None):
        self.message = message
        self.error_code = error_code
        super().__init__(self.message)

class MessagePublishError(ProducerGatewayError):
    """Raised when message publishing fails"""
    def __init__(self, queue_name, original_error):
        message = f"Failed to publish message to queue: {queue_name}"
        super().__init__(message, error_code='PUBLISH_ERROR')
        self.original_error = original_error

class ProducerValidationError(ProducerGatewayError):
    """Raised when message validation fails"""
    def __init__(self, validation_errors):
        message = "Message validation failed"
        super().__init__(message, error_code='VALIDATION_ERROR')
        self.validation_errors = validation_errors