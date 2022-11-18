from rest_framework import serializers
from django.core import exceptions
from django.contrib.auth.password_validation import validate_password
from django.contrib.auth import get_user_model
User = get_user_model()

class UserCreationSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('first_name', 'last_name', 'email', 'password')

    def validate(self,data):
        usser = User(**data)
        password = data.get('password')
        try:
           validate_password(password)
        except exceptions.ValidationError as e:
            serializer_errors = serializers.as_serializer_error(e)
            raise exceptions.ValidationError(
                {'password': serializer_errors['non_field_errors']}
            )
        return data    


    def create(self, validate_data):
        user = user.objects.create_user(
            first_name = validate_data['first_name'],
            last_name = validate_data['last_name'],
           email = validate_data['email'],
           password = validate_data['password'],
        )

        return user 

class UserSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = User
        fields = ('first_name', 'last_name', 'email')        