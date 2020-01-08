class StatesController < ApplicationController

    def index
        states = State.all
        render json: StateSerializer.new(states)
    end

    def show
        s = State.find(params[:id])
        render json: StateSerializer.new(s)
    end

end