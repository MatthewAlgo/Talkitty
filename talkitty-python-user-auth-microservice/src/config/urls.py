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
    path('auth/login/',
        CustomTokenObtainPairView.as_view(),
        name='token_obtain_pair'
    ),
    path('auth/login/refresh/',
        TokenRefreshView.as_view(),
        name='token_refresh'
    ),
    path('auth/token/verify/',
        TokenVerifyView.as_view(),
        name='token_verify'
    ),
    path('auth/register/',
        RegisterView.as_view(),
        name='register'
    ),
    path('auth/logout/',
        LogoutView.as_view(),
        name='logout'
    ),

    # Password Management Endpoints
    path('auth/password/reset/',
        PasswordResetRequestView.as_view(),
        name='password_reset_request'
    ),
    path('auth/password/reset/confirm/',
        PasswordResetConfirmView.as_view(),
        name='password_reset_confirm'
    ),

    # User Profile Endpoints
    path('auth/profile/',
        UserProfileView.as_view(),
        name='user_profile'
    ),

    # Email Verification Endpoint
    path('auth/verify-email/',
        EmailVerificationView.as_view(),
        name='email_verification'
    )
]