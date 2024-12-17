from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from utils.http_client import MicroserviceClient

class ChatMessageProducerView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        return MicroserviceClient.forward_request(
            method='POST',
            endpoint='/producer/chat/send/',
            data=request.data,
            headers={'Authorization': request.headers.get('Authorization')}
        )