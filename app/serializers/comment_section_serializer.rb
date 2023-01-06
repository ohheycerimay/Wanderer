class CommentSectionSerializer < ActiveModel::Serializer
  attributes :name, :location, :description, :price, :image_url, :includes, :likes, :link
  has_many :posts, serializer: PostsSerializer
  

end
