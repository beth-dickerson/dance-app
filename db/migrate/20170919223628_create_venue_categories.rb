class CreateVenueCategories < ActiveRecord::Migration[5.1]
  def change
    create_table :venue_categories do |t|
      t.integer :category_id, null: false
      t.integer :venue_id, null: false

      t.timestamps
    end
  end
end
