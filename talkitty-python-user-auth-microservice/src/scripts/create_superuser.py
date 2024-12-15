import os
import sys
from django.core.management import call_command
from django.conf import settings

def create_superuser():
    """
    Script to create a Django superuser if it doesn't exist.
    """
    from django.core.management import execute_from_command_line

    # Check if the Django settings module is set
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'config.settings')

    # Initialize Django setup (important when running outside the Django shell)
    import django
    django.setup()

    # Check if the superuser already exists
    from django.contrib.auth.models import User
    if not User.objects.filter(is_superuser=True).exists():
        print("Superuser not found. Creating one...")
        username = input("Enter superuser username: ")
        email = input("Enter superuser email: ")
        password = input("Enter superuser password: ")

        # Create the superuser
        user = User.objects.create_superuser(username=username, email=email, password=password)
        user.save()
        print(f"Superuser {username} created successfully!")
    else:
        print("Superuser already exists.")

if __name__ == "__main__":
    create_superuser()
