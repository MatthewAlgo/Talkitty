import os
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent.parent

# Microservice Base URLs
USER_MICROSERVICE_BASE_URL = os.environ.get(
    'USER_MICROSERVICE_BASE_URL',
    'http://localhost:8001'
)
PRODUCER_MICROSERVICE_BASE_URL = os.environ.get(
    'PRODUCER_MICROSERVICE_BASE_URL',
    'http://localhost:8002'
)

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',

    # Third-party apps
    'rest_framework',

    # Gateway apps
    'authentication_gate',
    'producer_gate',
]