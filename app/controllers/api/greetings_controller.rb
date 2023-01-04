class Api::GreetingsController < ApplicationController
  def index
    @message = Greeting.where(id: rand(1..5))
    render json: @message
  end
end
