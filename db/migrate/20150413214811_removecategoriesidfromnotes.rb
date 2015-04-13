class Removecategoriesidfromnotes < ActiveRecord::Migration
  def change
  	  	remove_column :notes, :categories_id
  end
end
