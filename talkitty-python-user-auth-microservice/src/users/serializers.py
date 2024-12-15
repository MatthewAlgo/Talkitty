from django.contrib.auth import get_user_model
from rest_framework import serializers

# Get the custom user model (useful for projects with a custom User model)
User = get_user_model()

class UserSerializer(serializers.ModelSerializer):
    """
    Serializer for the User model.
    """
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'first_name', 'last_name', 'is_active', 'is_staff', 'date_joined')
        read_only_fields = ('id', 'date_joined')

class UserCreateSerializer(serializers.ModelSerializer):
    """
    Serializer for creating a new User (with password handling).
    """
    password = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'password', 'first_name', 'last_name', 'is_active', 'is_staff')
        read_only_fields = ('id',)

    def create(self, validated_data):
        """
        Create and return a new user with a hashed password.
        """
        password = validated_data.pop('password')
        user = User(**validated_data)
        user.set_password(password)  # Ensure the password is hashed
        user.save()
        return user

class UserUpdateSerializer(serializers.ModelSerializer):
    """
    Serializer for updating user details.
    """
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'first_name', 'last_name', 'is_active', 'is_staff')
        read_only_fields = ('id',)
