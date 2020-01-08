class SongsController < ApplicationController

    def index 
        songs = Song.all
        render json: SongSerializer.new(songs)
    end

    def show
        s = Song.find(params[:id])
        render json: SongSerializer.new(s)

    end

end