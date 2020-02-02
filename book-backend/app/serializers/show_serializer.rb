class ShowSerializer
  include FastJsonapi::ObjectSerializer
  has_many :fans
  has_many :memories
  belongs_to :show_date
  has_many :songs
  belongs_to :venue

  attributes :set1, :set2, :set3, :set_encore, :display_date, :display_venue, :display_location
end
