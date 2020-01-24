class RemoveSetlistFromShows < ActiveRecord::Migration[6.0]
  def change
    remove_column :shows, :setlist, :text
  end
end
