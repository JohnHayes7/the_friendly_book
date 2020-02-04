Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  resources :shows, only: [:show, :create, :update]

  get 'venues/:id', to: 'venues#show'

  get 'cities/:id', to: 'cities#show'

  resources :years, only: [:create, :index, :show, :edit]

  resources :shows_dates, only: [:index, :show, :create]

  resources :songs, only: [:index, :show]

  resources :states, only: [:index, :show]

  resources :fans, only: [:create, :show, :edit, :destroy]
  
  resources :memories, only:[:create, :edit, :destroy]

  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  get '/logged_in', to: 'sessions#is_logged_in?'
  post '/add_fan_to_show', to:'shows#add_fan'
  post '/remove_show_from_fan', to: 'fans#remove_show'
end
