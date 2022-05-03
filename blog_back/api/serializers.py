from rest_framework import serializers
from rest_framework.permissions import IsAuthenticated
from django.db import models
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from django.contrib.auth.hashers import make_password

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
    fields = '__all__'

  def validate_password(self, value: str) -> str:
    """
    Hash value passed by user.

    :param value: password of a user
    :return: a hashed version of the password
    """
    return make_password(value)
