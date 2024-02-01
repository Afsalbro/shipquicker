from django.contrib.auth.models import User
from rest_framework import serializers

from providers.models import Providers, ProviderOrders, CustomOrder

class ProviderSerializer(serializers.ModelSerializer):

    class Meta:
        model = Providers
        fields = "__all__"

class ProviderOrderSerializer(serializers.ModelSerializer):
    order_from_user = serializers.ReadOnlyField(source='user.username')

    class Meta:
        model = ProviderOrders
        fields = "__all__"

class CustomOrderSerializer(serializers.ModelSerializer):
    order_from_user = serializers.ReadOnlyField(source='order_from_user.username')
    class Meta:
        model = CustomOrder
        fields = "__all__"