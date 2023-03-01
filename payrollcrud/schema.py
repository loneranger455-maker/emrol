import graphene
from graphene_django import DjangoObjectType
from .models import *
class Employee_graph(DjangoObjectType):
    class Meta:
        model=Employee
        fields='__all__'

class EmployeeMutation(graphene.Mutation):
    class Arguments:
        id=graphene.ID()
    category=graphene.Field(Category_graph)
    @classmethod
    def mutate(cls,root,info,id):
        category=Category.objects.get(id=id)
        category.delete()
        return CategoryMutation(category=category)
class Query(graphene.ObjectType):
    all_employee=graphene
    def resolve_all_employee(root,info,id):
        return Category.objects.get(pk=id)


class QuizMutation(graphene.ObjectType):
    update_category=CategoryMutation.Field()
    
schema = graphene.Schema(query=Query,mutation=Mutation)