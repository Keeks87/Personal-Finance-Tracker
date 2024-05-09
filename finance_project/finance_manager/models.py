'''
Filename: models.py
Description: This file contains the models for the finance_manager app.
'''

# Imports
from django.db import models
from django.contrib.auth.models import AbstractUser

# Classes
class User(AbstractUser):
    '''This class represents a user of the system.'''
    pass

class Category(models.Model):
    '''This class represents a category for a transaction.'''
    name = models.CharField(max_length=100)
    user = models.ForeignKey(User, on_delete=models.CASCADE)

class Transaction(models.Model):
    '''This class represents a transaction.'''
    date = models.DateField()
    description = models.CharField(max_length=255)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    category = models.ForeignKey(Category, on_delete=models.SET_NULL, null=True)

class Budget(models.Model):
    '''This class represents a budget.'''
    limit = models.DecimalField(max_digits=10, decimal_places=2)
    category = models.OneToOneField(Category, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
