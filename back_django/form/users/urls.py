from django.contrib import admin
from django.urls import path
from users.views import hello




urlpatterns = [
    path('admin/', admin.site.urls),
    path('hello/', hello)
]