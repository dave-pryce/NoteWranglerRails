class Adddescriptiontocategory < ActiveRecord::Migration
  def change
  	add_column :categories, :description, :string
  end
end
