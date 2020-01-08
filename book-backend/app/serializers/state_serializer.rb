class StateSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :initials
end
