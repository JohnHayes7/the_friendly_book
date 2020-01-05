class Show < ApplicationRecord
    has_and_belongs_to_many :fans
    has_many :memories
end
