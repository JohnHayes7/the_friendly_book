Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  get 'fans/:id', to: 'fans#show'

  get 'shows/:id', to: 'shows#show'

end
