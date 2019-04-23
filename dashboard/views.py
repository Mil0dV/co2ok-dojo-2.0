from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User
from accounts.models import WebshopProfile as Profile
#-------------------- rest framework imports -----------------------------------
from django.core import serializers
from .serializers import UserSerializer
from rest_framework import viewsets
from rest_framework.decorators import api_view, action
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from rest_framework.decorators import api_view, permission_classes
from django.views.decorators.csrf import csrf_exempt, ensure_csrf_cookie


#------------------------------------------------------------------------------

# Create your views here.
# @login_required
# def profile(request):
#     context = {

#     }
#     return render(request, 'dashboard/profile.html', context)

class UserView(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    @csrf_exempt
    @action(methods=['get'], detail=False)
    # @api_view(['GET'])
    def authenticateUser(self, request):
        userId = request.query_params.get('id')

        user = self.get_queryset().get(pk=userId)
        serializer = self.get_serializer_class()(user)
        #get current user profile data
        profile = Profile.objects.get(user_id=userId)
        context = {
            'userdata': serializer.data,
            'userProfileData': {
                'user_status': profile.user_status,
                'country': profile.country,
                'city': profile.city,
                'zipcode': profile.zipCode,
                'street': profile.street,
                'number': profile.number,
                'link': profile.link
            }
        }
        return Response(context)
