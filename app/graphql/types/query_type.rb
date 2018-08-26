module Types
  class QueryType < Types::BaseObject
    # Add root-level fields here.
    # They will be entry points for queries on your schema.

    # TODO: remove me
    field :test_field, String, null: false,
      description: "An example field added by the generator"
    def test_field
      "Hello World!"
    end

    field :posts, [Types::PostType], null: true,
      description: 'A list of posts'
    def posts
      Post.all
    end

    field :post, PostType, null: false, description: 'Single post' do
      argument :id, ID, required: false
    end
    def post(params)
      Post.find(params[:id])
    end
  end
end
