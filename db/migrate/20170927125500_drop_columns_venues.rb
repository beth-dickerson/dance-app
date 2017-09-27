class DropColumnsVenues < ActiveRecord::Migration[5.1]
  def change
    remove_column :venues, :description, :text
    remove_column :venues, :email, :string
    remove_column :venues, :neighborhood, :string
    remove_column :venues, :phone, :string
    remove_column :venues, :url, :string
    remove_column :venues, :photo, :string
  end
end
