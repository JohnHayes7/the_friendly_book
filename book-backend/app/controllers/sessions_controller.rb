class SessionsController < ApplicationController

    def create
        fan = Fan.find_by(username: params[:username])
        render json: FanSerializer.new(fan)
    end

    def destroy

    end
end
