import graphene
from graphene_django import DjangoObjectType
from account.helpers import dictfetchall
from collections import namedtuple
from django.db import connection
import json
from .helpers import *
from .models import *
class Employee_graph(DjangoObjectType):
    class Meta:
        model=Employee
        fields='__all__'

# class EmployeeMutation(graphene.Mutation):
#     pass
    # class Arguments:
    #     id=graphene.ID()
    # category=graphene.Field(Category_graph)
    # @classmethod
    # def mutate(cls,root,info,id):
    #     category=Category.objects.get(id=id)
    #     category.delete()
    #     return CategoryMutation(category=category)
class Query(graphene.ObjectType):
    all_employee=graphene.List(Employee_graph)
    def resolve_all_employee(root,info):
            with connection.cursor() as cursor:
                cursor.execute("SELECT * FROM payrollcrud_employee")
                responseid=[i["id"] for i in dictfetchall(cursor)]
                objects=Employee.objects.filter(id__in=responseid)
                
            return objects

    
schema = graphene.Schema(query=Query)