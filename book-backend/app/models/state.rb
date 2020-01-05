class State < ApplicationRecord
    has_many :venues
    has_many :cities

end
