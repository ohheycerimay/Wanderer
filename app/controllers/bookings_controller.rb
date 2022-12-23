class BookingsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :not_found
    def show
        booking = Booking.find(params[:id])
        render json: booking, status: :ok
        # figure out what to do ????
    end

    def create
        booking = @current_user.bookings.create!(bookings_params)
        render json: booking, status: :ok
    end

    def destroy
        Booking.find(params[:id]).destroy
        head :no_content
    end

    def update
        bookings =Booking.find(params[:id])
        bookings.update(bookings_params)
        render json: bookings, status: :accepted
    end

    private
    def bookings_params
        params.permit(:experience_id, :user_id, :datetime, :people_count, :total_price)
    end
    def not_found
        render json: {error: "Booking not found"}
    end

end
