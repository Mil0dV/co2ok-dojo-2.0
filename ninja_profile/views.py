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
        #ninja_authData = id + token
        ninja_authData_exist = Profile.check_user_auth_data(self, ninjaId)
        if ninja_authData_exist:
            ninja = self.get_queryset().get(pk=ninjaId)
            serializer = self.get_serializer_class()(ninja)

            profile = Profile.objects.get(user_id=ninjaId)
            context = {
                'ninjaData': serializer.data,
                'ninjaProfileData': {
                    'status': profile.user_status,
                    'ninjaPoints': profile.user_points,
                    'isNinja': profile.is_user_ninja,
                    'supportedProject': profile.supported_project,
                    'domainname': request.get_host() if request.get_host().strip() else 'test.co2ok.ninja'
                },
                'authData': True
            }
        else:
            return Response({'authData': False})
        return Response(context)

    @csrf_exempt
    @action(methods=['get'], detail=False)
    def supported_project(self, request):
        ninjaId = request.query_params.get('id')
        new_project = request.query_params.get('project')
        
        if new_project == 'get':
            project = Profile.objects.get(user_id=ninjaId).supported_project
            return Response({'update': False, 'currentProject': project, 'msg': 'You are supported the {} project'.format(project)})
        else:
            current_project = Profile.objects.get(user_id=ninjaId).supported_project
            profile = Profile.objects.filter(user_id=ninjaId)
            profile.update(supported_project=new_project)
            return Response({'update': True, 'newProject': new_project, 'currentProject': current_project, 'msg': 'You are now supported the {} project'.format(new_project)})


