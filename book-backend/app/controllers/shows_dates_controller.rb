class ShowsDatesController < ApplicationController

    def create
       
        params[:_json].each do |s|
        #    binding.pry
            # PARSE DATE
            day = ShowDate.get_day(s[:date])
            month = ShowDate.get_month(s[:date])
            show_year = ShowDate.get_year(s[:date])

            # FIND YEAR
            year = Year.find_or_create_by(value: show_year)

            # IF DATE DOESN'T EXIST IN DB, ADD IT.
            show_date = ShowDate.find_or_create_by({month: month, day:day})
            show_date.year_id = year.id

            # if !show || show.year_id != year.id
            #     show = ShowDate.new({month: month, day: day})
            #     show.year_id= year.id
            #     show.venue_id = 2
            #     show.save
            # end

            # PARSE STATE
            state_location = State.get_state_from_location(s[:location])
            # PARSE CITY
            city_location= City.get_city_from_location(s[:location])

            # FIND STATE
            state = State.find_or_create_by(initials: state_location)
            # # IF STATE NOT FOUND ADD IT TO THE DB
            # if !state
            #     state = State.create(initials: state_location)
            # end

            # FIND CITY
            city = City.find_or_create_by(name: city_location)
            city.state_id = state.id 
            city.save
            # IF CITY NOT FOUND ADD IT TO THE DB
            # if !city
            #     city = City.new(name: city_location)
            #     city.state_id = state.id
            #     city.save
            # end
            
            #  FIND VENUE
            venue = Venue.find_or_create_by(name: s[:venue])
            venue.city_id = city.id
            venue.state_id = state.id
            venue.save
            show_date.venue_id = venue.id
            show_date.save
            # if !venue_record
            #     venue = Venue.new(name: s[:venue])
            #     venue.city_id = city.id
            #     venue.state_id = state.id
            #     venue.save
            # end
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