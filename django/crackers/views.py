from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.response import Response
import json
from rest_framework.views import APIView
from crackers.models import ProductsData
from crackers.models import orderList
from .serializers import ProductSerializer
from .serializers import orderSerializer
from rest_framework import status
# Create your views here.

class ProductListView(APIView):
    def get(self, request):
        products = ProductsData.objects.all()
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)
    def post(self, request):
        serializer = ProductSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()  # saves to DB
            products = ProductsData.objects.all()
            serializer = ProductSerializer(products, many=True)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class OrderListView(APIView):
    def get(self, request):
        orders = orderList.objects.all()
        serializer = orderSerializer(orders, many=True)
        return Response(serializer.data)
    def post(self, request):
        serializer = orderSerializer(data=request.data['data'])
        if serializer.is_valid():
            serializer.save()  # saves to DB
            # orders = orderList.objects.all()
            # serializer = orderSerializer(orders, many=True)
            success='True'
            return Response(success,status=status.HTTP_201_CREATED)
        return Response( status=status.HTTP_400_BAD_REQUEST)    
       

       
      