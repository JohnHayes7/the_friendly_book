class AddYearIdToShows < ActiveRecord::Migration[6.0]
  def change
    add_column :shows, :year_id, :integer
  end
end
