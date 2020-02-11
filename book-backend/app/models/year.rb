class Year < ApplicationRecord
    has_many :show_dates
    has_many :shows, through: :show_dates

    def self.get_year(date)
        date.split("-").first
    end
end
