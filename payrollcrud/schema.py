import graphene
from graphene_django import DjangoObjectType
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
        return Employee.objects.all()


    
schema = graphene.Schema(query=Query)