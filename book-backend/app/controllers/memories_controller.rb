class MemoriesController < ApplicationController

    def create
        # binding.pry
        show = Show.find(params[:showId])
        fan = Fan.find(params[:fanId])
        mem = Memory.new
        mem.fan_id = fan.id
        mem.show_id = show.id
        mem.text = params[:memory][:text]
        mem.save
        fan.memories << mem
        options  = {include: [:show, :fan]}
        # binding.pry
        # Renders the fan who created the memory
        render json: MemorySerializer.new(mem, options)
       
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