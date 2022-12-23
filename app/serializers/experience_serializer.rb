class ExperienceSerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :description, :price, :image_url, :includes, :likes
end
