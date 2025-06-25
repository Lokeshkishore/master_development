from rest_framework import serializers
from .models import ProductsData

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductsData
        fields = '__all__'