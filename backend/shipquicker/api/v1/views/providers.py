from django.contrib.auth.models import User
from rest_framework import viewsets

from api.v1.serializers import provider as provider_serializers
from providers.models import Providers, ProviderOrders, CustomOrder
from rest_framework.permissions import IsAuthenticated

class ProviderViewSet(viewsets.ModelViewSet):

    queryset = Providers.objects.all()
    serializer_class = provider_serializers.ProviderSerializer
    permission_classes = [IsAuthenticated]
    def perform_create(self, serializer):
        serializer.save(order_from_user=self.request.user)

class ProviderOrderViewSet(viewsets.ModelViewSet):

    queryset = ProviderOrders.objects.all()
    serializer_class = provider_serializers.ProviderOrderSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(order_from_user=self.request.user)

class CustomOrderViewSet(viewsets.ModelViewSet):

    queryset = CustomOrder.objects.all()
    serializer_class = provider_serializers.CustomOrderSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(order_from_user=self.request.user)