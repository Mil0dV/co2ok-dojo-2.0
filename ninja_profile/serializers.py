from rest_framework import serializers
from accounts.models import NinjaProfile
from django.contrib.auth.models import User

class NinjaSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email')
