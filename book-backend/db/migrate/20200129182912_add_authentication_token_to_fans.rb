class AddAuthenticationTokenToFans < ActiveRecord::Migration[6.0]
  def change
    add_column :fans, :auth_token, :string
    add_index :fans, :auth_token, unique: true
  end
end
