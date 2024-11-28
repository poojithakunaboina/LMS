from django.contrib import admin
from . import models

# class AddAdmin(admin.ModelAdmin):
#     list_display = ('Teacher', 'coursecategorey', 'course','student',)  # Replace with actual fields
    

admin.site.register(models.Teacher)
admin.site.register(models.CourseCategory)
admin.site.register(models.Course)
admin.site.register(models.Student)