from django.urls import path
from django.conf.urls import url
from accounts.views import profile
from rest_framework.authtoken import views

app_name = "accounts"
urlpatterns = [
    # path('profile/', view=views.profile, name="profile"),
    url(r"^profile/$", profile, name="profile"),
    path('get-user-auth-token/', views.obtain_auth_token, name='get_user_auth_token'),
    # url(r"^userdata/$", views.userData, name="userdatas"),
]
