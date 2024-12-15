from django.test import TestCase
from django.urls import reverse
from rest_framework.test import APIClient
from rest_framework import status
from django.contrib.auth import get_user_model
from rest_framework_simplejwt.tokens import RefreshToken

User = get_user_model()

class AuthenticationTestCase(TestCase):
    def setUp(self):
        """
        Set up test environment before each test method
        """
        self.client = APIClient()
        self.register_url = reverse('register')
        self.login_url = reverse('token_obtain_pair')
        self.refresh_url = reverse('token_refresh')

        # Test user data
        self.user_data = {
            'email': 'testuser@example.com',
            'name': 'Test User',
            'password': 'SecurePass123!',
            'password2': 'SecurePass123!'
        }

        # Create a test user
        self.user = User.objects.create_user(
            email='existinguser@example.com',
            name='Existing User',
            password='ExistingPass123!'
        )

    def test_user_registration_success(self):
        """
        Test successful user registration
        """
        response = self.client.post(self.register_url, self.user_data)

        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertIn('access', response.data)
        self.assertIn('refresh', response.data)
        self.assertEqual(response.data['user']['email'], self.user_data['email'])

    def test_user_registration_password_mismatch(self):
        """
        Test registration with mismatched passwords
        """
        invalid_data = self.user_data.copy()
        invalid_data['password2'] = 'DifferentPassword123!'

        response = self.client.post(self.register_url, invalid_data)

        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertIn('password', response.data)

    def test_user_registration_duplicate_email(self):
        """
        Test registration with an existing email
        """
        duplicate_data = self.user_data.copy()
        duplicate_data['email'] = 'existinguser@example.com'

        response = self.client.post(self.register_url, duplicate_data)

        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

    def test_user_login_success(self):
        """
        Test successful user login
        """
        login_data = {
            'email': 'existinguser@example.com',
            'password': 'ExistingPass123!'
        }

        response = self.client.post(self.login_url, login_data)

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertIn('access', response.data)
        self.assertIn('refresh', response.data)

    def test_user_login_invalid_credentials(self):
        """
        Test login with invalid credentials
        """
        invalid_login_data = {
            'email': 'existinguser@example.com',
            'password': 'WrongPassword123!'
        }

        response = self.client.post(self.login_url, invalid_login_data)

        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)

    def test_token_refresh(self):
        """
        Test JWT token refresh
        """
        # Create a refresh token for the existing user
        refresh = RefreshToken.for_user(self.user)

        refresh_data = {
            'refresh': str(refresh)
        }

        response = self.client.post(self.refresh_url, refresh_data)

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertIn('access', response.data)

    def test_logout(self):
        """
        Test user logout
        """
        # Create a refresh token for the existing user
        refresh = RefreshToken.for_user(self.user)

        logout_url = reverse('logout')
        logout_data = {
            'refresh_token': str(refresh)
        }

        response = self.client.post(logout_url, logout_data)

        self.assertEqual(response.status_code, status.HTTP_205_RESET_CONTENT)

    def test_password_validation(self):
        """
        Test password validation during registration
        """
        # Test weak password
        weak_password_data = self.user_data.copy()
        weak_password_data.update({
            'email': 'weakpass@example.com',
            'password': '123',
            'password2': '123'
        })

        response = self.client.post(self.register_url, weak_password_data)

        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertIn('password', response.data)

    def test_email_validation(self):
        """
        Test email validation during registration
        """
        # Test invalid email format
        invalid_email_data = self.user_data.copy()
        invalid_email_data['email'] = 'invalid-email'

        response = self.client.post(self.register_url, invalid_email_data)

        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertIn('email', response.data)

# Run the tests
# python manage.py test authentication.tests