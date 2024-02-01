from rest_framework import serializers
from wallet.models import WalletModel

class WalletModelSerializer(serializers.ModelSerializer):
    """
    Model Serializer for the User model.
    """
    owner = serializers.ReadOnlyField(source='owner.username')

    class Meta:
        model = WalletModel
        fields = "__all__"
