from .models import Post, Tag, Comment
from rest_framework import serializers
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from django.contrib.auth.hashers import make_password


class PostSerializer(serializers.Serializer):
  id = serializers.IntegerField(read_only=True)
  author_id = serializers.IntegerField()
  title = serializers.CharField()
  summary = serializers.CharField()
  createdAt = serializers.DateTimeField()
  updatedAt = serializers.DateTimeField(required=False)
  content = serializers.CharField()

  def create(self, validated_data):
    post = Post.objects.create(
      author_id=validated_data.get('author_id'),
      title=validated_data.get('title'),
      summary=validated_data.get('summary'),
      createdAt=validated_data.get('createdAt'),
      updatedAt=validated_data.get('updatedAt'),
      content=validated_data.get('content')
    )
    return post

  def update(self, instance, validated_data):
    instance.author_id = validated_data['author_id']
    instance.title = validated_data['title']
    instance.summary = validated_data['summary']
    instance.createdAt = validated_data['createdAt']
    instance.updatedAt = validated_data['updatedAt']
    instance.content = validated_data['content']

    instance.save()
    return instance

class CommentSerializer(serializers.Serializer):
  id = serializers.IntegerField(read_only=True)
  title = serializers.CharField()
  publishedAt = serializers.DateTimeField()
  content = serializers.CharField()
  post_id = serializers.IntegerField()

  def create(self, validated_data):
    comment = Comment.objects.create(
      title=validated_data['title'],
      publishedAt=validated_data['publishedAt'],
      content=validated_data['content'],
      post_id=validated_data['post_id']
    )
    return comment

class TagSerializer(serializers.ModelSerializer):
  title = serializers.CharField()
  content = serializers.CharField()

  class Meta:
    model = Tag
    fields = (
      'id',
      'title',
      'content'
    )


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


class UserSerializer(serializers.ModelSerializer):
  class Meta:
    model = User
    fields = ('id',
              'username',
              'first_name',
              'last_name')

  def validate_password(self, value: str) -> str:
    return make_password(value)
