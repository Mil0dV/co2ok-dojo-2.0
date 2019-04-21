# from accounts.api.viewset import SnippetViewSet
# from accounts.views import views
from dashboard.views import UserView
from rest_framework import routers

#api router settings
router = routers.DefaultRouter()
# router.register('snippets', SnippetViewSet, base_name='snippet')
router.register('user', UserView, base_name='userdata')
