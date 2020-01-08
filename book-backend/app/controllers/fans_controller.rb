class FansController < ApplicationController

    def create

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

end