from django.urls import path
from .views import *

urlpatterns =[
     path('home', ProductListView.as_view(), name='product-list'),
     # path('addProduct', AddProduct),
     path('addProduct', ProductListView.as_view(), name='product-list-create'),
]


    