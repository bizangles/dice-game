from django.db import models

# Create your models here.
class Roll(models.Model):
    dice = models.CommaSeparatedIntegerField(max_length=100)
    guid = models.CharField(max_length=32)
