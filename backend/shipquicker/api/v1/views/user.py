"""
The User Views File.
All the Users Related Views Are Here.
"""

from django.contrib.auth.models import User
from rest_framework import viewsets

from api.v1.serializers import user as user_serializers
from authentication.models import UserProfile


class UserViewSet(viewsets.ModelViewSet):
    """
    View set for user related REST endpoints.
    """
    queryset = User.objects.all()
    serializer_class = user_serializers.UserSerializer


class UserProfileViewSet(viewsets.ModelViewSet):
    """
    View set for user profile related REST endpoints.
    """
    serializer_class = user_serializers.UserProfileSerializer

    def get_queryset(self):
        """
        QuerySet For Getting Users by Role.
        """
        queryset = UserProfile.objects.all()

        return queryset
