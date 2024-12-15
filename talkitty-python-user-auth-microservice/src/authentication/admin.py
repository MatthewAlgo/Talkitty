from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.utils.translation import gettext_lazy as _

from users.models import User

class CustomUserAdmin(BaseUserAdmin):
    """Custom admin view for the User model"""
    model = User

    # The fields to be used in displaying the User model
    list_display = ('email', 'name', 'is_staff', 'is_active')

    # Fieldsets for the user edit page
    fieldsets = (
        (None, {'fields': ('email', 'password')}),
        (_('Personal Info'), {'fields': ('name',)}),
        (_('Permissions'), {
            'fields': (
                'is_active',
                'is_staff',
                'is_superuser',
                'groups',
                'user_permissions'
            )
        }),
        (_('Important dates'), {'fields': ('last_login',)}),
    )

    # Fieldsets for creating a new user
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': (
                'email',
                'name',
                'password1',
                'password2',
                'is_staff',
                'is_active'
            )
        }),
    )

    # Ordering by email
    ordering = ('email',)

    # Fields used for searching
    search_fields = ('email', 'name')

# Check if the model has already been registered
if not admin.site.is_registered(User):
    admin.site.register(User, CustomUserAdmin)
