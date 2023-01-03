class User < ApplicationRecord
    has_many :posts
    has_many :experiences, through: :posts

    validates :username, presence: true, uniqueness: true
    has_secure_password
end
