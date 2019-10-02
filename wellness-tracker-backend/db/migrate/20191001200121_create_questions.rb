class CreateQuestions < ActiveRecord::Migration[6.0]
  def change
    create_table :questions do |t|
      t.string :category
      t.int :number
      t.string :text
      t.references :answer, null: false, foreign_key: true

      t.timestamps
    end
  end
end
