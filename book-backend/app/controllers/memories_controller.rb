class MemoriesController < ApplicationController

    def create
        show = Show.find(params[:showId])
        fan = Fan.find(params[:fanId])
        mem = Memory.new
        mem.fan_id = fan.id
        mem.show_id = show.id
        mem.text = params[:memory][:text]
        mem.save

        options  = {include: [:shows, :memories]}
        render json: FanSerializer.new(fan, options)
       
    end

end