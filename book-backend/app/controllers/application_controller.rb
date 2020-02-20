class ApplicationController < ActionController::API
    include ActionController::Cookies
    include ActionController::RequestForgeryProtection
    
    protect_from_forgery with: :exception, unless: -> { request.format.json? }
    skip_before_action :verify_authenticity_token
    
    # def login!
    #     session[:user_id] = @user.id
    # end
    def logged_in?
        # binding.pry
        !!session[:user_id]
    end
    def current_user
        @current_user ||= User.find(session[:user_id]) if session[:user_id]
    end
    def authorized_user?
        @user == current_user
    end
    def logout!
        session.clear
    end
end
