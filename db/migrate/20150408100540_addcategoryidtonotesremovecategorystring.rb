class Addcategoryidtonotesremovecategorystring < ActiveRecord::Migration
  def change
  	add_column :notes, :categoryid, :integer
  	remove_column :notes, :category
  end
end
