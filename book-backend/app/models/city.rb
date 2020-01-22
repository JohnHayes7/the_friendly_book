class City < ApplicationRecord
    belongs_to :state
    has_many :venues

    def self.get_city_from_location(location)
        location.split(", ")[0]
    end
end
