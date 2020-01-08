class StatesController < ApplicationController

    def index
        states = State.all
        options = {include: [:cities, :venues]}
        render json: StateSerializer.new(states, options)
    end

    def show
        s = State.find(params[:id])
        options = {include: [:cities, :venues]}
        render json: StateSerializer.new(s, options)
    end

end