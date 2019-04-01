from django.contrib import admin
from .models import Profile
# from django.contrib.auth import admin as auth_admin
# from django.contrib.auth import get_user_model

# from co2ok_dojo.users.forms import UserChangeForm, UserCreationForm

# User = get_user_model()
admin.site.register(Profile)
