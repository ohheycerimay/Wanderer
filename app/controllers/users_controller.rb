class UsersController < ApplicationController
rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity
    # before_action :authorize, only: [:show]

  def create
    user = User.create!(user_params)
    render json: user, status: :created
  end

  def show
    user = User.find_by(id: session[:user_id])
    render json: user
  end

  private
  def render_unprocessable_entity(invalid)
    render json: { error: invalid.record.errors.full_messages }, status: :unprocessable_entity
  end



  # def authorize
  #   return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
  # end

  def user_params
    params.permit(:username, :password, :image_url)
  end

end
