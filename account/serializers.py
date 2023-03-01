from rest_framework import serializers
from .models import *


class SignupSerializer(serializers.ModelSerializer):
    passwordconfirm=serializers.CharField(max_length=100)
    bussiness_name=serializers.CharField(max_length=100)
    class Meta:
        model=User
        fields=['full_name','password','email','bussiness_name','passwordconfirm']
        
    
    def validate_password(self,value):
        if len(value)<8:
            raise serializers.ValidationError("password must be at least 8 characters long")
        elif not value.isalnum():
            raise serializers.ValidationError("password must contain only alpha numeric value")

        return value
    
    def validate_full_name(self,value):
        count=len([i for i in value if value.isalnum()])
        if len(value)<3:
            raise serializers.ValidationError("fullname must be at least 3 alphanumeric characters long")
        elif value[0]==" ":
            raise serializers.ValidationError("Full name must not begin with a space")



    def validate(self,data):
        if data["password"]!=data["passwordconfirm"]:
            raise serializers.ValidationError("Passwords don't match")
        return data