class AddVenueIdToShow < ActiveRecord::Migration[6.0]
  def change
    add_column :shows, :venue_id, :integer
  end
end
