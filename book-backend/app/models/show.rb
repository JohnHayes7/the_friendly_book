class Show < ApplicationRecord
    has_and_belongs_to_many :fans
    has_many :memories
    belongs_to :show_date
    has_and_belongs_to_many :songs
    belongs_to :venue
    
end
