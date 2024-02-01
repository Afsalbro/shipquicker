"""
All the User Related Serializers.
"""

from django.contrib.auth.models import User
from rest_framework import serializers

from authentication.models import UserProfile
from api.v1.serializers import wallet as wallet_serializer

class UserSerializer(serializers.HyperlinkedModelSerializer):
    """
    Model Serializer for the User model.
    """
    role = serializers.CharField(source='profile.role')
    wallet = wallet_serializer.WalletModelSerializer()
    class Meta:
        model = User
        fields = ('url', 'username', 'email', 'is_staff', 'role', 'wallet')


class UserProfileSerializer(serializers.ModelSerializer):
    """
    Model Serializer for the UserProfile model.
    """
    user = UserSerializer()

    class Meta:
        model = UserProfile
        fields = ('user', 'role', 'contact_no', 'address', )
