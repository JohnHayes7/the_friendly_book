class AddSetThreeToShows < ActiveRecord::Migration[6.0]
  def change
    add_column :shows, :set_three, :text, default: [].to_yaml, array:true
  end
end
