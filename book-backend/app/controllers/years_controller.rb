class YearsController < ApplicationController


    def create
        year = Year.create({value:params[:year]})
        years = Year.all
        render json: YearSerializer(years)
    end

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