from django.db import models
from django.contrib.auth.models import AbstractBaseUser,BaseUserManager
class UserManager(BaseUserManager):
    def create_user(self,email,full_name,bussiness_name=None,password=None,password_confirm=None):
       
        if not email:
            raise ValueError('Users must have an email address')

        user = self.model(
            email=self.normalize_email(email),
            full_name=full_name,
            bussiness_name=bussiness_name
           
        )

        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self,full_name,email,password=None):
        user = self.create_user(
            email,
            password=password,
            full_name=full_name,
            
        )

        user.is_admin = True
        user.save(using=self._db)
        return user


class User(AbstractBaseUser):
    email = models.EmailField(
        verbose_name='email address',
        max_length=255,
        unique=True,
    )
   
    password=models.CharField(max_length=100)
    full_name=models.CharField(max_length=100)
    bussiness_name=models.CharField(max_length=100,default="my bussiness")
    is_verified = models.BooleanField(default=False)
    is_admin = models.BooleanField(default=False)

    objects = UserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['password','full_name']

    def __str__(self):
        return self.email

 
    @property
    def is_staff(self):
        return self.is_admin
    def has_perm(self, perm, obj=None):
            return self.is_admin

    def has_module_perms(self, app_label):
        return self.is_admin