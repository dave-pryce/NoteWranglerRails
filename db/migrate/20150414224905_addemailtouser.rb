class Addemailtouser < ActiveRecord::Migration
  def change
  	add_column :notes, :email, :string
  end
end
