class PostsController < ApplicationController
    skip_before_action :authorize only, [:index, :show]
    
    def index
        render json: Post.all
    end

    def show
        post = Post.find_by_id(params[:id])
            if post
                render json: post
            else
                render json: { error: "Post not found" }, status: :not_found
            end
    end

    def create
        post = Post.create(post_params)

            if post.valid?
                render json: post
            else 
                render json: {error: post.errors.full_messages}, status: :unprocessable_entity
            end
    end

    def update 
        post = Post.find_by_id(params[:id])
        if post
            post.update(likes)
            render json: post
        else
            render json: {error: 'Post not found'}, status: :not_found
        end
    end

    def destroy
        post = Post.find_by_id(params[:id])
        if post
            post.destroy
            head :no_content
        else 
            render json: {error: 'Post not found'}, status: :not_found
        end
    end 

    private


    def post_params
        params.permit(:post_id, :user_id, :comment, :likes)
    end

    def likes
        params.permit(:likes)
    end

end