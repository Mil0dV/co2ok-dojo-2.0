from accounts.api.viewset import SnippetViewSet
from rest_framework import routers

#api router settings
router = routers.DefaultRouter()
router.register('snippets',SnippetViewSet, base_name='snippet')