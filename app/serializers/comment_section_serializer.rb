class CommentSectionSerializer < ActiveModel::Serializer
  attributes :name, :location, :description, :price, :image_url, :includes, :likes
  has_many :posts, serializer: PostsSerializer
  has_many :users, through: :posts

end
