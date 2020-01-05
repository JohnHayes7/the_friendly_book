class CreateShowsSongs < ActiveRecord::Migration[6.0]
  def change
    create_table :shows_songs do |t|
      t.integer :song_id
      t.integer :show_id
      
      t.timestamps
    end
  end
end
