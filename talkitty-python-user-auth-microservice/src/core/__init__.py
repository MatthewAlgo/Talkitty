# This file allows the core directory to be treated as a Python package.

# Import necessary base models or permissions to make them easily accessible.
from .base_models import *
from .permissions import *

__all__ = ['base_models', 'permissions']
