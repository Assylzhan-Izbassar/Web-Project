from django.urls import path
from .views import RegisterAPIView, PostListAPIView, PostDetailAPIView
from .views import current_user, tag_list, tag_detail, comment_list, post_comments, user_posts
from rest_framework_simplejwt import views as jwt_views

urlpatterns = [
  path('login/', jwt_views.TokenObtainPairView.as_view(), name='token_obtain_pair'),
  path('register/', RegisterAPIView.as_view()),
  path('user/', current_user),

  path('user/<int:user_id>/posts/', user_posts),
  path('posts/', PostListAPIView.as_view()),
  path('posts/<int:pk>/', PostDetailAPIView.as_view()),
  path('posts/<int:post_id>/comments/', post_comments),

  path('tags/', tag_list),
  path('tags/<int:tag_id>/', tag_detail),

  path('comments/', comment_list),
]
