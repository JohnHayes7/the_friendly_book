class ShowsController < ApplicationController


    def create
        binding.pry
        year_value = params[:year][:year]
        year = Year.find_or_create_by(value: year_value)
        day = ShowDate.get_day(params[:display_date])
        month = ShowDate.get_month(params[:display_date])
        show_date = ShowDate.find_by({month: month, day: day, year_id: year.id})
        if !show_date
            show_date = ShowDate.new({month: month, day: day, year_id: year.id})
        end

        show_date.year_id = year.id

        state_initials = State.get_state_from_location(params[:venue][:location])
        state = State.find_or_create_by(initials: state_initials)

        city_name = City.get_city_from_location(params[:venue][:location])
        city = City.find_or_create_by(name: city_name)
        city.state_id = state.id 
        city.save

        venue = Venue.find_or_create_by(name: params[:venue][:name])
        venue.city_id = city.id
        venue.state_id = state.id
        venue.save

        show_date.venue_id = venue.id 
        show_date.save
        options = {include: [:fans, :memories, :show_date, :venue, :songs]}
        show = show_date.shows.find_by(:year_id == year.id)
        binding.pry
        if !show
            binding.pry
            s = Show.new()
            s.display_date = show_date.build_display_date
            s.year_id = year.id
            s.show_date_id = show_date.id
            s.venue_id = venue.id
            s.display_venue = venue.name
            s.display_location = "#{city_name}, #{state_initials}"

            if params[:sources][0][:sets][0][:name] == "Set 1"
                s.add_set_one(params[:sources][0][:sets][0])
            end
            if params[:sources][0][:sets][1][:name] == "Set 2"
                s.add_set_two(params[:sources][0][:sets][1])
            elsif params[:sources][0][:sets][1][:name] == "Encore"
                s.add_encore(params[:sources][0][:sets][1])
            end
            if params[:sources][0][:sets][2] && params[:sources][0][:sets][2][:name] == "Set 3"
                s.add_set_three(params[:sources][0][:sets][2])
                s.add_encore(params[:sources][0][:sets][3])
            elsif params[:sources][0][:sets][2] && params[:sources][0][:sets][2][:name] == "Encore"
                s.set3 = ""
                s.add_encore(params[:sources][0][:sets][2])
            end
            s.save
            show_date.save
            binding.pry
            render json: ShowSerializer.new(s, options)
        else
            render json: ShowSerializer.new(show, options)
        end
    end


    def show 
        year_value = ShowDate.get_year(params[:id])
        year = Year.find_by({value: year_value})
        day = ShowDate.get_day(params[:id])
        month = ShowDate.get_month(params[:id])
        show_date = year.show_dates.find_by({month: month, day: day, year_id: year.id})
        options = {include: [:fans, :memories, :show_date, :venue, :songs]}
        if show_date
            if show_date.shows
                render json: { status: "error", code: 3000, message: "Can Not Find Show"}

                # s = Show.find(show_date.shows.find(show.id))
                # render json: ShowSerializer.new(s, options) 
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