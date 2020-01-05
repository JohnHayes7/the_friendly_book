class AddStateIdToVenue < ActiveRecord::Migration[6.0]
  def change
    add_column :venues, :state_id, :integer
  end
end
