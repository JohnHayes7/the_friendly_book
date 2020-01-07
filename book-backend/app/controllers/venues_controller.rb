class VenuesController < ApplicationController

    def create

    end

    def show
        v = Venue.find(params[:id])
        render json: VenueSerializer.new(v)

    end

end