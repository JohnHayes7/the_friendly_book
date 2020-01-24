class AddSet3ToShows < ActiveRecord::Migration[6.0]
  def change
    add_column :shows, :set3, :string
  end
end
