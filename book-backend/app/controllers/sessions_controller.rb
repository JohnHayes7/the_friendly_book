class SessionsController < ApplicationController
    # helper_method :login!

    def create
        @user = Fan.find_by(username: params[:username])
        # binding.pry
        if @user && @user.authenticate(params[:session][:password])
           
            session[:user_id] = @user.id
            options = {include: [:shows, :memories]}

            render json: FanSerializer.new(@user,options)
        else
          binding.pry
            message = {error: "Can not find user, please reenter your username"}
            render json: message
        end
    end

    # def is_logged_in?
      
    #     if logged_in? && current_user
    #       render json: {
    #         logged_in: true,
    #         user: current_user
    #       }
    #     else
    #       render json: {
    #         logged_in: false,
    #         message: 'no such user'
    #       }
    #     end
    # end

    def destroy
        logout!
        render json: {
          status: 200,
          logged_out: true
        }
    end
end
