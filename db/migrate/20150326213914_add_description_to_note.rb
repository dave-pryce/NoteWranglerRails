class AddDescriptionToNote < ActiveRecord::Migration
  def change
  	add_column :notes, :description, :string
  	change_column :notes, :content, :text
  end
end
