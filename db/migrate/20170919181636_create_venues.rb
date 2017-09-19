class CreateVenues < ActiveRecord::Migration[5.1]
  def change
    create_table :venues do |t|
      t.string :name, null: false
      t.text :description, null: false
      t.string :email
      t.string :neighborhood, null: false
      t.string :phone, null: false
      t.string :url, null: false
      t.string :photo, null: false
      t.integer :user_id, null: false

      t.timestamps
    end
  end
end
