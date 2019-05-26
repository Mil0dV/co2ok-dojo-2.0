from django.db import models
from django.contrib.auth.models import User
from django.contrib.auth import get_user_model
from rest_framework.authtoken.models import Token

# Create your models here.
class NinjaProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    user_status = models.CharField(max_length=255)
    user_points = models.IntegerField()
    supported_project = models.CharField(max_length=255)
    is_user_ninja = models.BooleanField(default=False)

    def __str__(self):
        return "profile van {0}".format(self.user.email)

    #check if the usr id & token sended from the front-end exist
    def check_user_auth_data(self, id):
        user_id = User.objects.filter(id=id).count()
        token = Token.objects.filter(user_id=id).count()
        user_idToken_exist = False
        if user_id > 0 and token > 0:
            user_idToken_exist = True
        else:
            user_idToken_exist = False
        return user_idToken_exist


class WebshopProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    user_status = models.CharField(max_length=255)
    country = models.CharField(max_length=255)
    city    = models.CharField(max_length=255)
    zipCode = models.CharField(max_length=255)
    street  = models.CharField(max_length=255)
    number  = models.IntegerField()
    link    = models.CharField(max_length=255)
    merchant_id = models.CharField(max_length=255)

    def __str__(self):
        return "profile van {0}".format(self.user.email)

    #check if the usr id & token sended from the front-end exist
    def check_user_auth_data(self, id):
        user_id = User.objects.filter(id=id).count()
        token = Token.objects.filter(user_id=id).count()
        user_idToken_exist = False
        if user_id > 0 and token > 0:
            user_idToken_exist = True
        else:
            user_idToken_exist = False
        return user_idToken_exist



