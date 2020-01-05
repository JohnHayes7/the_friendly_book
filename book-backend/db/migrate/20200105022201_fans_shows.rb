class FansShows < ActiveRecord::Migration[6.0]
  def change
    create_table :fans_shows, :id => false do |t|
      t.integer :fan_id
      t.integer :show_id
    end
  end
end
