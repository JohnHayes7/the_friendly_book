class FansController < ApplicationController

    def create
        binding.pry

    end

    def show
        f = Fan.find(params[:id])
        options = {include: [:shows, :memories]}
        render json: FanSerializer.new(f, options)
    end

    def edit

    end

    def delete

    end

    private

    def fan_params
        params.require(:fan).permit(:username, :email, :phone_number, :password)
    end

end