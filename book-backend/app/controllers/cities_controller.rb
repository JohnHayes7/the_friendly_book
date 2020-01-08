class CitiesController < ApplicationController 

    def show
        c = City.find(params[:id])
        options = {include: [:state, :venues]}
        render json: CitySerializer.new(c, options)
    end

end
