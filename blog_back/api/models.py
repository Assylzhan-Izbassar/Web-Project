from django.db import models
from django.contrib.auth.models import User


# Create your models here.
class Post(models.Model):
  author = models.ForeignKey(User, on_delete=models.DO_NOTHING)
  title = models.CharField(max_length=300)
  summary = models.CharField(max_length=500)
  createdAt = models.DateField()
  updatedAt = models.DateField()
  content = models.CharField(max_length=700)

  class Meta:
    verbose_name = 'Post'
    verbose_name_plural = 'Posts'

  def to_json(self):
    return {
      'id': self.id,
      'author_id': self.author.id,
      'title': self.title,
      'summary': self.summary,
      'createdAt': self.createdAt,
      'updatedAt': self.updatedAt,
      'content': self.content
    }


class Tag(models.Model):
  title = models.CharField(max_length=100)
  content = models.CharField(max_length=200)

  class Meta:
    verbose_name = 'Tag'
    verbose_name_plural = 'Tags'

  def to_json(self):
    return {
      'id': self.id,
      'title': self.title,
      'content': self.content
    }


class PostTag(models.Model):
  post = models.ForeignKey(Post, on_delete=models.DO_NOTHING)
  tag = models.ForeignKey(Tag, on_delete=models.CASCADE)

  def to_json(self):
    return {
      'id': self.id,
      'post_id': self.post.id,
      'tag_id': self.tag.id
    }


class Comment(models.Model):
  title = models.CharField(max_length=100)
  publishedAt = models.DateField()
  content = models.CharField(max_length=400)
  post = models.ForeignKey(Post, on_delete=models.DO_NOTHING)

  class Meta:
    verbose_name = 'Comment'
    verbose_name_plural = 'Comments'

  def to_json(self):
    return {
      'id': self.id,
      'title': self.title,
      'content': self.content,
      'post_id': self.post.id
    }
