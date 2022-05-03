from xml.etree.ElementInclude import include
from django.urls import path
from .views import EmployeesView

urlpatterns = [
    path('employees/', EmployeesView.as_view())
]