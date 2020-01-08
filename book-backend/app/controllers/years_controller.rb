class YearsController < ApplicationController

    def index
        years = Year.all 
        options = {include: [:show_dates]}
        render json: YearSerializer.new(years, options)
    end

    def show
        y = Year.find(params[:id])
        options = {include: [:show_dates]}
        render json: YearSerializer.new(y, options)
    end

end