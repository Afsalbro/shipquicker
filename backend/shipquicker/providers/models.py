import datetime
from email.policy import default
from django.db import models
from django.contrib.auth.models import User


class Providers(models.Model):
    provider_name = models.CharField(max_length=200)
    provder_image = models.ImageField(upload_to='images/')
    providers_details = models.TextField()
    
    def __str__(self):
        return self.provider_name

class ProviderOrders(models.Model):
    order_from_user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="myorders")
    provider = models.ForeignKey(Providers, on_delete=models.CASCADE, related_name='orders')
    
    username = models.CharField(max_length=3000)
    email = models.CharField(max_length=3000)
    phone_number = models.CharField(max_length=3000)

    address = models.TextField()
    city_address = models.TextField()
    postel_code = models.TextField()

    pakage_details = models.TextField(null=True, blank=True)
    price = models.TextField()

    def __str__(self):
        return self.order_from_user.username


class CustomOrder(models.Model):
    order_from_user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="mycustom_orders")
    
    username = models.CharField(max_length=3000)
    email = models.CharField(max_length=3000)
    phone_number = models.CharField(max_length=3000)

    complete_address = models.CharField(max_length=3000, blank=True)
    city = models.CharField(max_length=3000, blank=True)
    country = models.CharField(max_length=3000, blank=True)
    state = models.CharField(max_length=3000, blank=True)

    order_channel = models.CharField(max_length=3000, blank=True)

    product_name = models.CharField(max_length=3000, blank=True)
    unit_price = models.CharField(max_length=3000, blank=True)
    quantity = models.CharField(max_length=3000, blank=True)
    hsn_code = models.CharField(max_length=3000, blank=True)

    product_description = models.CharField(max_length=3000, blank=True)

    pakage_weight = models.CharField(max_length=3000, blank=True)

    created_at = models.DateTimeField(default=datetime.datetime.now(), blank=True)

    def __str__(self):
        return self.order_from_user.username
