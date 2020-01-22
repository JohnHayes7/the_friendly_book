class ShowsDatesController < ApplicationController

    def create
       
        params[:_json].each do |s|

            day = ShowDate.get_day(s[:date])
            month = ShowDate.get_month(s[:date])
            show_year = ShowDate.get_year(s[:date])

            

            year = Year.find_by(value: show_year)

            show_date = ShowDate.new({month: month, day: day})
            show_date.year_id= year.id
            show_date.venue_id = 2
            show_date.save
        end
        show_dates = ShowDate.all
        options = {include: [:show, :year, :venue]}
        render json: ShowDateSerializer.new(show_dates, options)
        
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