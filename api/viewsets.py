from rest_framework import viewsets
from api.models import Employee
from api.serializers import EmployeeSerializer

class EmployeeViewSet(viewsets.ModelViewSet):
    serializer_class = EmployeeSerializer

    def get_queryset(self):
        return Employee.objects.all()