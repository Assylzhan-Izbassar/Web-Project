from django.urls import path
from .views import RegisterAPIView, current_user
from rest_framework_simplejwt import views as jwt_views

urlpatterns = [
  path('login/', jwt_views.TokenObtainPairView.as_view(), name='token_obtain_pair'),
  path('user/', current_user),
  path('register/', RegisterAPIView.as_view()),
]
