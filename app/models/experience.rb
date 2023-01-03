class Experience < ApplicationRecord
    has_many :posts
    has_many :users, through: :posts

    validates :name, presence: true
end
