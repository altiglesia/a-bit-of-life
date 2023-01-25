Rails.application.routes.draw do

  # user auth routes
  resources :users, only: [:create, :update]
  post '/login', to: 'auth#create'
  get '/profile', to: 'users#profile'
  patch '/profile', to: 'users#update'
  # namespace :api do
  #   namespace :v1 do
  #   end
  # end

  # quiz questions routes
  resources :quiz_questions, only: [:index]

  # submarine cable routes
  resources :submarine_cables, only: [:index]

  # intro story routes
  resources :story_cards, only: [:index]

  # client side routes
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end