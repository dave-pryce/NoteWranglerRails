class Removeemailfromnotes < ActiveRecord::Migration
  def change
  	remove_column :notes, :email
  end
end
