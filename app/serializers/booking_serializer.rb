class BookingSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :experience_id, :datetime, :people_count, :total_price
end
