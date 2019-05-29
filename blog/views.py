from django.shortcuts import render
from blog.models import Blog

from rest_framework import viewsets, permissions
from rest_framework.decorators import api_view, action
from rest_framework.response import Response
from rest_framework.permissions import AllowAny

from django.views.decorators.csrf import csrf_exempt, ensure_csrf_cookie
from django.core import serializers
from .serializers import BlogSerializer

# Create your views here.
class BlogView(viewsets.ModelViewSet):
    queryset = Blog.objects.all()
    serializer_class = BlogSerializer
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)

    @csrf_exempt
    @action(methods=['get'], detail=False)
    def article(self, request):
        blog_id = request.query_params.get('id')
        article = self.get_queryset().get(pk=blog_id)
        serializer = self.get_serializer_class()(article)
        return Response(serializer.data)
