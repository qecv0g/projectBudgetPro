#from xmlrpc.client import ResponseError
from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework import permissions, status
from rest_framework.response import Response
from .serializers import UserCreationSerializer, UserSerializer
# Create your views here.

class RegisterView(APIView):

    def post(self, request):
        data = request.data
        first_name = data['first_name']
        last_name = data['last_name']
        email = data['email']
        password = data['password']
 
        serializer = UserCreationSerializer(data = data)
        if not serializer.is_valid():
            return Response(serializer.errors, status.HTTP_400_BAD_REQUEST)

        user = serializer.create(serializer.validate_data)  
        user = UserSerializer(user)      

        return Response(user.data, status = status.HTTP_201_CREATED)
        

class RetriveUserView(APIView):
    permission_classes = [permissions.IsAuthenticated]
    def get(self, request):
        user = request.user
        user = UserSerializer(user)

        return Response(user.data, status = status.HTTP_200_OK)

