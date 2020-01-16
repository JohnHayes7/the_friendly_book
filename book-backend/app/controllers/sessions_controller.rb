class SessionsController < ApplicationController

    def create
        fan = Fan.find_by(username: params[:username])
        if fan
            options = {include: [:shows, :memories]}
            session[:user_id] = fan.id
            render json: FanSerializer.new(fan,options)
        else
            message = {error: "Can not find user, please reenter your username"}
            render json: message
        end
    end

    def destroy

    end
end
