Rails.application.routes.draw do
  
  resources :bookings, only: [:index, :show, :create, :update, :destroy]
  resources :experiences, only: [:index, :show, :create, :update, :destroy]
  resources :users, only: [:show, :create]
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  # get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  # post "/userlogin", to: "users#create"
  # get "/me", to: "users#show"
  post "/userlogin", to: "sessions#create"
  delete "/userlogin", to: "sessions#destroy"
  # post "/signup", to: "sessions#create"

end

