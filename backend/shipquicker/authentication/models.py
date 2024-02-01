from django.db import models
from django.conf import settings
from django.contrib.auth.models import User


class UserProfile(models.Model):

    user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='profile')
    role = models.CharField(max_length=25, default="user")
    contact_no = models.CharField(max_length=100, blank=True, null=True)
    address = models.TextField(blank=True, null=True)

    class Meta:
        verbose_name = 'User Profile'
        verbose_name_plural = 'User Profiles'

    def __str__(self):
        """
        Human-readable string representation.
        """
        return f'<UserProfile user="{self.user!s}">'

    def __repr__(self):
        """
        Unique and unambiguous string representation.
        """
        return f'<UserProfile id="{self.id}" user="{self.user!r}">'
