class CreateShowDates < ActiveRecord::Migration[6.0]
  def change
    create_table :show_dates do |t|
      t.string :day
      t.string :month

      t.timestamps
    end
  end
end
