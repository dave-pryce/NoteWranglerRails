Rails.application.routes.draw do
 
 # default root - requires index.html file to be there
 root to: 'notes#index'

# enables notess.json url to work
 resources :notes, :defaults => {:format => :json}

# enables users.json url to work
 resources :users, :defaults => {:format => :json}

end
