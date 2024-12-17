#!/usr/bin/env python
"""Django's command-line utility for administrative tasks."""
import os
import sys
import dotenv
import traceback
import logging
from typing import List, Optional

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

class DjangoProjectManager:
    """
    Comprehensive Django project management utility
    """
    @staticmethod
    def load_environment() -> None:
        """
        Load environment variables from .env file
        """
        try:
            dotenv.load_dotenv(
                os.path.join(os.path.dirname(__file__), '.env')
            )
        except Exception as e:
            logger.error(f"Failed to load environment variables: {e}")

    @staticmethod
    def validate_python_version() -> None:
        """
        Validate Python version compatibility
        """
        import sys

        MINIMUM_PYTHON_VERSION = (3, 8)
        if sys.version_info < MINIMUM_PYTHON_VERSION:
            raise RuntimeError(
                f"This project requires Python {'.'.join(map(str, MINIMUM_PYTHON_VERSION))} or higher"
            )

    @classmethod
    def run_command(cls, argv: Optional[List[str]] = None) -> None:
        """
        Run Django management commands

        Args:
            argv (Optional[List[str]]): Command-line arguments
        """
        cls.load_environment()
        cls.validate_python_version()

        os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'core.settings')

        try:
            from django.core.management import execute_from_command_line
            execute_from_command_line(argv or sys.argv)
        except ImportError as exc:
            raise ImportError(
                "Couldn't import Django. Are you sure it's installed and "
                "available on your PYTHONPATH environment variable?"
            ) from exc
        except Exception as e:
            logger.error(f"Django management error: {e}")
            logger.error(traceback.format_exc())
            sys.exit(1)

def main():
    """
    Entry point for Django management commands
    """
    DjangoProjectManager.run_command()

if __name__ == '__main__':
    main()