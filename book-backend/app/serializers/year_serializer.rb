class YearSerializer
  include FastJsonapi::ObjectSerializer
  has_many :show_dates
  attributes :value
end
