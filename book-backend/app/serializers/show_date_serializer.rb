class ShowDateSerializer
  include FastJsonapi::ObjectSerializer
  has_many :shows
  belongs_to :year
  belongs_to :venue
  has_one :weather
  attributes :month, :day
end
