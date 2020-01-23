class AddSetEncoreToShows < ActiveRecord::Migration[6.0]
  def change
    add_column :shows, :set_encore, :text, default: [].to_yaml, array:true
  end
end
