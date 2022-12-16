class CreateSubmarineCables < ActiveRecord::Migration[7.0]
  def change
    create_table :submarine_cables do |t|
      t.string :name
      t.string :color
      t.string :feature_id
      t.text :coordinates, array: true, default: []
      t.timestamps
    end
  end
end
