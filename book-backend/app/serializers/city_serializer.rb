class CitySerializer
  include FastJsonapi::ObjectSerializer
  belongs_to :state
  has_many :venues
  
  attributes :name
end
