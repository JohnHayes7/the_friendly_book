class Venue < ApplicationRecord
    has_many :show_dates
    has_many :shows
    belongs_to :state
    belongs_to :city
end
