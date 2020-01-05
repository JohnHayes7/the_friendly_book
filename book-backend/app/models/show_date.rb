class ShowDate < ApplicationRecord
    has_one :show
    belongs_to :year
    belongs_to :venue
    has_one :weather
end


