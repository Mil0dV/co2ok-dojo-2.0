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
from django.contrib.auth.hashers import make_password
from rest_framework.status import (
    HTTP_400_BAD_REQUEST,
    HTTP_404_NOT_FOUND,
    HTTP_200_OK
)
from django.conf import settings
#--------------- email imports ---------------------
from django.core.mail import send_mail
from django.template.loader import get_template

# Create your views here.


# def signup(request):
#     signup_form = Signup(request.POST or None)
#     if request.method == "POST":
#         #    signup_form = Signup(request.POST or None)
#        if signup_form.is_valid():
#             #get user registration record data
#             email = signup_form.cleaned_data['email']
#             username = signup_form.cleaned_data['username']
#             user_status = signup_form.cleaned_data.get('user_status')
#             password = signup_form.cleaned_data['password']
#             #register user as new user
#             if request.user is not None:
#                 User.objects.create_user(username=username, email=email, password=password)
#                 #authenticate the new user record data
#                 user = authenticate(username=username, password=password)
#                 #create current user profile
#                 NinjaProfile.objects.create(user=user, user_status=user_status, user_points=0)
#                 #sign new user in
#                 login(request, user)
#                 #check if user is merchant or normal user to redirect him to the dashboard of profile
#                 if user_status == 'user':
#                     return redirect('/accounts/profile')
#                 else:
#                     return redirect('/dashboard/profile')
#         # else:
#         #     print('form is not valid')
#     else:
#         form = Signup()

#     context = {
#         'signup_form': signup_form
#     }
#     return render(request, 'accounts/signup.html', context)


def userToken(request, user):
    if user:
        token, _ = Token.objects.get_or_create(user=user)
        return Response({'token': token.key, 'id': token.user_id, 'authenticate': True}, status=HTTP_200_OK)
    else:
        print('error:false')


def checkEmail(request, useremail):
    user_email = User.objects.filter(email=useremail).count()
    return user_email


@csrf_exempt
@api_view(['POST'])
@permission_classes((AllowAny,))
def signup(request):
    # get login data from webshop user form
    username = request.data['body']['company']
    email = request.data['body']['email']
    password = request.data['body']['password']
    sort = request.data['body']['sort']  # determine if user is a merchant(webshop) of a ninja(normal user)       
    
    #check of the entry username and email already exist
    user_name = User.objects.filter(username=username).count()
    if checkEmail(request, email) == 0 and user_name == 0:
        if request.user is not None:
            user = User.objects.create_user(username=username, email=email, password=password)
            user.save()
            userAuth = authenticate(username=username, password=password)
    
            if sort == 'webshop':#is user a merchant of ninja
                #webshop profile data
                # company = request.data['body']['company']
                country = request.data['body']['country']
                city = request.data['body']['city']
                zipcode = request.data['body']['zipcode']
                street = request.data['body']['street']
                number = request.data['body']['number']
                link = request.data['body']['link']
    
                WebshopProfile.objects.create(
                    user=user,
                    user_status=sort,
                    country=country,
                    city=city,
                    zipCode=zipcode,
                    street=street,
                    number=number,
                    link=link
                )
                # userToken(request, user)
                if userAuth:
                    token, _ = Token.objects.get_or_create(user=user)
                    return Response({'token': token.key, 'id': token.user_id, 'authenticate': True}, status=HTTP_200_OK)
                else:
                    print('error:false')
            else:
                NinjaProfile.objects.create(user=user, user_status=sort, user_points=0)
                userToken(request, user)
    
                if userAuth:
                    token, _ = Token.objects.get_or_create(user=user)
                    return Response({'token': token.key, 'id': token.user_id, 'authenticate': True}, status=HTTP_200_OK)
                else:
                    print('error:false')
    
        else:
            pass
            #user is None
    else:
        return Response({'error': 'Username or email already exist', 'authenticate': False})
    


def checkPassword(request, password, userid):
    currentUser = User.objects.get(id=userid)
    checkPass = currentUser.check_password(password)
    return checkPass



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

    #if email exist return email value else throw error
    if checkEmail(request, email) != 0:
        #verify if the user given password is correct
        currentUser = User.objects.get(email=email)
        if checkPassword(request, password, currentUser.id):
            #check of user login data has a record in the database
            username = User.objects.get(email=email).username
            user = authenticate(username=username, password=password)
            # userToken(request, user)
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



@csrf_exempt
@api_view(['POST'])
@permission_classes((AllowAny,))
def updateAccount(request):
    try:
        # get login data from frontend
        email = request.data['body']['email']
        # password = request.data['body']['password']
        country = request.data['body']['country']
        userId = request.data['body']['id']
        city = request.data['body']['city']
        zipcode = request.data['body']['zipcode']
        street = request.data['body']['street']
        number = request.data['body']['number']
        link = request.data['body']['link']
    except:
        email = request.POST.get('email')
        # password = request.POST.get('password')
        country = request.POST.get('country')
        userId = request.POST.get('id')
        city = request.POST.get('city')
        zipcode = request.POST.get('zipcode')
        street = request.POST.get('street')
        number = request.POST.get('number')
        link = request.POST.get('link')

    #check if user password is correct before updating user data
    # if checkPassword(request, password, userId):
       
    #update user email
    print(userId)
    User.objects.filter(id=userId).update(email=email)
    #update profile data
    WebshopProfile.objects.filter(user_id=userId).update(
        country=country,
        city=city,
        zipCode=zipcode,
        street=street,
        number=number,
        link=link
    )
    success = {
        'update': True,
        'msg': 'Profile data succesfully updated'
    }
    return Response(success)
    
    # else:
    #     error = {
    #         'update': False,
    #         'msg': 'Wrong passdword'
    #     }
    #     return Response(error)


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

    # if checkPassword(request, currentPassword, userId):
    print(currentPassword)
    print(newPassword)
    user = User.objects.get(id=userId)
    if user.check_password(currentPassword):
        #update password
        user.set_password(newPassword)
        user.save()
        # userPass = User.objects.filter(id=userId)
        # userPass.update(password=make_password(newPassword))
        success = {
            'update': True,
            'msg': 'Password succesfully updated'
        }
        return Response(success)
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
        # password = request.data['body']['password']
        userId = request.data['body']['id']
    except:
        # password = request.POST.get('password')
        userId = request.POST.get('id')

    # if checkPassword(request, password, userId):
    try:
        user = User.objects.filter(id=userId)
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
    

    # else:
    #     error = {
    #         'delete': False,
    #         'msg': 'Wrong password'
    #     }
    #     return Response(error)


@csrf_exempt
@api_view(['POST'])
@permission_classes((AllowAny,))
def sendMail(request):
    try:
        userEmail = request.data['body']['email']
    except:
        userEmail = request.POST.get('email')

    if checkEmail(request, userEmail) != 0:
        subject = "Password reset"
        message = 'Click the link to reset your password, temporary password: k,jasflkuhsrlkjjbl'
        from_email = settings.EMAIL_HOST_USER
        to_list = [userEmail]
        send_mail(subject, message, from_email, to_list, fail_silently=True)
        # email_template = get_template('mail template').render(contenu du message)
        success = {
            'status': True,
            'msg': 'An email has been sended'
        }
        return Response(success)
    else:
        error = {
            'status': False,
            'msg': 'Wrong email'
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
