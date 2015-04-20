class Note < ActiveRecord::Base
	belongs_to :category
	belongs_to :user

	# include user and categry as part of JSON
	def as_json(options={})
    super(:include => [:user])
    super(:include => [:category])
  	end

end
