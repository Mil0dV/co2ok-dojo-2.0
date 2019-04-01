from django.db import models
from django.contrib.auth.models import User
from django.contrib.auth import get_user_model

# Create your models here.
class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    user_status = models.CharField(max_length=255)
    user_points = models.IntegerField()
    is_user_ninja = models.BooleanField(default=False)

    def __str__(self):
        return "profile van {0}".format(self.user.username)