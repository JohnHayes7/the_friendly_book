class AddDisplayAttrsToShows < ActiveRecord::Migration[6.0]
  def change
    add_column :shows, :display_date, :text
    add_column :shows, :display_venue, :text
    add_column :shows, :display_location, :text
  end
end
