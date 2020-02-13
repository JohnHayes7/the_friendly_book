class ShowsController < ApplicationController


    def create
        # binding.pry
        if params[:show][:date] && params[:show][:date].length > 0
            # binding.pry
            # if params[:show][:date].length > 0
                # binding.pry
                year_value = Year.get_year(params[:show][:date])
                year = Year.find_or_create_by(value: year_value)
                day = ShowDate.get_day(params[:show][:date])
                month = ShowDate.get_month(params[:show][:date])
                # binding.pry
                show_date = ShowDate.find_or_create_by({month: month, day: day, year_id: year.id})
                # binding.pry
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
                # binding.pry
                show_date.save
                # binding.pry
            # else
            #     # binding.pry
            #     year_value = Year.get_year(params[:date])
            #     year = Year.find_or_create_by(value: year_value)
            #     day = ShowDate.get_day(params[:date])
            #     month = ShowDate.get_month(params[:date])
            #     show_date = ShowDate.find_or_create_by({month: month, day: day})
            #     show_date.year_id = year.id
                
            #     state_initials = State.get_state_from_location(params[:location])
            #     state = State.find_or_create_by(initials: state_initials)
    
            #     city_name = City.get_city_from_location(params[:location])
            #     city = City.find_or_create_by(name: city_name)
            #     city.state_id = state.id 
            #     city.save
    
            #     venue = Venue.find_or_create_by(name: params[:venue])
            #     venue.city_id = city.id
            #     venue.state_id = state.id
            #     venue.save
    
            #     show_date.venue_id = venue.id
            #     show_date.save
            #     # binding.pry
            # end
        else
            # binding.pry
            year_value = Year.get_year(params[:date])
            year = Year.find_or_create_by(value: year_value)
            day = ShowDate.get_day(params[:date])
            month = ShowDate.get_month(params[:date])
            show_date = ShowDate.find_or_create_by({month: month, day: day, year_id: year.id})
            # binding.pry
            # show_date.year_id = year.id
            
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
            # binding.pry
            show_date.save
            # binding.pry
        end    

        options = {include: [:fans, :memories, :show_date, :venue, :songs]}
        
        if !show_date.show
            s = Show.new()
            s.display_date = show_date.build_display_date
            s.show_date_id = show_date.id
            s.venue_id = venue.id
            s.display_venue = venue.name
            s.display_location = "#{city_name}, #{state_initials}"
            # binding.pry
            s.add_set_one(params[:show][:set1])
            s.add_set_two(params[:show][:set2])
            s.add_set_three(params[:show][:set3])
            s.add_encore(params[:show][:encore])
            # binding.pry
            s.save
            show_date.save
            # binding.pry
            render json: ShowSerializer.new(s, options)
        else
            render json: ShowSerializer.new(show_date.show, options)
        end
        
        
    end


    def show 
        # binding.pry
            year_value = ShowDate.get_year(params[:id])
            # Need to find the search date within the year.
            year = Year.find_by({value: year_value})
            day = ShowDate.get_day(params[:id])
            month = ShowDate.get_month(params[:id])
            # binding.pry
            show_date = ShowDate.find_by({month: month, day: day, year_id: year.id})
            options = {include: [:fans, :memories, :show_date, :venue, :songs]}
            # binding.pry
            if show_date
                # binding.pry
                if show_date.show
                    s = Show.find(show_date.show.id)
                    # binding.pry
                    render json: ShowSerializer.new(s, options) 
                else
                    # binding.pry
                    render json: { status: "error", code: 3000, message: "Can Not Find Show"}
                end
            else
                # binding.pry
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

    def add_fan
        
        show_date = ShowDate.find_by({month:params[:month], day:params[:day]})
        year = Year.find_by(value: params[:year])
        fan = Fan.find(params[:fanId])
        
        if show_date.year_id = year.id
            show_date.show.fans << fan
            fan.shows << show_date.show
        end
        options = {include: [:fans, :memories, :show_date, :venue, :songs]}
        render json: ShowSerializer.new(show_date.show, options)
    end

    def delete

    end

end