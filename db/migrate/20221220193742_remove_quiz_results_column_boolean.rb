class RemoveQuizResultsColumnBoolean < ActiveRecord::Migration[7.0]
  def change
    remove_column :users, :quiz_results, :boolean
  end
end
