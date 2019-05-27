# from accounts.api.viewset import SnippetViewSet
# from accounts.views import views
from dashboard.views import UserView
from blog.views import BlogView
from ninja_profile.views import NinjaView
from rest_framework import routers

#api router settings
router = routers.DefaultRouter()
# router.register('snippets', SnippetViewSet, base_name='snippet')
router.register('user', UserView, base_name='userdata')
router.register('blog', BlogView, base_name=' blogdata')
router.register('ninja', NinjaView, base_name="ninjadata")
