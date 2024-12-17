from rest_framework.response import Response
from rest_framework import status

def handle_microservice_response(microservice_response):
    """
    Handle response from microservice and convert to Django Rest Framework response
    """
    try:
        # Convert microservice response to DRF response
        return Response(
            data=microservice_response.json(),
            status=microservice_response.status_code
        )
    except ValueError:
        # Handle cases where response is not JSON
        return Response(
            {'error': 'Invalid response from microservice'},
            status=status.HTTP_500_INTERNAL_SERVER_ERROR
        )