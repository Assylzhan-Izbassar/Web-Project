from rest_framework import serializers
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth.models import User
from .models import Post
from django.contrib.auth import authenticate
from django.contrib.auth.hashers import make_password


class PostSerializer(serializers.Serializer):
  id = serializers.IntegerField(read_only=True)
  author_id = serializers.IntegerField()
  title = serializers.CharField()
  summary = serializers.CharField()
  createdAt = serializers.DateField()
  updatedAt = serializers.DateField()
  content = serializers.CharField()

  def create(self, validated_data):
    post = Post.objects.create(author_id=validated_data.get('author_id'),
                               title=validated_data.get('title'),
                               summary=validated_data.get('summary'),
                               createdAt=validated_data.get('createdAt'),
                               updatedAt=validated_data.get('updatedAt'),
                               content=validated_data.get('content'))
    return post


# Register serializer
class RegisterSerializer(serializers.ModelSerializer):
  class Meta:
    model = User
    fields = ('id',
              'username',
              'password',
              'first_name',
              'last_name')
    extra_kwargs = {
      'password': {'write_only': True},
    }

    def create(self, validate_data):
      user = User.objects.create_user(username=validate_data['username'],
                                      password=validate_data['password'],
                                      first_name=validate_data['first_name'],
                                      last_name=validate_data['last_name'])
      return user


# User serializer
class UserSerializer(serializers.ModelSerializer):
  class Meta:
    model = User
    fields = '__all__'

  def validate_password(self, value: str) -> str:
    return make_password(value)
