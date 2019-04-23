from rest_framework import serializers
from accounts.models import WebshopProfile, NinjaProfile
from django.contrib.auth.models import User


class NinjaSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = NinjaProfile
        fields = ('user_status', 'user_points')


class WebshopSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = WebshopProfile
        fields = ('user_status', 'country', 'city', 'zipCode', 'street', 'number')


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username','email', 'password')

