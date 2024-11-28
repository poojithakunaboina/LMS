from django.db import models

# Create your models here.
       #teacher details
class Teacher(models.Model):
    full_name = models.CharField(max_length=500)
    mobile_number= models.CharField(max_length=100)
    qualification= models.CharField(max_length=100)
    skills= models.CharField(max_length=100)
    email= models.EmailField(unique=True)
    password=models.CharField(max_length=200)
    confirm_password=models.CharField(max_length=200)

    class Meta:
        verbose_name="Teacher"   #singular form
        verbose_name_plural="1.Teachers"  #custumize as needed
    
        #categories
class CourseCategory(models.Model):
    Title = models.CharField(max_length=50)
    description = models.CharField(max_length=50)  

    class Meta:
     verbose_name="CourseCategories"
    verbose_name_plural="2.CourseCategories"
    def _str_(self):
        return self.title


#course model
class Course(models.Model):
    Title = models.CharField(max_length=100)
    description = models.TextField(blank=True)
    teacher = models.ForeignKey(Teacher, on_delete=models.CASCADE)
    category = models.ForeignKey(CourseCategory, on_delete=models.CASCADE)
    featured_img=models.ImageField(upload_to='course_imgs/', null=True, blank=True)
    technologies=models.TextField(null=True, blank=True)

    class Meta:
       verbose_name="Course"
       verbose_name_plural="3.courses"
#student details
class Student(models.Model):
    full_name = models.CharField(max_length=500)
    mobile_number = models.CharField(max_length=10)
    qualification = models.CharField(max_length=100)
    skills = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    password=models.CharField(max_length=200)
    confirm_password=models.CharField(max_length=200)
   
    
class Meta:
   verbose_name="Student"
   verbose_name_plural="4.Student"
    


    