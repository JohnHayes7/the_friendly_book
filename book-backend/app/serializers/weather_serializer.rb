class WeatherSerializer
  include FastJsonapi::ObjectSerializer
  attributes :temp, :conditions
end
