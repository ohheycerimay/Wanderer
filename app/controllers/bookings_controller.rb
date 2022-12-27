class BookingsController < ApplicationController


    private
    def bookings_params
        params.permit(:experience_id, :user_id, :datetime, :people_count, :total_price)
    end

end
