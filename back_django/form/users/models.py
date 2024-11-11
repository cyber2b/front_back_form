from django.db import models

# Create your models here.
class login(models.Model):

    name =models.CharField(max_length=10)
    email=models.CharField(max_length=20)
    password=models.CharField(max_length=8)


