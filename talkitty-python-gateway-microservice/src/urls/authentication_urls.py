from django.urls import path
from authentication_gate.views import (
    CustomTokenObtainPairView,
    TokenRefreshView,
    RegisterView,
    LogoutView,
    UserProfileView
)

urlpatterns = [
    path('login/', CustomTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('login/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('register/', RegisterView.as_view(), name='register'),
    path('logout/', LogoutView.as_view(), name='logout'),
    path('profile/', UserProfileView.as_view(), name='user_profile'),
]