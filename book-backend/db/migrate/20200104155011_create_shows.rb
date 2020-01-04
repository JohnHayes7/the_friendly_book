class CreateShows < ActiveRecord::Migration[6.0]
  def change
    create_table :shows do |t|
      t.text :setlist
      t.timestamps
    end
  end
end
