from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.response import Response
import json
from rest_framework.views import APIView
from crackers.models import ProductsData
from .serializers import ProductSerializer
from rest_framework import status
# Create your views here.

class ProductListView(APIView):
    def get(self, request):
        products = ProductsData.objects.all()
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)
    def post(self, request):
        serializer = ProductSerializer(data=request.data)
        print(request.data)
        if serializer.is_valid():
            serializer.save()  # saves to DB
            products = ProductsData.objects.all()
            serializer = ProductSerializer(products, many=True)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    # def display_images(request):
    # hotels = ProductsData.objects.all()
    # return render(request, 'display_hotel_images.html', {'hotel_images': hotels})
       

       
      