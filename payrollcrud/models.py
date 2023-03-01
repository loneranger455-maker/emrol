from django.db import models
from account.models import User

# Create your models here.


def employee_image_path(instance):
    return 'employee_{0}/'.format(instance.user.id)
class Employee(models.Model):
    user=models.ForeignKey(User,on_delete=models.CASCADE)
    first_name=models.CharField(max_length=200)
    last_name=models.CharField(max_length=200)
    address=models.CharField(max_length=200)
    image=models.ImageField(upload_to=employee_image_path,default='default.png')
    post=models.CharField(max_length=200)
    salary=models.IntegerField()

class EmployeeDetails(models.Model):
    user=models.OneToOneField(User,on_delete=models.CASCADE)
    employee_count=models.IntegerField(default=0)




 


