class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :profile_pic
  has_many :posts
  has_many :experiences
end
