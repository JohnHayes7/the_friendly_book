if Rails.env === 'production' 
    Rails.application.config.session_store :cookie_store, key: '_the-friendly-book', domain: Rails.configuration.domain
  else
    Rails.application.config.session_store :cookie_store, key: '_the-friendly-book'
  end