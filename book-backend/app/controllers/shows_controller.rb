class ShowsController < ApplicationController


    def create

    end

    def show
        s = Show.find(params[:id])
        options = {include: [:fans, :memories, :show_date, :venue, :songs]}
        render json: ShowSerializer.new(s, options)
    end

    def edit

    end

    def delete

    end

end