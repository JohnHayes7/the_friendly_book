class MemorySerializer
  include FastJsonapi::ObjectSerializer
  # Not sure I need this and may delete later

  belongs_to :fan
  belongs_to :show

  attributes :text

end
