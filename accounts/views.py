from django.shortcuts import render, redirect, get_object_or_404
from accounts.forms import Signup, Login
from accounts.models import Profile
from django.contrib.auth.models import User
from django.contrib.auth import login, authenticate, get_user_model
from django.conf import settings
from django.contrib.auth.views import logout
from django.contrib import messages
from django.contrib.auth.decorators import login_required
from django.urls import reverse
from django.utils.translation import ugettext as _

# Create your views here.

def signup(request):
    signup_form = Signup(request.POST or None)
    if request.method == "POST":
    #    signup_form = Signup(request.POST or None)
       if signup_form.is_valid():
            #get user registration record data
            email = signup_form.cleaned_data['email']
            username = signup_form.cleaned_data['username']
            user_status = signup_form.cleaned_data.get('user_status')
            password = signup_form.cleaned_data['password']
            #register user as new user
            if request.user is not None:
                User.objects.create_user(username=username, email=email, password=password)
                #authenticate the new user record data
                user = authenticate(username=username, password=password)
                #create current user profile
                Profile.objects.create(user=user, user_status=user_status, user_points=0)
                #sign new user in
                login(request, user)
                #check if user is merchant or normal user to redirect him to the dashboard of profile
                if user_status == 'user':
                    return redirect('/accounts/profile')
                else:
                    return redirect('/dashboard/profile')
        # else:
        #     print('form is not valid')
    else:
        form = Signup()
        
    context = {
      'signup_form' : signup_form
    }
    return render(request, 'accounts/signup.html', context)


def signin(request):
    signIn_form = Login(request.POST or None)
    if request.method == "POST":
        # signIn_form = Login(request.POST or None)
        #if form is valid, get user login data
        if signIn_form.is_valid():
            email = signIn_form.cleaned_data['email']
            password = signIn_form.cleaned_data['password']
            #check of user login data has a record in the database
            username = User.objects.get(email=email).username
            user = authenticate(username=username, password=password)
            #if user is found in the database, login and redirect else return an error
            if user:
                login(request, user)
                get_user_status = Profile.objects.get(user__email=email).user_status
                if get_user_status == "user":
                    return redirect('/accounts/profile')
                else:
                    return redirect('/dashboard/profile')
                # redirect_user(email)
            else:
                print('error:true')    

    else:
        form  = Login()

    context = {
        'signin_form' : signIn_form
    }
    return render(request, 'accounts/login.html', context)


def signout(request):
    logout(request)
    return redirect('home')


@login_required
def profile(request):
    context = {
      'domainname': request.get_host() if request.get_host().strip() else 'test.co2ok.ninja'
    }
    return render(request, 'accounts/profile.html', context)
