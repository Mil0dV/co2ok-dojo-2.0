from rest_framework import serializers
from blog.models import Blog

class BlogSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = Blog
        fields = ('blog_title', 'blog_image', 'blog_content', 'posted_on')
