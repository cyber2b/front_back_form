from django.shortcuts import render,HttpResponse
from .models import login

# Create your views here.

def hello(request):
    logins =login.objects.all()
    return render(request,"users.html",{"posts":logins})