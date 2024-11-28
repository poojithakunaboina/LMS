from rest_framework import serializers
from . import models 
class TeacherSerializer(serializers.ModelSerializer):
    class Meta:
      model=models.Teacher
      fields = ['full_name','mobile_number','qualification','skills','email','password','confirm_password']

class StudentSerializer(serializers.ModelSerializer):
    class Meta:
      model=models.Student
      fields = ['full_name','mobile_number','qualification','skills','email','password','confirm_password'] 

class CategorySerializer(serializers.ModelSerializer):
     class Meta:
       model=models.CourseCategory
       fields=['Title','description']

class CourseSerializer(serializers.ModelSerializer):
    class Meta:
       model=models.Course
       #fields = '_all_' 
       fields=['Title','description','teacher','category','featured_img','technologies']
    

