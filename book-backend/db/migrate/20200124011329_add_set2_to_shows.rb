class AddSet2ToShows < ActiveRecord::Migration[6.0]
  def change
    add_column :shows, :set2, :string
  end
end
