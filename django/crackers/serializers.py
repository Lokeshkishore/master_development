from rest_framework import serializers
from .models import ProductsData
from .models import orderList

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductsData
        fields = '__all__'
class orderSerializer(serializers.ModelSerializer):
    class Meta:
        model = orderList
        fields = '__all__'        