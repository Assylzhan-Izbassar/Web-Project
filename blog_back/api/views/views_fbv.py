from ..models import Tag, Comment, Post
from ..serializers import TagSerializer, CommentSerializer, UserSerializer

from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status


@api_view(['GET'])
def current_user(request):
  user = request.user
  serializer = UserSerializer(user)
  return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(['GET', 'POST'])
def comment_list(request):
  if request.method == 'GET':
    comments = Comment.objects.all()
    serializer = CommentSerializer(comments, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)
  elif request.method == 'POST':
    serializer = CommentSerializer(data=request.data)
    if serializer.is_valid():
      serializer.save()
      return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors)


@api_view(['GET'])
def post_comments(request, post_id):
  try:
    post = Post.objects.get(id=post_id)
  except Post.DoesNotExist as e:
    return Response({'message': str(e)}, status=400)

  if request.method == 'GET':
    comments = post.comment_set.all()
    serializer = CommentSerializer(comments, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)

def user_posts(request, user_id):
  try:
    post = Post.objects.filter(author_id=user_id).order_by('createdAt')
  except Post.DoesNotExist as e:
    return Response({'message': str(e)}, status=400)

@api_view(['GET', 'POST'])
def tag_list(request):
  if request.method == 'GET':
    tags = Tag.objects.all()
    serializer = TagSerializer(tags, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)

  elif request.method == 'POST':
    serializer = TagSerializer(data=request.data)
    if serializer.is_valid():
      serializer.save()
      return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors)


@api_view(['GET', 'PUT', 'DELETE'])
def tag_detail(request, tag_id):
  try:
    tag = Tag.objects.get(id=tag_id)
  except Tag.DoesNotExist as e:
    return Response({'message': str(e)}, status=400)

  if request.method == 'GET':
    serializer = TagSerializer(tag)
    return Response(data=serializer.data, status=status.HTTP_200_OK)

  elif request.method == 'PUT':
    serializer = TagSerializer(instance=tag, data=request.data)
    if serializer.is_valid():
      serializer.save()
      return Response(serializer.data)
    return Response(serializer.errors)

  elif request.method == 'DELETE':
    tag.delete()
    return Response({'message': 'deleted'}, status=status.HTTP_204_NO_CONTENT)
