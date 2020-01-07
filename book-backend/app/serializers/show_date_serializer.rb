class ShowDateSerializer
  include FastJsonapi::ObjectSerializer
  attributes :month, :day
end
