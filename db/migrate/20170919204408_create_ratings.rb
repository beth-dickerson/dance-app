class CreateRatings < ActiveRecord::Migration[5.1]
  def change
    create_table :ratings do |t|
      t.string :review, null: false
      t.integer :fun, null: false
      t.integer :lame, null: false
      t.integer :user_id, null: false
      t.integer :venue_id, null:false

      t.timestamps
    end
  end
end
