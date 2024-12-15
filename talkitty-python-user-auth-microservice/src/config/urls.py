from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView, TokenVerifyView

from .views import (
    CustomTokenObtainPairView,
    RegisterView,
    LogoutView,
    PasswordResetRequestView,
    PasswordResetConfirmView,
    UserProfileView,
    EmailVerificationView
)

urlpatterns = [
    # Authentication Endpoints
    path('login/',
        CustomTokenObtainPairView.as_view(),
        name='token_obtain_pair'
    ),
    path('login/refresh/',
        TokenRefreshView.as_view(),
        name='token_refresh'
    ),
    path('token/verify/',
        TokenVerifyView.as_view(),
        name='token_verify'
    ),
    path('register/',
        RegisterView.as_view(),
        name='register'
    ),
    path('logout/',
        LogoutView.as_view(),
        name='logout'
    ),

    # Password Management Endpoints
    path('password/reset/',
        PasswordResetRequestView.as_view(),
        name='password_reset_request'
    ),
    path('password/reset/confirm/',
        PasswordResetConfirmView.as_view(),
        name='password_reset_confirm'
    ),

    # User Profile Endpoints
    path('profile/',
        UserProfileView.as_view(),
        name='user_profile'
    ),

    # Email Verification Endpoint
    path('verify-email/',
        EmailVerificationView.as_view(),
        name='email_verification'
    )
]