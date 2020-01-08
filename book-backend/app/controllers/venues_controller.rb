class VenuesController < ApplicationController

    def create

    end

    def show
        v = Venue.find(params[:id])
        options = {include: [:shows, :state, :city]}
        render json: VenueSerializer.new(v, options)

    end

end