from django.db import models

# Create your models here.
class Blog(models.Model):
    blog_title = models.CharField(max_length=255)
    blog_image = models.ImageField(upload_to='blog')
    blog_content = models.TextField()
    posted_on = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return "Blog naam: {0}".format(self.blog_title)
        
