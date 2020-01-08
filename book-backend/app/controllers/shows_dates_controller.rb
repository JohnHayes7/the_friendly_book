class ShowsDatesController < ApplicationController

    def index
        sds = ShowDate.all 
        options = {include: [:show, :year, :venue, :weather]}
        render json: ShowDateSerializer.new(sds, options)

    end

    def show
        sd = ShowDate.find(1)
        options = {include: [:show, :year, :venue, :weather]}
        render json: ShowDateSerializer.new(sd, options)
    end

end