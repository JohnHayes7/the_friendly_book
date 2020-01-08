class StateSerializer
  include FastJsonapi::ObjectSerializer

  has_many :venues
  has_many :cities
  
  attributes :name, :initials
end
