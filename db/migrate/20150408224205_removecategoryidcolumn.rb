class Removecategoryidcolumn < ActiveRecord::Migration
  def change
  	#fixing up relations ships
  	remove_column :notes, :categoryid
  end
end
