from django.urls import path
from . import views
urlpatterns=[
    path('teacher/',views.TeacherList.as_view()),
    path('teacher/<int:pk>/',views.TeacherDetails.as_view()),
    path('teacher-login',views.teacher_login),
    path('student/',views.StudentList.as_view()),
    path('category/',views.CategoryList.as_view()),

    path('course/',views.CourseList.as_view()),

    #path('tmycourses/<int:teacher_id>',views.TeacherCourseList.as_view())

]