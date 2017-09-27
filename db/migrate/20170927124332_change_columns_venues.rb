class ChangeColumnsVenues < ActiveRecord::Migration[5.1]
  def change
    add_column :venues, :address, :string, null: false
  end
end
