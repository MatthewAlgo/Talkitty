# authentication_gate/exceptions.py
class AuthenticationGatewayError(Exception):
    """Base exception for Authentication Gateway errors"""
    def __init__(self, message, error_code=None):
        self.message = message
        self.error_code = error_code
        super().__init__(self.message)

class MicroserviceConnectionError(AuthenticationGatewayError):
    """Raised when there's a connection issue with the authentication microservice"""
    def __init__(self, service_url, original_error):
        message = f"Failed to connect to authentication microservice at {service_url}"
        super().__init__(message, error_code='AUTH_CONNECTION_ERROR')
        self.original_error = original_error

class AuthenticationValidationError(AuthenticationGatewayError):
    """Raised when authentication validation fails"""
    def __init__(self, validation_errors):
        message = "Authentication validation failed"
        super().__init__(message, error_code='AUTH_VALIDATION_ERROR')
        self.validation_errors = validation_errors
