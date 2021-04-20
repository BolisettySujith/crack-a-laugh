from django.contrib import admin

# Register your models here.
from lightsout.models import Category
# Imma help you guys a bit here
#  list_display = ('name', 'wins', 'loses')
admin.site.register(Category)