from django.contrib import admin
from .models import User
from django.apps import apps
# Register your models here.

admin.site.register(User)