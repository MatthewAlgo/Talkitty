from django.apps import AppConfig

class AuthenticationConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'authentication'

    def ready(self):
        """
        Optional method to perform initialization tasks when the app is ready.
        This can include importing signals or performing startup configurations.
        """
        # Example of importing signals (if you have any)
        # import authentication.signals
        pass