Rails.application.routes.draw do
  devise_for :users
  get 'messages' => 'messages#index'
  resources :users, onry: [:edit, :update]
end
