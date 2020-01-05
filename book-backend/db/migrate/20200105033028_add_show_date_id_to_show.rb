class AddShowDateIdToShow < ActiveRecord::Migration[6.0]
  def change
    add_column :shows, :show_date_id, :integer
  end
end
