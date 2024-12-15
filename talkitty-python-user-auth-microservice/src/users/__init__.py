# users/__init__.py

# This file marks the 'users' directory as a Python package.
# Avoid importing Django models or views at import time

# You can import modules from the 'users' app later when needed
# For example:
def get_user_model():
    from .models import User
    return User

def get_user_serializer():
    from .serializers import UserSerializer
    return UserSerializer

def get_user_viewset():
    from .views import UserViewSet
    return UserViewSet

__all__ = ['get_user_model', 'get_user_serializer', 'get_user_viewset']
