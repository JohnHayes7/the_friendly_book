Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  # get 'fans/:id', to: 'fans#show'

  # get 'shows/:id', to: 'shows#show'
  resources :shows, only: [:show]

  get 'venues/:id', to: 'venues#show'

  get 'cities/:id', to: 'cities#show'

  resources :years, only: [:create, :index, :show, :edit]

  resources :shows_dates, only: [:index, :show, :create]

  resources :songs, only: [:index, :show]

  resources :states, only: [:index, :show]

  resources :fans, only: [:create, :show, :edit, :destroy]

  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

end
