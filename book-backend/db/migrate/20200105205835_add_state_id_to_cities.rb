class AddStateIdToCities < ActiveRecord::Migration[6.0]
  def change
    add_column :cities, :state_id, :integer
  end
end
