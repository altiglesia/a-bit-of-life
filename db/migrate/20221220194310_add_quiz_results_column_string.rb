class AddQuizResultsColumnString < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :quiz_results, :string
  end
end
