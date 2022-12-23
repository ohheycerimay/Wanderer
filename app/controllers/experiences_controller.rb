class ExperiencesController < ApplicationController
    # skip_before_action :authorize, only: [:index]
    def index
        render json: Experience.all
    end

    def show
        experience = Experience.find_by_id(params[:id])
        if experience
            render json: experience
        else
            render json: {error: 'Experience not found'}, status: :not_found
        end
    end

    def create
        experience = Experience.create(experience_params)
        if experience.valid?
            render json: experience
        else 
            render json: {errors: experience.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def destroy
        experience = Experience.find_by_id(params[:id])
        if experience
            experience.destroy
            head :no_content
        else 
            render json: {error: 'Experience not found'}, status: :not_found
        end
    end

    def update 
        experience = Experience.find_by_id(params[:id])
        if experience
            experience.update(likes)
            render json: experience
        else
            render json: {error: 'Experience not found'}, status: :not_found
        end
    end


    private
    def experience_params
        params.permit(:name, :location, :description, :price, :image_url)
    end
    def likes
        params.permit(:likes)
    end
end
