from django.contrib import admin
from django.urls import path,include
from users.views import hello



urlpatterns = [
    
    path('', include("users.urls")),
    
   
]
