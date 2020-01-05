class Venue < ApplicationRecord
    has_many :dates
    has_many :shows
    belongs_to :state
end
