class FanSerializer
  include FastJsonapi::ObjectSerializer
  has_many :shows
  
  has_many :memories

  attributes :id, :username, :email, :phone_number

end
