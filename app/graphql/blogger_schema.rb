# require 'types/mutation_type'

class BloggerSchema < GraphQL::Schema
  mutation(Types::MutationType)
  query(Types::QueryType)
end
