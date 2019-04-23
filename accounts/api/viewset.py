from accounts.models import Profile
from .serializers import SnippetSerializer
from rest_framework import viewsets
from rest_framework.response import Response

class SnippetViewSet(viewsets.ViewSet):
    def list(self, request):
        queryset = Profile.objects.all()
        serializer = SnippetSerializer(queryset, many=True)
        return Response(serializer.data)

 
# class SnippetViewSet(viewsets.ModelViewSet):
#     queryset = Profile.objects.all()
#     serializer_class = SnippetSerializer