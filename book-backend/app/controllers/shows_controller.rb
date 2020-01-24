class ShowsController < ApplicationController


    def create
        day = ShowDate.get_day(params[:date])
        month = ShowDate.get_month(params[:date])

        show_date = ShowDate.find_by({month: month, day:day})
        venue = Venue.find_by(name: params[:venue])
        if show_date.show == nil
            show = Show.new
            set1 = ""
            params[:set1].each do |s|
                set1 += "#{s}, "
            end
            show.set1 = set1 
            if venue
                show.venue_id = venue.id
                show.save
            end
        end

        binding.pry
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