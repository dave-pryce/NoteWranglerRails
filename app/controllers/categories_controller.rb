class CategoriesController < ApplicationController

#def index
 # 	  @categories = Category.all
  #	  respond_to do |format|
  #    format.html 
  #    format.json { render json: @categories }
  #  end
 # end

  def index
      @categories = Category.all
      render json: @categories
  end

  def show
    @category = Category.find(params[:id])
    render json: @category
    end


#def show
 #   @category = Category.find(params[:id])
 #   respond_to do |format|
 #     format.html 
 #     format.json { render json: @category }
 #   end
 # end

end
