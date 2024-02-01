from django.db import models
from django.contrib.auth.models import User


class WalletModel(models.Model):
    owner = models.OneToOneField(User, on_delete=models.CASCADE, related_name="wallet")
    available_funds = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)