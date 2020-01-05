class Show < ApplicationRecord
    has_and_belongs_to_many :fans
    has_many :memories
    belongs_to :show_date
end
