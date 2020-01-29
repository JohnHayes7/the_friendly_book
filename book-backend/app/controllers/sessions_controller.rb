class SessionsController < ApplicationController

    def create
        @user = Fan.find_by(username: params[:username])
        if @user && @user.authenticate(params[:session][:password])
            login!
            options = {include: [:shows, :memories]}
            render json: FanSerializer.new(fan,options)
        else
            message = {error: "Can not find user, please reenter your username"}
            render json: message
        end
    end

    def is_logged_in?
        if logged_in? && current_user
          render json: {
            logged_in: true,
            user: current_user
          }
        else
          render json: {
            logged_in: false,
            message: 'no such user'
          }
        end
    end

    def destroy
        logout!
        render json: {
          status: 200,
          logged_out: true
        }
    end
end
