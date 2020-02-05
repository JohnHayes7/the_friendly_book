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

    def show
        show = Show.find(params[:id])
        memories = show.memories
        options = {include: [:fan]}
        render json: MemorySerializer.new(memories, options)
    end

end