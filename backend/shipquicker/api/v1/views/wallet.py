from rest_framework import viewsets
from wallet.models import WalletModel
from api.v1.serializers import wallet as wallet_serializer
from rest_framework.permissions import IsAuthenticated


class WalletViewSet(viewsets.ModelViewSet):

    queryset = WalletModel.objects.all()
    serializer_class = wallet_serializer.WalletModelSerializer
    permission_classes = [IsAuthenticated]
    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)