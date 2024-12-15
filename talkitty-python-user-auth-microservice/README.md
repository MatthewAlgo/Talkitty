# Django Authentication Microservice

## Project Overview
A Django-based microservice for user authentication using JWT tokens and MySQL database.

## Prerequisites
- Python 3.9+
- MySQL Server
- pip

## Setup Instructions

1. Clone the repository
```bash
git clone
cd django_auth_microservice
```

2. Create a virtual environment
```bash
python -m venv venv
source venv/bin/activate  # On Windows use `venv\Scripts\activate`
```

3. Install dependencies
```bash
pip install -r requirements.txt
```

4. Configure environment variables
```bash
cp .env.example .env
# Edit .env with your specific configuration
```

5. Set up MySQL Database
```bash
mysql -u root -p
CREATE DATABASE auth_microservice_db;
```

6. Run migrations
```bash
python manage.py makemigrations
python manage.py migrate
```

7. Create superuser (optional)
```bash
python manage.py createsuperuser
```

8. Run development server
```bash
python manage.py runserver
```

## Endpoints
- `/api/auth/login/`: Login with email and password
- `/api/auth/register/`: Register new user
- `/api/auth/login/refresh/`: Refresh JWT token
- `/api/auth/logout/`: Logout and invalidate token