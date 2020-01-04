class FansController < ApplicationController

    def create

    end

    def show
        f = Fan.find(params[:id])
        render json: FanSerializer.new(f)
    end

    def edit

    end

    def delete

    end

end