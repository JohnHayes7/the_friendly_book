class AddSetOneToShows < ActiveRecord::Migration[6.0]
  def change
    add_column :shows, :set_one, :string, default: [].to_yaml, array:true
  end
end
