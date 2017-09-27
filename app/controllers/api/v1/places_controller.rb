module Api::V1
  class PlacesController < ApplicationController
    def index
      response = HTTParty.get('https://maps.googleapis.com/maps/api/place/textsearch/json?query=dance+clubs+in+Philadelphia&radius=12000&key=AIzaSyDRF3d8gehhZ-nvHjJLGMn_-4Szjqap3tI')
      render json: response
    end
  end
end
