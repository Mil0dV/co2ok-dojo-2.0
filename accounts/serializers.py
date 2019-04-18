from rest_framework import serializers
from accounts.models import Profile
from django.contrib.auth.models import User


class SnippetSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = Profile
        fields = ('user_status', 'user_points')


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'email', 'password')

