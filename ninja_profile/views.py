from django.shortcuts import render

from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User
from accounts.models import NinjaProfile as Profile
#-------------------- rest framework imports -----------------------------------
from django.core import serializers
from .serializers import NinjaSerializer
from rest_framework import viewsets, permissions
from rest_framework.decorators import api_view, action
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from rest_framework.decorators import api_view, permission_classes
from django.views.decorators.csrf import csrf_exempt, ensure_csrf_cookie
from rest_framework.permissions import AllowAny
import json

class NinjaView(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = NinjaSerializer
    permission_classes = (permissions.IsAuthenticated,)

    @csrf_exempt
    @action(methods=['get'], detail=False)
    def ninjaData(self, request):
        ninjaId = request.query_params.get('id')
        ninja = self.get_queryset().get(pk=ninjaId)
        serializer = self.get_serializer_class()(ninja)

        profile = Profile.objects.get(user_id=ninjaId)
        context = {
            'ninjaData': serializer.data,
            'ninjaProfileData': {
                'status': profile.user_status,
                'ninjaPoints': profile.user_points,
                'isNinja': profile.is_user_ninja,
                'domainname': request.get_host() if request.get_host().strip() else 'test.co2ok.ninja'
            }
        }
        return Response(context)


