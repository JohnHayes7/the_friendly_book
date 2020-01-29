class AccountTokenController < Knock::AuthTokenController
    def  create
      response.set_cookie(
        :jwt,
        {
          value: auth_token.token,
          expires: 30.minutes.from_now,
          path: '/api',
          secure: Rails.env.production?,
          httponly: Rails.env.production?
        }
      )
  
      render json: auth_token.payload, status: :created
    end
  end