class FansController < ApplicationController

    def create
        fan = Fan.new(fan_params)
        fan.password = params[:password]
            if fan.save
                options  = {include: [:shows, :memories]}
                render json: FanSerializer.new(fan, options)
            end
        
    end

    def show
        f = Fan.find(params[:id])
        binding.pry
        if f
            options = {include: [:shows, :memories]}
            render json: FanSerializer.new(f, options)
        else
            render json: { status: "error", code: 4000, message: "Can Not Find Fan. Please try again or create an account"}
        end
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