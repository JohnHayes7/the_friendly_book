class AddSetTwoToShows < ActiveRecord::Migration[6.0]
  def change
    add_column :shows, :set_two, :text, default: [].to_yaml, array:true
  end
end
