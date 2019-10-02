class CreateAnswers < ActiveRecord::Migration[6.0]
  def change
    create_table :answers do |t|
      t.int :user_id
      t.int :question_id
      t.string :response
      t.date :date

      t.timestamps
    end
  end
end
