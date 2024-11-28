from django.shortcuts import render
from django.http import JsonResponse,HttpResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import generics
from rest_framework import permissions
from .serializers import TeacherSerializer, StudentSerializer, CategorySerializer, CourseSerializer
from . import models
# Create your views here.
# class TeacherList(APIView):
#   def get(self,request):
#     teachers=models.Teacher.objects.all()
#     serializer= TeacherSerializer(teachers, many=True)
#     return Response(serializer.data)

class TeacherList(generics.ListCreateAPIView):
    queryset=models.Teacher.objects.all()
    serializer_class=TeacherSerializer

class TeacherDetails(generics.RetrieveUpdateDestroyAPIView):
    queryset=models.Teacher.objects.all()
    serializer_class=TeacherSerializer

class StudentList(generics.ListCreateAPIView):
    queryset=models.Student.objects.all()
    serializer_class=StudentSerializer  

class StudentDetails(generics.RetrieveUpdateDestroyAPIView):
    queryset=models.Student.objects.all()
    serializer_class=StudentSerializer     

@csrf_exempt
def teacher_login(request):
    email=request.POST['email']
    password=request.POST['password']
    teacherData=models.Teacher.objects.get(email=email,password=password)
    if teacherData:
        return JsonResponse({'bool': True,'teacher_id':teacherData.id})
    else:
        return JsonResponse({'bool':False})
    

class CategoryList(generics.ListCreateAPIView):
    queryset=models.CourseCategory.objects.all()
    serializer_class=CategorySerializer


class CourseList(generics.ListCreateAPIView):
    queryset=models.Course.objects.all()
    serializer_class=CourseSerializer

#class TeacherCourseList(generics.ListCreateAPIView):
    # serializer_class=CourseSerializer

    # def get_queryset(self):
    #     teacher_id=self.kwargs['teacher_id']
    #     teacher=models.Teacher.objects.get(pk=teacher_id)
    #     return models.Course.objects.filter(teacher=teacher)