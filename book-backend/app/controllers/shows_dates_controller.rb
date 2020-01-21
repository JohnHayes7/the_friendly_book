class ShowsDatesController < ApplicationController

    def create
        
        params[:_json].each do |s|
            day = ShowDate.get_day(s[:date])
            month = ShowDate.get_month(s[:date])
            show_year = ShowDate.get_year(s[:date])

            year = Year.find_by(value: show_year)

            show_date = ShowDate.new({month: month, day: day})
            show_date.year_id= year.id
            show_date.venue_id = 0
            show_date.save
            binding.pry
        end
    end
    
    def index
        sds = ShowDate.all 
        options = {include: [:show, :year, :venue, :weather]}
        render json: ShowDateSerializer.new(sds, options)

    end

    def show
        sd = ShowDate.find(1)
        options = {include: [:show, :year, :venue, :weather]}
        render json: ShowDateSerializer.new(sd, options)
    end

end