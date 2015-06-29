class User < ActiveRecord::Base
	belongs_to :note

	has_secure_password
end
