from django.contrib import admin
from django.urls import path
from django.conf.urls.static import static
from django.conf import settings
from . import views
urlpatterns = [
    path('dashboard',views.index,name="index"),
]+ static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)