from django.urls import path
from django.conf.urls import url
from accounts import views

app_name = "accounts"
urlpatterns = [
    # path('profile/', view=views.profile, name="profile"),
    url(r"^profile/$", views.profile, name="profile"),
    # M: updateAccount en deleteAccount zijn totaal niet beveiligd, dus voor nu even uit
    # path('updateAccount/', views.updateAccount, name='updateAccount'),
    # path('deleteAccount/', views.deleteAccount, name='deleteAccount'),
    path('updatePassword/', views.updatePassword, name='updatePassword'), 
    path('sendMail/', views.sendMail, name='sendMail'),
]
