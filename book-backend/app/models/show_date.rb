class ShowDate < ApplicationRecord
    has_one :show
    belongs_to :year
    belongs_to :venue
    has_one :weather

    def self.get_day(date)
        date.split("-").last
    end

    def self.get_month(date)
        date.split("-")[1]
    end

    def self.get_year(date)
        date.split("-").first
    end

end


