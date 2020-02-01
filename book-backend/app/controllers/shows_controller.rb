class ShowsController < ApplicationController


    def create
        
        if params[:show][:date]
            
            year_value = Year.get_year(params[:show][:date])
            year = Year.find_or_create_by(value: year_value)
            day = ShowDate.get_day(params[:show][:date])
            month = ShowDate.get_month(params[:show][:date])
            show_date = ShowDate.find_or_create_by({month: month, day: day})
            
            show_date.year_id = year.id

            state_initials = State.get_state_from_location(params[:show][:location])
            state = State.find_or_create_by(initials: state_initials)

            city_name = City.get_city_from_location(params[:show][:location])
            city = City.find_or_create_by(name: city_name)
            city.state_id = state.id 
            city.save

            venue = Venue.find_or_create_by(name: params[:show][:venue])
            venue.city_id = city.id
            venue.state_id = state.id
            venue.save

            show_date.venue_id = venue.id
            show_date.save

        else
            
            year_value = Year.get_year(params[:date])
            year = Year.find_or_create_by(value: year_value)
            day = ShowDate.get_day(params[:date])
            month = ShowDate.get_month(params[:date])
            show_date = ShowDate.find_or_create_by({month: month, day: day})
            show_date.year_id = year.id
            
            state_initials = State.get_state_from_location(params[:location])
            state = State.find_or_create_by(initials: state_initials)

            city_name = City.get_city_from_location(params[:location])
            city = City.find_or_create_by(name: city_name)
            city.state_id = state.id 
            city.save

            venue = Venue.find_or_create_by(name: params[:venue])
            venue.city_id = city.id
            venue.state_id = state.id
            venue.save

            show_date.venue_id = venue.id
            show_date.save

        end    

        options = {include: [:fans, :memories, :show_date, :venue, :songs]}
        
        if !show_date.show
            s = Show.new()
            s.show_date_id = show_date.id
            s.venue_id = venue.id
            s.add_set_one(params[:show][:set1])
            s.add_set_two(params[:show][:set2])
            s.add_encore(params[:show][:encore])
            
            s.save
        end
        
        render json: ShowSerializer.new(s, options)
    end


    def show
        day = ShowDate.get_day(params[:id])
        month = ShowDate.get_month(params[:id])
        show_date = ShowDate.find_by({month: month, day:day})
        options = {include: [:fans, :memories, :show_date, :venue, :songs]}
        
        if show_date
            if show_date.show
                s = Show.find(show_date.show.id)
                render json: ShowSerializer.new(s, options) 
            else
                render json: { status: "error", code: 3000, message: "Can Not Find Show"}
            end
        else
            render json: { status: "error", code: 3000, message: "Can Not Find Show"}
        end

    end

    def update
        show = Show.find(params[:data][:id])
        show.add_set_one(params[:data][:attributes][:set1])

        if params[:data][:attributes][:set2]
            show.add_set_two(params[:data][:attributes][:set2])
        end
        if params[:data][:attributes][:set3]
            show.add_set_three(params[:data][:attributes][:set3])
        end
        if params[:data][:attributes][:set_encore]
            show.add_encore(params[:data][:attributes][:set_encore])
        end
        
        show.save
       
        options = {include: [:fans, :memories, :show_date, :venue, :songs]}
        render json: ShowSerializer.new(show, options)
    end

    def delete

    end

end