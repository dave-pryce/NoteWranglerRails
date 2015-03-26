Rails.application.routes.draw do
  get 'users/index'

  get 'users/show'

 resources :notes, :defaults => {:format => :json}

 root to: 'notes#index'

end
