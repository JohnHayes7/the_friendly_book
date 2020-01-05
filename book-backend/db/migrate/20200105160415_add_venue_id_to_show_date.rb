class AddVenueIdToShowDate < ActiveRecord::Migration[6.0]
  def change
    add_column :show_dates, :venue_id, :integer
  end
end
