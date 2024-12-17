from rest_framework.views import APIView
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from utils.http_client import MicroserviceClient
from rest_framework import status

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

class TokenVerifyView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        return MicroserviceClient.forward_request(
            method='POST',
            endpoint='/auth/token/verify/',
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

class PasswordResetRequestView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        return MicroserviceClient.forward_request(
            method='POST',
            endpoint='/auth/password/reset/',
            data=request.data
        )

class PasswordResetConfirmView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        return MicroserviceClient.forward_request(
            method='POST',
            endpoint='/auth/password/reset/confirm/',
            data=request.data
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

class EmailVerificationView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        return MicroserviceClient.forward_request(
            method='POST',
            endpoint='/auth/verify-email/',
            data=request.data
        )