module Mutations
  class CreatePost < GraphQL::Schema::RelayClassicMutation
    # TODO: define return fields
    # field :post, Types::PostType, null: false
    field :post, Types::PostType, null: false

    # TODO: define arguments
    argument :title, String, required: true
    argument :content, String, required: true

    # TODO: define resolve method
    def resolve(args)
      post = Post.create(
        title: args[:title],
        content: args[:content]
      )
      puts args
      { post: post }
    end
  end
end
