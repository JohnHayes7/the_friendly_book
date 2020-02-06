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
        memory = Memory.find(params[:id])
        options = {include: [:fan, :show]}
        render json: MemorySerializer.new(memory, options) 
    end

    def update
        mem = Memory.find(params[:id])
        mem.text = params[:memory][:text]
        mem.save
        render json: MemorySerializer.new(mem)
    end

    def destroy
        mem = Memory.find(params[:id])
        mem.destroy
        render json: {code: 3000, message:"Memory Deleted"}
    end

end