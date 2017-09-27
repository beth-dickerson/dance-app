Rails.application.routes.draw do
  devise_for :users
  root 'static_pages#index'
  resources :venues, to: 'static_pages#index'
  resources :places, to: 'static_pages#index'
  resources :users, to: 'static_pages#index'

  namespace :api do
    namespace :v1 do
      resources :venues
    end
  end

  namespace :api do
    namespace :v1 do
      resources :places
    end
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
