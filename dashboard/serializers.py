from rest_framework import serializers
from accounts.models import NinjaProfile, WebshopProfile
from django.contrib.auth.models import User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'password')
