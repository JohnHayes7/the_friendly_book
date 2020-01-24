class AddSetEncoreToShows < ActiveRecord::Migration[6.0]
  def change
    add_column :shows, :set_encore, :string
  end
end
