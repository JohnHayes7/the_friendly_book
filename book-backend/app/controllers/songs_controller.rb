class SongsController < ApplicationController

    def index 
        songs = Song.all
        options = {include: [:shows]}
        render json: SongSerializer.new(songs, options)
    end

    def show
        s = Song.find(params[:id])
        options = {include: [:shows]}
        render json: SongSerializer.new(s, options)

    end

end