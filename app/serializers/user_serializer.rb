class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password, :image_url
end
