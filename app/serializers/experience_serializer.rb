class ExperienceSerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :description, :price, :image_url, :includes, :likes, :link
  has_many :posts, dependent: :destroy
end
