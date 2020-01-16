class SessionsController < ApplicationController

    def create
        fan = Fan.find_by(username: params[:username])
        options = {include: [:shows, :memories]}
        session[:user_id] = fan.id
        render json: FanSerializer.new(fan,options)
    end

    def destroy

    end
end
