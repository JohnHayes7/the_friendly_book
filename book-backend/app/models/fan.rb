class Fan < ApplicationRecord
    # validates :auth_token, uniqueness: true
    has_secure_password
    validates :username, :password, presence: true
    validates :username, uniqueness: true
    validates :email, uniqueness: true
    validates :password, presence: true
    has_and_belongs_to_many :shows
    has_many :memories

    # def generate_authentication_token!
    #     begin
    #       self.auth_token = Devise.friendly_token
    #     end while self.class.exists?(auth_token: auth_token)
    # end

    
end
