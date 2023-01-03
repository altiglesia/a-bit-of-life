class CreateStoryCards < ActiveRecord::Migration[7.0]
  def change
    create_table :story_cards do |t|
      t.text :content
      t.timestamps
    end
  end
end
