from rest_framework import serializers
from blog.models import Blog

class BlogSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = Blog
        fields = ('id', 'blog_title', 'blog_image', 'blog_preface', 'blog_content', 'posted_on')
