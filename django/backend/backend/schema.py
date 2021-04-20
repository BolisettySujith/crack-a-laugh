import graphene
from graphene_django import DjangoObjectType
from lightsOut.models import Category
# Make your schema here, both for mutations and queries
# Very important part to get your graphql api working.
class CategoryType(DjangoObjectType):
    class Meta:
        model=Category
        fields=("Name","Wins","Loses")

class Query(graphene.ObjectType):
    Participents_by_name=graphene.Field(CategoryType,name=graphene.String(required=True))

    def resolve_Participents_by_name(root,info,name):
        try:
            return Category.objects.get(name=name)
        except Category.DoesNotExist:
            return None

schema = graphene.Schema(query=Query)