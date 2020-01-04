class ShowsController < ApplicationController

    def create

    end

    def show
        s = Show.find(params[:id])
        render json: ShowSerializer.new(s)
    
    end

    def edit

    end

    def delete

    end

end