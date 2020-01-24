class AddSet1ToShows < ActiveRecord::Migration[6.0]
  def change
    add_column :shows, :set1, :string
  end
end
