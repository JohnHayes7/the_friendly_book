class ShowDateSerializer
  include FastJsonapi::ObjectSerializer
  has_one :show
  belongs_to :year
  belongs_to :venue
  has_one :weather
  attributes :month, :day
end
