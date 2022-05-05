from rest_framework import generics, mixins
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from rest_framework.response import Response
from api.serializers import RegisterSerializer, UserSerializer, PostSerializer
from ..models import Post
from django.contrib.auth.models import User, Permission


# Register Generic View
class RegisterAPIView(generics.GenericAPIView):
  serializer_class = RegisterSerializer

  def post(self, request, *args, **kwargs):
    serializer = self.get_serializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    user = serializer.save()

    return Response({
      "user": UserSerializer(user, context=self.get_serializer_context()).data,
      "message": "User Created Successfully.  Now perform Login to get your token"
    })


# Post Generic Views
class PostListAPIView(mixins.ListModelMixin,
                      mixins.CreateModelMixin,
                      generics.GenericAPIView):
  queryset = Post.objects.all()
  serializer_class = PostSerializer

  codename = None

  def get(self, request, *args, **kwargs):
    return self.list(request, *args, **kwargs)

  def post(self, request, *args, **kwargs):
    permission = Permission.objects.get(codename=self.codename)
    if permission not in request.user.user_permissions.all():
      return Response(status=403, data = {
        "error": "not authorized to add"
      })
    return self.create(request, *args, **kwargs)


class PostDetailAPIView(mixins.RetrieveModelMixin,
                        mixins.UpdateModelMixin,
                        mixins.DestroyModelMixin,
                        generics.GenericAPIView):
  queryset = Post.objects.all()
  serializer_class = PostSerializer
  permission_classes = [IsAuthenticatedOrReadOnly,]

  def get(self, request, *args, **kwargs):
    return self.retrieve(request, *args, **kwargs)

  def put(self, request, *args, **kwargs):
    return self.update(request, *args, **kwargs)

  def delete(self, request, *args, **kwargs):
    return self.destroy(request, *args, **kwargs)
