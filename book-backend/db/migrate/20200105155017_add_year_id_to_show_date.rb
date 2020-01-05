class AddYearIdToShowDate < ActiveRecord::Migration[6.0]
  def change
    add_column :show_dates, :year_id, :integer
  end
end
