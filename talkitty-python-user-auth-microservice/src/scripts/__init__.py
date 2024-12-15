# This file allows the scripts directory to be treated as a Python package.

# Import useful scripts to make them directly accessible from the package.
from .create_superuser import create_superuser

__all__ = ['create_superuser']
