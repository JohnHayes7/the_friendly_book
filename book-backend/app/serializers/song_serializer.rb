class SongSerializer
  include FastJsonapi::ObjectSerializer
  has_many :shows
  attributes :title
end
