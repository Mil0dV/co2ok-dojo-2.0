from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User
from accounts.models import WebshopProfile as Profile
#-------------------- rest framework imports -----------------------------------
from django.core import serializers
from .serializers import UserSerializer
from rest_framework import viewsets, permissions
from rest_framework.decorators import api_view, action
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from rest_framework.decorators import api_view, permission_classes
from django.views.decorators.csrf import csrf_exempt, ensure_csrf_cookie
from rest_framework.permissions import AllowAny
import json
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
    permission_classes = (permissions.IsAuthenticated,)

    @csrf_exempt
    @action(methods=['get'], detail=False)
    # @api_view(['GET'])
    def userData(self, request):
        userId = request.query_params.get('id')
        merchant_authData_exist = Profile.check_user_auth_data(self, userId, Profile)
        userIs_superuser = User.objects.get(pk=userId).is_superuser
        print(merchant_authData_exist)
        if merchant_authData_exist or userIs_superuser:
            user = self.get_queryset().get(pk=userId)
            serializer = self.get_serializer_class()(user)
            #get current user profile data
            if userIs_superuser:
               context = {'userdata': serializer.data, 'authData': True}
            else:
                profile = Profile.objects.get(user_id=userId)
                context = {
                    'userdata': serializer.data,
                    'profileData': {
                        'user_status': profile.user_status,
                        'country': profile.country,
                        'city': profile.city,
                        'zipcode': profile.zipCode,
                        'street': profile.street,
                        'number': profile.number,
                        'link': profile.link,
                        'merchantId': profile.merchant_id
                    },
                    'authData': True
                }
        else:
            return Response({'authData': False, 'account': 'Merchant account not existed'})
        return Response(context)

    @csrf_exempt
    @action(methods=['get'], detail=False)
    def allTransactions(self, request):
        year_arr = []
        year_month_arr = []
        date = datetime.datetime.now()
        split_dateTime = str(date).split() #return de date and time splited[date,time]
        split_date = str(split_dateTime[0]).split('-') #return date splited by - [year, month, day]
        current_month = split_date[1] #return de number of current month
        current_year = request.query_params.get('year')
        int_month = int(current_month)  # convert current month digit to number
        if str(split_date[0]) == current_year:
            int_month = int(current_month)  
        else:
            int_month = 12 

        for months in range(int_month):
            year_arr.append([])
            m = months
            if months < 9:
                m = '0{}'.format(months+1) # +1 because de array begin at 0 and the first month begin at 1
            else:
                m = months+1
            year_arr.append([])
            year_month_arr.append('{}-{}'.format(current_year, m))

        for transaction in Transaction.scan():
            for ym in year_month_arr:
                dateSplited = str(transaction.timestamp).split('-')
                formatDate = "{}-{}".format(dateSplited[0], dateSplited[1])  # return year-month
                print(formatDate, ym)
                if str(formatDate) == str(ym):
                    year_arr[year_month_arr.index(ym)].append(transaction.compensation_cost)

        return Response(year_arr)

    @csrf_exempt
    @action(methods=['get'], detail=False)
    def compnensationsData(self, request):
        merchantId = request.query_params.get('merchantId')
        year = request.query_params.get('year')
        transactionArr = []
        for transaction in Transaction.scan(Transaction.merchant_id == merchantId):
            if str(transaction.timestamp) > year:
                dateSplited = str(transaction.timestamp).split('-')
                getWeek = str(dateSplited[2]).split(' ')
                getDate = str(transaction.timestamp).split()
                transactionArr.append({'orders': transaction.compensation_cost,
                                       'date': getDate[0], 'month': dateSplited[1], 'week': getWeek[0]})
        return Response(transactionArr)

    @csrf_exempt
    @action(methods=['get'], detail=False)
    def weeklyTransaction(self, request):
        merchantId = request.query_params.get('merchantId')
        yearMonth = request.query_params.get('yearMonth')
        endWeek = request.query_params.get('endWeek')
        startWeek = request.query_params.get('startWeek')
        transactionArr = []
        for transaction in Transaction.scan(Transaction.merchant_id == merchantId):
            dateSplited = str(transaction.timestamp).split('-')
            getWeek = str(dateSplited[2]).split(' ')
            getDate = str(transaction.timestamp).split()
            formatDate = "{}-{}".format(dateSplited[0], dateSplited[1]) #return year-month
            if str(formatDate) == str(yearMonth) and str(getWeek[0]) >= str(startWeek) and str(getWeek[0]) <= str(endWeek):
                transactionArr.append({'orders': transaction.compensation_cost,
                                       'date': getDate[0], 'month': dateSplited[1], 'day': getWeek[0]})
        return Response(transactionArr)

    @csrf_exempt
    @action(methods=['get'], detail=False)
    #return the transactions years in ptnamodb
    def years(self, request):
        years_arr = []
        for transaction in Transaction.scan():
            timestamp = transaction.timestamp
            date_time = str(timestamp).split()
            date = str(date_time[0]).split('-')
            year = date[0]
            print(year)
            years_arr.append(year)
        return Response(years_arr)


def uuid_hex_from_b64(encoded):
    decoded = base64.b64decode(encoded)
    if len(decoded.split(b":")) > 1:
        return decoded.split(b":")[1]
    return encoded[1:]


@csrf_exempt
@api_view(['POST'])
@permission_classes((AllowAny,))
def merchantIdChecker(request):
    merchantId_list = []
    merchantId = request.data['body']['merchantId']

    #check if the sended mercahant id already have an account
    merchantIdCount = Profile.objects.filter(merchant_id=merchantId).count()
    if merchantIdCount == 0:
        merchantId_list.append({'accountIdCheck': True}) #don't have accout yet
    else:
        merchantId_list.append({'accountIdCheck': False}) #already have an accout

    #check if the sended mercahant id exist in the dynamoDB
    for merchantid in Transaction.scan(Transaction.merchant_id == merchantId):
        merchantId_count = merchantid.count()
        if merchantId_count > 0:
            merchantId_list.append({'dynamoIdCheck': merchantId_count})
            # return Response({'accountIdCheck': merchantId_list[0].accountIdCheck, 'dynamoIdCheck': merchantId_list[1].dynamoIdCheck})
            return Response(merchantId_list)
        else:
            return Response({'dynamoId': 'Not valid'})
    return Response({'msg': 'Merchant id not valid', 'accountIdCheck': False, 'dynamoIdCheck': 0})

#return the merchant name and email from the dynamodb
@csrf_exempt
@api_view(['POST'])
@permission_classes((AllowAny,))
def merchant_data(request):
    merchant_id = request.data['body']['merchantId']
    merchantId_encoded = uuid_hex_from_b64(merchant_id)
    encoded_id = str(merchantId_encoded).split("'")

    for merchant in Merchant.scan(Merchant.id == encoded_id[1]):
        merchant_name = str(merchant.name).split('.')
        context = {'name': merchant_name[1], 'link': merchant.name, 'email': merchant.email}
        return Response(context)


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
