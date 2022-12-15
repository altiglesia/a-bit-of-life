class CreateQuizQuestions < ActiveRecord::Migration[7.0]
  def change
    create_table :quiz_questions do |t|
      t.string :question, null: false
      t.text :options, array: true, default: []
      t.timestamps
    end
  end
end
