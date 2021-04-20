from django.db import models

# Create your models here.

# I want the model to have 3 fields:
#      - Name
#      - Wins
#      - Loses
class Category(models.Model):
    name=models.CharField(max_length=100)
    Wins = models.IntegerField()
    Loses=models.IntegerField()

    def __str__(self):
        return self.name