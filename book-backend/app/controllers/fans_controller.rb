class FansController < ApplicationController

    def create
        fan = Fan.new(fan_params)
        # binding.pry
        fan.password = params[:password]
        options  = {include: [:shows, :memories]}
            if fan.save
                render json: FanSerializer.new(fan, options)
            else
                render json: {code: 3000, message: "Could not create your account, please check your information"}
            end
    end

    def show
        f = Fan.find(params[:id])
        if f
            options = {include: [:shows, :memories]}
            render json: FanSerializer.new(f, options)
        else
            render json: { status: "error", code: 4000, message: "Can Not Find Fan. Please try again or create an account"}
        end
    end

    def edit

    end

    def remove_show
        fan = Fan.find(params[:fanId].to_i)
        show = Show.find(params[:showId].to_i)
        fan.shows.delete(show)
        show.fans.delete(fan)

        options = {include: [:shows, :memories]}
        render json: FanSerializer.new(fan, options)
    end

    def delete

    end



    private

    def fan_params
        params.require(:fan).permit(:username, :email, :phone_number, :password)
    end

end