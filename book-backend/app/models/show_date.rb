class ShowDate < ApplicationRecord
    has_many :shows
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

    def self.format_date_for_search(date)
        "#{date.split("-").last}-#{date.split("-").first}-#{date.split("-")[1]}"
    end

    def build_display_date
        "#{self.month}.#{self.day}.#{self.year.value}"
    end



end


