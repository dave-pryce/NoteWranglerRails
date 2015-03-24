Rails.application.routes.draw do
 resources :notes, :defaults => {:format => :json}

 root to: 'notes#index'

end
