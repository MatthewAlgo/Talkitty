from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from django.conf import settings
from django.conf.urls.static import static
from django.urls import path
from django.contrib import admin
from django.urls import path, include
from authentication_gate.views import (
    CustomTokenObtainPairView,
    TokenRefreshView,
    TokenVerifyView,
    RegisterView,
    LogoutView,
    PasswordResetRequestView,
    PasswordResetConfirmView,
    UserProfileView,
    EmailVerificationView
)

urlpatterns = [
    path('auth/', include('urls.authentication_urls')),  # Include authentication URLs
    path('producer/', include('urls.producer_urls')),  # Include producer URLs
] # General URL patterns that may not be related to authentication or producer

# Add static and media file serving for development if settings.DEBUG
if settings.DEBUG:
    urlpatterns += staticfiles_urlpatterns()
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)