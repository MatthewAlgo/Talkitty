#!/usr/bin/env python
import os
import sys
from django.conf import settings

def main():
    """
    This is the main entry point for Django's command-line utility.
    """
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'config.settings')

    try:
        from django.core.management import execute_from_command_line
    except ImportError:
        raise ImportError(
            "Couldn't import Django. Are you sure it's installed and available on your PYTHONPATH?"
        )
    # Print debug information
    print("@@@@@@@@@@@@@ MANAGE.PY @@@@@@@@@@@@@")
    print("PYTHONPATH:", sys.path)
    print("BASE_DIR:", os.path.dirname(os.path.abspath(__file__)))
    print("sys.path:", sys.path)
    print("Current working directory:", os.getcwd())
    print("sys.argv:", sys.argv)
    print("DJANGO_SETTINGS_MODULE:", os.environ.get('DJANGO_SETTINGS_MODULE'))
    print("DEBUG:", os.environ.get('DEBUG'))
    print("SECRET_KEY:", os.environ.get('SECRET_KEY'))
    print("Using user model:", settings.AUTH_USER_MODEL)
    execute_from_command_line(sys.argv)

if __name__ == "__main__":
    main()
