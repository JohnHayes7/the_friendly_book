class FansController < ApplicationController

    def show
        f = Fan.find(params[:id])
        binding.pry
        render json: FanSerializer.new(f)
    end

end