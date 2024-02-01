"""
Views for authenticated related logic.
"""
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from rest_framework.decorators import api_view

from .serializers import RegisterSerializer, LoginSerializer
from api.v1.serializers import user as user_serializers


@api_view(['POST'])
def register_user(request):
    """
    View handler for creating a new user.
    """
    serializer = RegisterSerializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    user = serializer.save()
    token, created = Token.objects.get_or_create(user=user)

    return Response({
        'user': user_serializers.UserSerializer(user, context={'request': request}).data,
        'token': token.key
    })


@api_view(['POST'])
def login_user(request):
    """
    REST API endpoint for user login.
    """
    serializer = LoginSerializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    user = serializer.validated_data
    token, created = Token.objects.get_or_create(user=user)

    return Response({
        'user': user_serializers.UserSerializer(user, context={'request': request}).data,
        'token': token.key
    })
