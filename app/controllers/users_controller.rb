class UsersController < ApplicationController

    def index
    	  respond_to do |format|
        format.html 
        format.json { render json: User.all }
      end
    end


   def show
      respond_to do |format|
        format.html 
        format.json { render json: User.find(params[:id]) }
      end
    end

end
