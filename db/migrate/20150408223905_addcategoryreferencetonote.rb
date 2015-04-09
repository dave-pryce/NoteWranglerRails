class Addcategoryreferencetonote < ActiveRecord::Migration
  def change
  	# link category to note
  	add_reference :notes, :categories, index: true
  end
end
