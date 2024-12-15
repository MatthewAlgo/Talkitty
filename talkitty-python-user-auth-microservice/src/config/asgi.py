import os
import sys
from pathlib import Path

# Detect the environment and configure accordingly
def get_environment():
    """
    Determine the current running environment.

    Returns:
        str: Current environment (development, production, testing)
    """
    env = os.getenv('DJANGO_ENV', 'development').lower()
    return env

def configure_settings():
    """
    Configure environment-specific settings and paths.

    This function helps in setting up dynamic configuration
    based on the current environment.
    """
    # Add project root to Python path
    project_root = Path(__file__).resolve().parent.parent
    sys.path.insert(0, str(project_root))

    # Set default settings module based on environment
    env = get_environment()
    if env == 'production':
        os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'config.settings.production')
    elif env == 'testing':
        os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'config.settings.testing')
    else:
        os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'config.settings.development')

# Configure settings when the module is imported
configure_settings()