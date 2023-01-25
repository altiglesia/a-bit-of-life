class UsersController < ApplicationController
# skip_before_action :authorized, only: [:create]
# This controller is responsible for creating and saving new users to the database
    def profile
        render json: { user: UserSerializer.new(current_user) }, status: :accepted
    end

    def create
        @user = User.create(user_params)
        if @user.valid?
            exp = Time.now.to_i + 24 * 3600
            payload = { user_id: @user.id, exp: exp }
            @token = encode_token(payload)
            render json: { user: UserSerializer.new(@user), jwt: @token }, status: :created
        else
            render json: { error: @user.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def update
        user = find_user
        user.update!(user_params)
        render json: user, status: :accepted
    end
    
    private
    
    def find_user
        User.find_by(username: params[:user][:username])
    end

    def user_params
        params.require(:user).permit(:username, :email, :password, :password_confirmation, :quiz_results, :current_cable_path)
    end

end
