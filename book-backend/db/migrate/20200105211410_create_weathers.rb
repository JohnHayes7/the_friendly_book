class CreateWeathers < ActiveRecord::Migration[6.0]
  def change
    create_table :weathers do |t|
      t.string :temp
      t.string :conditions
      t.integer :show_date_id

      t.timestamps
    end
  end
end
