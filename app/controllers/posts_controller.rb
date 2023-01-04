class PostsController < ApplicationController
    # skip_before_action  only:[:index]
    
    def index
        render json: Post.all
    end

    def show
        Post = Post.find_by_id(params[:id])
            if Post
                render json: Post
            else
                render json: { error: "Post not found" }, status: :not_found
            end
    end

    def create
        Post = Post.create(Post_params)
            if Post.valid?
                render json: Post
            else 
                render json: {error: Post.errors.full_messages}, status: :unprocessable_entity
            end
    end

    def update 
        Post = Post.find_by_id(params[:id])
        if Post
            Post.update(Post_params)
            render json: Post
        else
            render json: {error: 'Post not found'}, status: :not_found
        end
    end

    def destroy
        Post = Post.find_by_id(params[:id])
        if Post
            Post.destroy
            head :no_content
        else 
            render json: {error: 'Post not found'}, status: :not_found
        end
    end 

    private


    def Post_params
        params.permit(:experience_id, :user_id, :comment)
    end


end
