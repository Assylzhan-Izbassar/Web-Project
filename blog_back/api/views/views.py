from django.shortcuts import render
from rest_framework import generics, permissions, mixins
from rest_framework.decorators import api_view
from rest_framework.response import Response
from api.serializers import RegisterSerializer, UserSerializer
from django.contrib.auth.models import User


# Create your views here.
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

@api_view(['GET'])
def current_user(request):
    user = request.user
    return Response({
      'id': user.id,
      'username': user.username,
      'first_name': user.first_name,
      'last_name': user.last_name
    })
