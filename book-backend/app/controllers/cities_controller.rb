class CitiesController < ApplicationController 

    def show
        c = City.find(params[:id])
        render json: CitySerializer.new(c)
    end

end
