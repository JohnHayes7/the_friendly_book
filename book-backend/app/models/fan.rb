class Fan < ApplicationRecord
    has_secure_password
   attr_accessor :id, :username, :email, :phone_number
    
end
