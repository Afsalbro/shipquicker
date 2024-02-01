"""
Register, Login Serizaliers
"""
from django.contrib.auth.models import User
from django.contrib.auth import authenticate

from rest_framework import serializers
from .models import UserProfile


class RegisterSerializer(serializers.Serializer):
    def update(self, instance, validated_data):
        raise serializers.ValidationError('method not supported.')

    email = serializers.EmailField()
    username = serializers.CharField()
    password = serializers.CharField(write_only=True)
    role = serializers.CharField(required=False, allow_blank=True)
    contact_no = serializers.CharField(required=False, allow_blank=True)
    address = serializers.CharField(required=False, allow_blank=True)

    def validate(self, data):
        """
        Validating the Incoming Data is valid or Not.
        """
        username = data['username']
        if User.objects.filter(username=username).exists():
            raise serializers.ValidationError(f'User with username "{username}" already exists.')

        email = data['email']
        if User.objects.filter(email=email).exists():
            raise serializers.ValidationError(f'User with email "{email}" already exists.')

        return data

    def create(self, validated_data):
        user = User.objects.create_user(
            validated_data['username'],
            validated_data['email'],
            validated_data['password']
        )

        """
        Creating Using Profile
        """
        # UserProfile.objects.create(
        #     user=user,
        #     role=validated_data['role'],
        #     contact_no=validated_data['contact_no'],
        #     address=validated_data['address'],
        # )

        return user


class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()

    def validate(seld, data):
        """
        Validating the Incoming Data is valid or Not.
        """
        user = authenticate(**data)

        if user and user.is_active:
            return user
        raise serializers.ValidationError("Incorrect Credentials")
