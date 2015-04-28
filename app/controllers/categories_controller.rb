class CategoriesController < ApplicationController
  before_action :set_category, only: [:show, :update, :destroy]

  def index
  	respond_to do |format|
  		format.html
    	format.json {render json: Category.all}
    end
  end

  def show
  	respond_to do |format|
  		format.html
  		format.json { render json: Category.find(params[:id]) }
  	end 
  end

  
  def create
  	@category = Category.new(category_params)

  	respond_to do |format|
  		if @category.save
  			format.json { render json: @category}
  		else
  			format.json { render json: @category.errors, status: :unprocessable_entry}
  		end
  	end
  end


  def update
    respond_to do |format|
      if @category.update(category_params)
        format.json { render json: @category }
      else
        format.json { render json: @category.errors, status: :unprocessable_entity }
      end
    end
  end


  def destroy
    @category.destroy
    respond_to do |format|
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_category
      @category = Category.find(params[:id])
    end


    # Never trust parameters from the scary internet, only allow the white list through.
    def category_params
      params.require(:category).permit(:category, :description)
    end



end
