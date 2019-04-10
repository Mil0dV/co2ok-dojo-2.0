from rest_framework import serializers
from accounts.models import Profile

class SnippetSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = Profile
        fields = ('user_status', 'user_points')

