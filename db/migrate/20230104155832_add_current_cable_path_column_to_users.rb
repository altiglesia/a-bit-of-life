class AddCurrentCablePathColumnToUsers < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :current_cable_path, :string
  end
end
