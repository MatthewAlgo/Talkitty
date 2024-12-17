from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    # Admin site
    path('admin/', admin.site.urls),

    # Authentication endpoints
    path('api/auth/', include('urls.authentication_urls')),

    # Producer endpoints
    path('api/producer/', include('urls.producer_urls')),

    # Optionally add health check endpoint
    path('health/', include('health_check.urls'))
]

# Add static and media file serving for development
if settings.DEBUG:
    urlpatterns += static(
        settings.STATIC_URL,
        document_root=settings.STATIC_ROOT
    )
    urlpatterns += static(
        settings.MEDIA_URL,
        document_root=settings.MEDIA_ROOT
    )