class State < ApplicationRecord
    has_many :venues
    has_many :cities

    def self.get_state_from_location(location)
        # binding.pry
        location.split(", ")[1]
    end

end
