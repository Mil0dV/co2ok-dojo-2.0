from django.shortcuts import render, redirect, get_object_or_404
from accounts.forms import Signup, Login
from accounts.models import NinjaProfile, WebshopProfile
from django.contrib.auth.models import User
from django.contrib.auth import login, authenticate, get_user_model
from django.conf import settings
from django.contrib.auth.views import logout
from django.contrib import messages
from django.contrib.auth.decorators import login_required
from django.urls import reverse
from django.utils.translation import ugettext as _
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt, ensure_csrf_cookie
from rest_framework import viewsets
from rest_framework.decorators import api_view, action
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from django.core import serializers
from .serializers import UserSerializer
from rest_framework.status import (
    HTTP_400_BAD_REQUEST,
    HTTP_404_NOT_FOUND,
    HTTP_200_OK
)

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
                NinjaProfile.objects.create(user=user, user_status=user_status, user_points=0)
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
        'signup_form': signup_form
    }
    return render(request, 'accounts/signup.html', context)



@csrf_exempt
@api_view(['POST'])
@permission_classes((AllowAny,))
def signin(request):

    try:
        # get login data from frontend
        email = request.data['body']['email']
        password = request.data['body']['password']
        sort = request.data['body']['sort']
    except:
        email = request.POST.get('email')
        password = request.POST.get('password')
        sort = request.POST.get('sort')

    #check of the given user email exist in the database
    user_email = User.objects.filter(email=email).count()

    #if email exist return email value else throw error
    if user_email != 0:
        currentUser = User.objects.get(email=email)
        #verify if the user given password is correct
        check_pass = currentUser.check_password(password)  # check_pass return a boolean
        if check_pass:
            #check of user login data has a record in the database
            username = User.objects.get(email=email).username
            user = authenticate(username=username, password=password)
            if user:
                token, _ = Token.objects.get_or_create(user=user)
                return Response({'token': token.key, 'id': token.user_id, 'authenticate': True}, status=HTTP_200_OK)
               
            else:
                print('error:false')
        else:
            passwordContext = {
                'authenticate': False,
                'error': 'Wrong Password'
            }
            return Response(passwordContext)
    else:
        emailContext = {
            'authenticate': False,
            'error': 'Wrong Email'
        }
        return Response(emailContext)

#the parameter user can be the user id, email, a data who can
# verify that the user is the authenticate user
def checkPassword(request, password, user):
    currentUser = User.objects.get(id=user)
    checkPass = currentUser.check_password(password)
    return checkPass


def checkEmail(request, email, user):
    user_email = User.objects.filter(email=email).count()
    return user_email 




@csrf_exempt
@api_view(['POST'])
@permission_classes((AllowAny,))
def updateAccount(request):
    try:
        # get login data from frontend
        email = request.data['body']['email']
        password = request.data['body']['password']
        country = request.data['body']['country']
        userId = request.data['body']['id']
        city = request.data['body']['city']
        zipcode = request.data['body']['zipcode']
        street = request.data['body']['street']
        number = request.data['body']['number']
    except:
        email = request.POST.get('email')
        password = request.POST.get('password')
        country = request.POST.get('country')
        userId = request.POST.get('id')
        city = request.POST.get('city')
        zipcode = request.POST.get('zipcode')
        street = request.POST.get('street')
        number = request.POST.get('number')

    #check if user password is correct before updating user data
    if checkPassword(request, password, userId):
       
        #update user email
        User.objects.filter(id=userId).update(email=email)
        #update profile data
        WebshopProfile.objects.filter(user_id=userId).update(
            country=country,
            city=city,
            zipCode=zipcode,
            street=street,
            number=number
        )
        success = {
            'update': True,
            'msg': 'Profile data succesfully updated'
        }
        return Response(context)
    else:
        error = {
            'update': False,
            'msg': 'Wrong passdword'
        }
        return Response(error)


@csrf_exempt
@api_view(['POST'])
@permission_classes((AllowAny,))
def updatePassword(request):
    try:
        # get login data from frontend
        currentPassword = request.data['body']['currentPassword']
        newPassword = request.data['body']['newPassword']
        userId = request.data['body']['id']
    except:
        currentPassword = request.POST.get('currentPassword')
        newPassword = request.POST.get('newPassword')
        userId = request.POST.get('id')

    if checkPassword(request, currentPassword, userId):
        user = User.objects.get(id=userId)
        #update password
        user.set_password(newPassword)
        success = {
            'update': True,
            'msg': 'Password succesfully updated'
        }
    else:
        error = {
            'update': False,
            'msg': 'Wrong password'
        }
        return Response(error)



@csrf_exempt
@api_view(['POST'])
@permission_classes((AllowAny,))
def deleteAccount(request):
    try:
        # get login data from frontend
        password = request.data['body']['password']
        userId = request.data['body']['id']
    except:
        password = request.POST.get('password')
        userId = request.POST.get('id')

    if checkPassword(request, password, userId):
        try:
            user = User.objects.get(id=userId)
            user.delete()
            success: {
                'delete': True,
                'msg': 'Account succesfully deleted'
            }
            return Response(success)
        except User.DoesNotExist:
            error = {
            'delete': False,
            'msg': "This user don't exist"
            }
            return Response(error)
        except Exception as e:
            return Response(e.message)

    else:
        error = {
            'delete': False,
            'msg': 'Wrong password'
        }
        return Response(error)









# def signin(request):
#     signIn_form = Login(request.POST or None)
#     if request.method == "POST":
#         # signIn_form = Login(request.POST or None)
#         #if form is valid, get user login data
#         if signIn_form.is_valid():
#             email = signIn_form.cleaned_data['email']
#             password = signIn_form.cleaned_data['password']
#             #check of user login data has a record in the database
#             username = User.objects.get(email=email).username
#             user = authenticate(username=username, password=password)
#             #if user is found in the database, login and redirect else return an error
#             if user:
#                 login(request, user)
#                 get_user_status = Profile.objects.get(user__email=email).user_status
#                 if get_user_status == "user":
#                     return redirect('/accounts/profile')
#                 else:
#                     return redirect('/dashboard/profile')
#                 # redirect_user(email)
#             else:
#                 print('error:true')

#     else:
#         form  = Login()

#     context = {
#         'signin_form' : signIn_form
#     }
#     return render(request, 'accounts/login.html', context)


def signout(request):
    logout(request)
    return redirect('home')


@login_required
def profile(request):
    context = {
        'domainname': request.get_host() if request.get_host().strip() else 'test.co2ok.ninja'
    }
    return render(request, 'accounts/profile.html', context)
