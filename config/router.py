from accounts.api.viewset import SnippetViewSet
from accounts import views
from rest_framework import routers

#api router settings
router = routers.DefaultRouter()
router.register('snippets', SnippetViewSet, base_name='snippet')
router.register('user', views.UserView, base_name='userdata')
router.register('user/(?P<pk>[^/.]+)', views.UserView, base_name='userdata')
# router.register('userdata', views.userData, base_name='userdatas')
