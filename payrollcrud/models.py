from django.db import models
from account.models import User

# Create your models here.


def employee_image_path(instance):
    return 'employee_/{0}'.format(instance.user.id)

class Department(models.Model):
    account_user=models.ForeignKey(User,on_delete=models.CASCADE)
    department_name=models.CharField(max_length=200)
    employee_count=models.IntegerField(default=0)
    
    def __str__(self):
        return self.department_name



class Employee(models.Model):
    user=models.ForeignKey(User,on_delete=models.CASCADE)
    department=models.ForeignKey(Department,null=True,on_delete=models.SET_NULL)
    first_name=models.CharField(max_length=200)
    last_name=models.CharField(max_length=200)
    phone_number=models.IntegerField(max_length=10)
    date_hired=models.DateField(auto_now_add=True)
    address=models.CharField(max_length=200)
    image=models.ImageField(upload_to=employee_image_path,default='default.png')
    post=models.CharField(max_length=200)

    def __str__(self):
        return("%s %s"%(self.first_name,self.last_name))



class EmployeesDetails(models.Model):
    user=models.ForeignKey(User,on_delete=models.CASCADE)
    totalsalary=models.IntegerField(default=0)
    taxpercentage=models.IntegerField(default=8)
    employee_count=models.IntegerField(default=0)

class Salary(models.Model):
    employee=models.OneToOneField(Employee,on_delete=models.CASCADE)
    salary=models.IntegerField()
    tax=models.IntegerField(default=6)







 


