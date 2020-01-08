class ShowSerializer
  include FastJsonapi::ObjectSerializer
  has_many :fans
  has_many :memories
  belongs_to :show_date
  has_many :songs
  belongs_to :venue

  attributes :setlist
end
