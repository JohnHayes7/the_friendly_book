class ApplicationController < ActionController::API

    def is_logged_in?(user)
        session.user_id === user.id
    end
end
