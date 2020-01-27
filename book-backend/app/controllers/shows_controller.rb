class ShowsController < ApplicationController


    def create
        
        search_date = ShowDate.format_date_for_search(params[:match][:params][:date])
        day = ShowDate.get_day(search_date)
        month = ShowDate.get_month(search_date)
        show_date = ShowDate.find_by({month: month, day:day})
        options = {include: [:fans, :memories, :show_date, :venue, :songs]}
       
        venue = Venue.find(show_date.venue_id)
        
        if show_date.show == nil
            show = Show.new
            show.show_date_id = show_date.id
            show.add_set_one(params[:set1])
            show.add_set_two(params[:set2])
            show.add_set_three(params[:set3])
            show.add_encore(params[:encore])
            show.venue_id = venue.id    
            show.save
            
        else
           show = Show.find(show_date.show.id)
        end
        render json: ShowSerializer.new(show, options)
    end


    def show
        if params[:id] == "undefined"
            render json: { status: "error", code: 3000, message: "Can Not Find Show"}
        else
            s = Show.find(params[:id])
            if s 
                options = {include: [:fans, :memories, :show_date, :venue, :songs]}
                render json: ShowSerializer.new(s, options)
                
            else
                render json: { status: "error", code: 3000, message: "Can Not Find Show"}
            end
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