Rails.application.routes.draw do
  devise_for :users
  get '/hello', to: 'application#hello_world'
  root to: "home#index"

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end