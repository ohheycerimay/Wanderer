class PostsSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :experience_id, :comment
  has_one :user
  has_one :experience
end
