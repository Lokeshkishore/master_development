from django.urls import path
from .views import *

urlpatterns =[
     path('home', ProductListView.as_view(), name='product-list'),
     # path('addProduct', AddProduct),
     path('addProduct', ProductListView.as_view(), name='product-list-create'),
     path('addOrder', OrderListView.as_view(), name='order-list-create'),
     path('admin-orders', OrderListView.as_view(), name='order-list'),
]


    