from django.apps import AppConfig
from django.utils.translation import gettext_lazy as _

class AuthenticationConfig(AppConfig):
    """
    Configuration for the Authentication application.

    This class provides metadata and configuration options
    for the authentication Django app.
    """
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'authentication'
    verbose_name = _('User Authentication')

    def ready(self):
        """
        Perform initialization when the app is ready.

        This method is called once the application registry
        is fully populated and can be used to perform
        one-time configuration tasks.
        """
        # Optional: Import and register any signals
        # For example:
        # import authentication.signals
        pass