class FixInitialsColumnName < ActiveRecord::Migration[6.0]
  def change
    rename_column :states, :initals, :initials
  end
end
