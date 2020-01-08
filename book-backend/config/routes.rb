Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  get 'fans/:id', to: 'fans#show'

  get 'shows/:id', to: 'shows#show'

  get 'venues/:id', to: 'venues#show'

  get 'cities/:id', to: 'cities#show'

  resources :years, only: [:index, :show, :edit]

  resources :shows_dates, only: [:index, :show]

  resources :songs, only: [:index, :show]

end
