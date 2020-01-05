class CreateMemories < ActiveRecord::Migration[6.0]
  def change
    create_table :memories do |t|
      t.integer :fan_id
      t.integer :show_id
      t.text :text

      t.timestamps
    end
  end
end
