
from django.contrib import admin
from .models import Providers, ProviderOrders, CustomOrder


@admin.register(Providers)
class ProvidersAdmin(admin.ModelAdmin):
   
    list_display = ('id', 'provider_name', 'provder_image', 'providers_details', )


@admin.register(ProviderOrders)
class ProviderOrdersAdmin(admin.ModelAdmin):
   
    list_display = ('id', 'order_from_user', 'provider', 'username', 'address', 'city_address', 'postel_code')


@admin.register(CustomOrder)
class CustomOrderAdmin(admin.ModelAdmin):
   
    list_display = ('id', 'order_from_user', 'username', 'complete_address', 'city', 'country', 'state', 'order_channel', 'product_name', 'product_name', 'unit_price', 'quantity', 'hsn_code', 'product_description', 'pakage_weight')