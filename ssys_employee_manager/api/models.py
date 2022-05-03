from unicodedata import name
from django.db import models

# Create your models here.
class Employee(models.Model):
    #id = models.IntegerField(unique=True)
    name = models.CharField(max_length=200, blank=False)
    email = models.CharField(max_length=200)
    department = models.CharField(max_length=200)
    salary = models.FloatField()
    birth_date = models.DateField(blank=False)