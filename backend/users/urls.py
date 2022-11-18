from django.urls import path
from . views import RegisterView, RetriveUserView
urlpatterns = [
    path('register', RegisterView.as_view()),
    path('reciveuser', RetriveUserView.as_view()),
]