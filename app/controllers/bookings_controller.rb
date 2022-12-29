class BookingsController < ApplicationController
    before_action  only:[:index]
    
    def index
        render json: Booking.all
    end

    def show
        booking = Booking.find_by_id(params[:id])
            if booking
                render json: booking
            else
                render json: { error: "booking not found" }, status: :not_found
            end
    end

    def create
        booking = Booking.create(booking_params)
            if booking.valid?
                render json: booking
            else 
                render json: {error: booking.errors.full_messages}, status: :unprocessable_entity
            end
    end

    def update 
        booking = Booking.find_by_id(params[:id])
        if booking
            booking.update(booking_params)
            render json: booking
        else
            render json: {error: 'booking not found'}, status: :not_found
        end
    end

    def destroy
        booking = Booking.find_by_id(params[:id])
        if booking
            booking.destroy
            head :no_content
        else 
            render json: {error: 'booking not found'}, status: :not_found
        end
    end 

    private
   

    def booking_params
        params.permit(:experience_id, :user_id, :datetime, :people_count, :total_price)
    end
   

end
