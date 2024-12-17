# core/asgi.py
import os
from django.core.asgi import get_asgi_application
from channels.routing import ProtocolTypeRouter, URLRouter
from channels.auth import AuthMiddlewareStack

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'core.settings')

# Import your WebSocket routing if applicable
# from your_websocket_app import routing as websocket_routing

application = ProtocolTypeRouter({
    "http": get_asgi_application(),
    # Uncomment and configure WebSocket routing as needed
    # "websocket": AuthMiddlewareStack(
    #     URLRouter(
    #         websocket_routing.websocket_urlpatterns
    #     )
    # ),
})