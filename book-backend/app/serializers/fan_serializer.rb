class FanSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :username, :email, :phone_number
end
