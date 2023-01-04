Rails.application.routes.draw do

  namespace :api, defaults: { format: 'json' } do
    get 'message', to: 'greetings#index'
  end

  root 'root#index'
  get 'api/index'
  get 'root/index'
end
