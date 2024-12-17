from rest_framework.views import APIView
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from utils.http_client import MicroserviceClient

class CustomTokenObtainPairView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        return MicroserviceClient.forward_request(
            method='POST',
            endpoint='/auth/login/',
            data=request.data
        )

class TokenRefreshView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        return MicroserviceClient.forward_request(
            method='POST',
            endpoint='/auth/login/refresh/',
            data=request.data
        )

class RegisterView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        return MicroserviceClient.forward_request(
            method='POST',
            endpoint='/auth/register/',
            data=request.data
        )

class LogoutView(APIView):
    def post(self, request):
        return MicroserviceClient.forward_request(
            method='POST',
            endpoint='/auth/logout/',
            data=request.data,
            headers={'Authorization': request.headers.get('Authorization')}
        )

class UserProfileView(APIView):
    def get(self, request):
        return MicroserviceClient.forward_request(
            method='GET',
            endpoint='/auth/profile/',
            headers={'Authorization': request.headers.get('Authorization')}
        )

    def put(self, request):
        return MicroserviceClient.forward_request(
            method='PUT',
            endpoint='/auth/profile/',
            data=request.data,
            headers={'Authorization': request.headers.get('Authorization')}
        )
