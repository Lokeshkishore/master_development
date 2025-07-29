from django.db import models
from django.contrib.postgres.fields import JSONField

# Create your models here.

class ProductsData(models.Model):
  name = models.CharField(max_length=255)
  price = models.CharField(max_length=255)
  quantity = models.CharField(max_length=255)
  image = models.ImageField(upload_to='images/')

def __str__(self):
    return self.name

class orderList(models.Model):
  name = models.CharField(max_length=255,null=True)
  email = models.CharField(max_length=255,null=True)
  phone = models.CharField(max_length=255,null=True)
  address = models.TextField(null=True)
  total_price = models.DecimalField(max_digits=10, decimal_places=2,null=True)
  cartlist = models.JSONField(null=True)
  status = models.IntegerField(default=0)

def __str__(self):
    return self.name

