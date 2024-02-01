from django.contrib import admin
from .models import WalletModel


@admin.register(WalletModel)
class ProvidersAdmin(admin.ModelAdmin):
   
    list_display = ('id', 'owner', 'available_funds', 'created_at', )
