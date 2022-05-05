from django.urls import path
from .views import RegisterAPIView, post_list, post_detail, PostDetails
from rest_framework_simplejwt import views as jwt_views

urlpatterns = [
  path('login/', jwt_views.TokenObtainPairView.as_view(), name='token_obtain_pair'),
  path('register/', RegisterAPIView.as_view()),
  path('posts/', post_list),
  path('posts/<int:pk>/', PostDetails.as_view())
]
