class Fan < ApplicationRecord
    
    has_secure_password

    has_and_belongs_to_many :shows
    has_many :memories

    
end
