module Mutations
  class DeletePost < GraphQL::Schema::RelayClassicMutation
    # TODO: define return fields
    field :message, String, null: false

    # TODO: define arguments
    argument :id, ID, required: true

    # TODO: define resolve method
    def resolve(args)
      # puts args
      post = Post.find_by(id: args[:id])
      if post.destroy
        { message: 'Post was deleted' }
      else
        { message: post.errors }
      end
    end
  end
end
