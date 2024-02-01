"""
All the routes of backend API registered here
"""

from rest_framework.routers import DefaultRouter
from django.urls import include, path

from api.v1.views import user as user_views
from api.v1.views import providers as provider_views
from api.v1.views import wallet as wallet_views

router = DefaultRouter()
router.register(r'user', user_views.UserViewSet, basename="user")
router.register(r'user-profile', user_views.UserProfileViewSet, basename="user_profile")
router.register(r'providers', provider_views.ProviderViewSet, basename="providers")
router.register(r'provider_orders', provider_views.ProviderOrderViewSet, basename="provider_orders")
router.register(r'custom_orders', provider_views.CustomOrderViewSet, basename="custom_orders")
router.register(r'wallet', wallet_views.WalletViewSet, basename="wallet")

urlpatterns = [
    path("auth/", include("authentication.urls")),
]

urlpatterns += router.urls
