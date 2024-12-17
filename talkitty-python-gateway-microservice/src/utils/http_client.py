import requests
from django.conf import settings
from .response_handler import handle_microservice_response

class MicroserviceClient:
    @staticmethod
    def forward_request(method, endpoint, data=None, headers=None):
        """
        Forward request to specified microservice
        """
        try:
            # Construct full URL to the microservice
            full_url = f"{settings.USER_MICROSERVICE_BASE_URL}{endpoint}"

            # Prepare headers
            request_headers = headers or {}

            # Make the request
            response = requests.request(
                method=method,
                url=full_url,
                json=data,
                headers=request_headers
            )

            # Handle the response
            return handle_microservice_response(response)

        except requests.RequestException as e:
            # Log the error
            print(f"Microservice Request Error: {e}")
            raise