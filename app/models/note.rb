class Note < ActiveRecord::Base
	
	# Relationships
	belongs_to :category
	belongs_to :user

	# Validation
	validates :title, presence: true 
	validates :description, presence: true 
	validates :content, presence: true 
	validates :user_id, presence: true 
	validates :category_id, presence: true

	# include user and categry as part of note JSON
	def as_json(options={})
    super(:include => [:user,:category])
   	end

end
