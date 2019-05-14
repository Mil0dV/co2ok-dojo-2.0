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
from rest_framework.permissions import AllowAny
#------------------------------------------------------------------------------
import base64
from dashboard.models import Merchant, Transaction
import datetime

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
                'link': profile.link,
                'merchantId': profile.merchant_id
            }
        }
        return Response(context)


@csrf_exempt
@api_view(['POST'])
@permission_classes((AllowAny,))
def merchantIdChecker(request):
    merchantId_list = []
    merchantId = request.data['body']['merchantId']

    #check if the sended mercahant id already have an account
    merchantIdCount = Profile.objects.filter(merchant_id=merchantId).count()
    if merchantIdCount == 0:
        merchantId_list.append({'accoundIdCheck': True})
    else:
        merchantId_list.append({'accoundIdCheck': False})

    #check if the sended mercahant id exist in the dynamoDB  
    for merchantid in Transaction.scan(Transaction.merchant_id == merchantId):
        merchantId_count = merchantid.count()
        if merchantId_count > 0:
            merchantId_list.append({'dynamoIdCheck':merchantId_count})
            return Response({'accoundIdCheck': merchantId_list[0].accoundIdCheck, 'dynamoIdCheck': merchantId_list[1].dynamoIdCheck})
        else:
            return Response({'dynamoId': 'Not valid'})
    return Response({'msg': 'Merchant id not valid', 'accoundIdCheck': False, 'dynamoIdCheck': 0})

# def uuid_hex_from_b64(encoded):
#     decoded = base64.b64decode(encoded)
#     if len(decoded.split(b":")) > 1:
#         return decoded.split(b":")[1]
#     return encoded[1:]


# merchants = []

# for merchant in Merchant.scan():
#     merchants.append(merchant)

# transactions = []
  
# for transaction in Transaction.scan():
#     transaction.merchant_id = uuid_hex_from_b64(transaction.merchant_id)
# #     if str(transaction.timestamp) > "2018-12-11":
#     # if str(transaction.timestamp) > "2019-04":
# #       if str(transaction.timestamp) < "2019-04":
#     transactions.append(transaction)

# print("Totaal orders: " + str(len(transactions)))
# day_of_month = float(datetime.datetime.today().day - 1)  # t/m gister dus
# print("orders/dag: " + str(len(transactions)/day_of_month))
# print("orders prognose: " + str(len(transactions)/day_of_month * 30))

# for merchant in merchants:
#     print(merchant.name)
#     total = 0
#     count = 0
#     for transaction in transactions:
#         # print(transaction.merchant_id)
#         if transaction.merchant_id == merchant.id:
#             print(transaction.compensation_cost, transaction.timestamp.strftime("%Y-%m-%d"))
#             total += transaction.compensation_cost
#             count += 1
#     print(merchant.name + " orders: " + str(count) + " total: " + str(total))

# for transaction in transactions:
#     print(transaction.merchant_id, transaction.compensation_cost, transaction.timestamp)
