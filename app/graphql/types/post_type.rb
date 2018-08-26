module Types
  class PostType < Types::BaseObject
    field :title, String, null: true
    field :content, String, null: true
    field :id, ID, null: true
  end
end
