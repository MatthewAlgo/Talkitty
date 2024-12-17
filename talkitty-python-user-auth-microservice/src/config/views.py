from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework_simplejwt.tokens import RefreshToken

from .serializers import (
    CustomTokenObtainPairSerializer,
    RegisterSerializer,
    PasswordResetRequestSerializer,
    PasswordResetConfirmSerializer,
    UserProfileSerializer,
    EmailVerificationSerializer
)

class CustomTokenObtainPairView(TokenObtainPairView):
    """
    **POST** auth/login/

    **Expected Fields**:
    - `email`: (string) The email of the user.
    - `password`: (string) The password of the user.

    **Response**:
    - `access`: (string) JWT access token.
    - `refresh`: (string) JWT refresh token.
    - `user`: A dictionary with the user's `id`, `email`, and `name`.

    This endpoint is used to obtain JWT tokens (access and refresh) for authentication purposes.
    """
    serializer_class = CustomTokenObtainPairSerializer

    def post(self, request, *args, **kwargs):
        response = super().post(request, *args, **kwargs)
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.user
        user_data = {
            'id': user.id,
            'email': user.email,
            'name': user.name
        }
        response.data['user'] = user_data
        return response



class RegisterView(APIView):
    """
    **POST** auth/register/

    **Expected Fields**:
    - `email`: (string) The email of the user.
    - `name`: (string) The name of the user.
    - `password`: (string) The user's password.
    - `password2`: (string) A confirmation of the user's password.

    **Response**:
    - `user`: A dictionary with the user's `id`, `email`, `name`.
    - `access`: (string) JWT access token.
    - `refresh`: (string) JWT refresh token.

    This endpoint is used to register a new user and return a JWT token for authentication.
    """
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = RegisterSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()

        refresh = RefreshToken.for_user(user)
        return Response({
            'user': {
                'id': user.id,
                'email': user.email,
                'name': user.name  # Included the 'name' field in the response
            },
            'refresh': str(refresh),
            'access': str(refresh.access_token)
        }, status=status.HTTP_201_CREATED)

class LogoutView(APIView):
    """
    **POST** auth/logout/

    **Expected Fields**:
    - `refresh_token`: (string) The refresh token to invalidate.

    **Response**:
    - `205`: The request was successful, and the token was blacklisted (logged out).
    - `400`: Invalid or missing refresh token.

    This endpoint is used to log the user out by invalidating the provided refresh token.
    """
    def post(self, request):
        try:
            refresh_token = request.data['refresh_token']
            token = RefreshToken(refresh_token)
            token.blacklist()
            return Response(status=status.HTTP_205_RESET_CONTENT)
        except Exception as e:
            # Log the error
            print("Error:", e)
            return Response(status=status.HTTP_400_BAD_REQUEST)

class PasswordResetRequestView(APIView):
    """
    **POST** auth/password/reset/

    **Expected Fields**:
    - `email`: (string) The email of the user who wants to reset their password.

    **Response**:
    - `200`: Password reset link has been sent to the provided email.
    - `400`: Invalid or missing email address.

    This endpoint is used to send a password reset email to the user with a reset link.
    """
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = PasswordResetRequestSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        email = serializer.validated_data['email']
        # Logic to send password reset email would go here
        return Response({"message": "Password reset link has been sent to the provided email."}, status=status.HTTP_200_OK)

class PasswordResetConfirmView(APIView):
    """
    **POST** auth/password/reset/confirm/

    **Expected Fields**:
    - `token`: (string) The token used to verify the password reset request.
    - `new_password`: (string) The new password for the user.

    **Response**:
    - `200`: Password has been reset successfully.
    - `400`: Invalid token or password.

    This endpoint is used to confirm the password reset after token verification.
    """
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = PasswordResetConfirmSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        # Logic to reset password after token verification would go here
        return Response({"message": "Password has been reset successfully."}, status=status.HTTP_200_OK)

class UserProfileView(APIView):
    """
    **GET** auth/profile/
    **PUT** auth/profile/

    **Expected Fields (PUT)**:
    - `name`: (string) The user's updated name.
    - `email`: (string) The user's updated email.

    **Response**:
    - **GET**:
        - `id`: (integer) The user's ID.
        - `email`: (string) The user's email.
        - `name`: (string) The user's name.
        - `date_joined`: (string) The date the user joined.
        - `last_login`: (string) The last time the user logged in.

    - **PUT**:
        - `name`: (string) The updated name of the user.
        - `email`: (string) The updated email of the user.

    This endpoint is used to retrieve and update the user's profile information.
    """
    permission_classes = [IsAuthenticated]

    def get(self, request):
        user = request.user
        serializer = UserProfileSerializer(user)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request):
        user = request.user
        serializer = UserProfileSerializer(user, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_200_OK)

class EmailVerificationView(APIView):
    """
    **POST** auth/verify-email/

    **Expected Fields**:
    - `token`: (string) The token used to verify the user's email.

    **Response**:
    - `200`: Email verified successfully.
    - `400`: Invalid or missing token.

    This endpoint is used to verify the user's email address using a token.
    """
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = EmailVerificationSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        # Logic to verify the email (e.g., using a token) would go here
        return Response({"message": "Email verified successfully."}, status=status.HTTP_200_OK)
