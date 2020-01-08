class VenueSerializer
    include FastJsonapi::ObjectSerializer
    # has_many :shows_dates
    has_many :shows
    belongs_to :state
    belongs_to :city

    attributes :name

end