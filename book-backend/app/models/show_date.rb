class ShowDate < ApplicationRecord
    has_one :show
    belongs_to :year
end
