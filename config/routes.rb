Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :users, only: [:create, :update]
      post '/login', to: 'auth#create'
      get '/profile', to: 'users#profile'
      patch '/profile', to: 'users#update'
    end
  end

  resources :quiz_questions, only: [:index]

  resources :submarine_cables, only: [:index]
end