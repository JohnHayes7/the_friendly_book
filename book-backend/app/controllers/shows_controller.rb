class ShowsController < ApplicationController


    def create
        day = ShowDate.get_day(params[:date])
        month = ShowDate.get_month(params[:date])

        show_date = ShowDate.find_by({month: month, day:day})
        venue = Venue.find_by(name: params[:venue])
        options = {include: [:fans, :memories, :show_date, :venue, :songs]}
        if show_date.show == nil
            show = Show.new
            show.show_date_id = show_date.id
            show.add_set_one(params[:set1])
            show.add_set_two(params[:set2])
            show.add_set_three(params[:set3])
            show.add_encore(params[:encore])
            if venue
                show.venue_id = venue.id    
            end
            show.save
            # render json: ShowSerializer.new(show,options)
        else
           show = Show.find(show_date.show.id)
        end

        binding.pry
        render json: ShowSerializer.new(show, options)
    end


    def show
        s = Show.find(params[:id])
        options = {include: [:fans, :memories, :show_date, :venue, :songs]}
        render json: ShowSerializer.new(s, options)
    end

    def edit

    end

    def delete

    end

end