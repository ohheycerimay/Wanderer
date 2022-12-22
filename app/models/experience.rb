class Experience < ApplicationRecord
    has_many :bookings
    has_many :users, through: :bookings

    validates :name, presence: true
end
