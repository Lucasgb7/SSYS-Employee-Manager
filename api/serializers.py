from rest_framework import serializers
from api.models import Employee

class EmployeeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employee
        fields = ['id', 'name', 'email', 'deparment', 'salary', 'birth_date']