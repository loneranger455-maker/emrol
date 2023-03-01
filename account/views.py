from django.shortcuts import render
from rest_framework_simplejwt.tokens import RefreshToken
from .models import * 
from .renderers import *
from .helpers import dictfetchall
from django.db import connection
from django.http import JsonResponse
from .serializers import *
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView
from rest_framework.response import Response

def get_tokens_for_user(user):
    refresh = RefreshToken.for_user(user)

    return {
        'refresh': str(refresh),
        'access': str(refresh.access_token),
    }

class Signup(APIView):
    renderer_classes=[UserRenderer]
    def post(self,request):
        serializeddata=SignupSerializer(data=request.data)
        
        if serializeddata.is_valid(raise_exception=True):
            connection.cursor().execute("INSERT INTO account_user (full_name,password,email,bussiness_name) values(%s,%s,%s,%s)",[request.data["full_name"],request.data["password"],request.data["email"],request.data['bussiness_name']])
            user=User.objects.get(email=request.data["email"])

            response={"token":get_tokens_for_user(user),"msg":"Account created sucessfully"}
        else :
            response={"nonfielderrors":"provided credentials are invalid"}
        return JsonResponse(response)

class Login(APIView):
    renderer_classes=[UserRenderer]
    def post(self,request):
        with connection.cursor() as cursor:
            cursor.execute("SELECT email,password FROM account_user WHERE email=%s AND password=%s",[request.data["email"],request.data["password"]])
            data=dictfetchall(cursor)
            if data:
                user=User.objects.get(email=request.data["email"])
                response={"token":get_tokens_for_user(user),"msg":"Account created sucessfully"}
                return JsonResponse(response)

        return JsonResponse({"errors":{"nonfielderrors":"Email or password is incorrect"}})

# Create your views here.
