class YearsController < ApplicationController


    def create
        # binding.pry
        params[:_json].each do |t|
            # binding.pry
            Year.create({value: t[:year]})
        end

        years = Year.all
        render json: YearSerializer.new(years)
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