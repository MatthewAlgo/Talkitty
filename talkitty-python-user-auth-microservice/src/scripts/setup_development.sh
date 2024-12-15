#!/bin/bash

# Exit the script if any command fails
set -e

# Step 1: Set up a virtual environment
echo "Setting up virtual environment..."
if [ ! -d "env" ]; then
    python3 -m venv env
    echo "Virtual environment created."
else
    echo "Virtual environment already exists."
fi

# Activate the virtual environment
source env/bin/activate
echo "Virtual environment activated."

# Step 2: Install dependencies
echo "Installing dependencies..."
pip install --upgrade pip
pip install -r requirements.txt
echo "Dependencies installed."

# Step 3: Set up the database
echo "Setting up the database..."
python manage.py migrate
echo "Database setup completed."

# Step 4: Create a superuser if one doesn't exist
echo "Checking for existing superuser..."
python scripts/create_superuser.py

# Step 5: Collect static files (optional for development)
echo "Collecting static files..."
python manage.py collectstatic --noinput
echo "Static files collected."

# Step 6: Run the development server
echo "Starting the development server..."
python manage.py runserver
