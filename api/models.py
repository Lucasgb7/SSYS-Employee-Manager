from django.db import models

# Create your models here.
class Employee(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField(max_length=255)
    deparment = models.CharField(max_length=255)
    salary = models.FloatField()
    birth_date = models.DateField()

    def __str__(self):
        return self.name