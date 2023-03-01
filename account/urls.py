from django.contrib import admin
from django.urls import path
from .views import *
urlpatterns = [
    path('signup/',Signup.as_view()),
    path('login/',Login.as_view())
    # path('',csrf_exempt(GraphQLView.as_view(graphiql=True,schema=schema)))
]
