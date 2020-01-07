class ShowsDatesController < ApplicationController

    def index
        sds = ShowDate.all 
        render json: ShowDateSerializer.new(sds)

    end

    def show
        sd = ShowDate.find(1)
        render json: ShowDateSerializer.new(sd)
    end

end