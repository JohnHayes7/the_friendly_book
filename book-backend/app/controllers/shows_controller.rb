class ShowsController < ApplicationController


    def create
        day = ShowDate.get_day(params[:show][:date])
        month = ShowDate.get_month(params[:show][:date])
        show_date = ShowDate.find_or_create_by({month: month, day: day})
        options = {include: [:fans, :memories, :show_date, :venue, :songs]}
        venue = Venue.find_or_create_by(name: params[:show][:venue])
        binding.pry
        if !show_date.show
            s = Show.new()
            s.show_date_id = show_date.id
            s.venue_id = venue.id
            s.add_set_one(params[:show][:set1])
            s.add_set_two(params[:show][:set2])
            s.add_encore(params[:show][:encore])
            s.save
        end
        binding.pry
    end


    def show
        day = ShowDate.get_day(params[:id])
        month = ShowDate.get_month(params[:id])
        show_date = ShowDate.find_by({month: month, day:day})
        options = {include: [:fans, :memories, :show_date, :venue, :songs]}
        # binding.pry
        if show_date
            if show_date.show
                s = Show.find(show_date.show.id)
                render json: ShowSerializer.new(s, options) 
            else
                render json: { status: "error", code: 3000, message: "Can Not Find Show"}
            end
        else
            render json: {status: "error", code: 3030, message:"This seems to be ghost Data"}
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