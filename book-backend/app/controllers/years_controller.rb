class YearsController < ApplicationController

    def index
        years = Year.all 
        render json: YearSerializer.new(years)
    end

    def show
        y = Year.find(params[:id])
        render json: YearSerializer.new(y)
    end

end