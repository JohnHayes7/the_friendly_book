class MemorySerializer
  include FastJsonapi::ObjectSerializer
  # Not sure I need this and may delete later
  attributes :text
end
