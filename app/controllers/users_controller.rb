class UsersController < ApplicationController
   before_action :set_user, only: [:show, :update, :destroy]

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


  def create
    @user = User.new(user_params)

    respond_to do |format|
      if @user.save
        format.json { render json: @user }
      else
        format.json { render json: @user.errors, status: :unprocessable_entity }
      end
    end
  end



  # PATCH/PUT /notes/1.json
  def update
    respond_to do |format|
      if @user.update(user_params)
        format.json { render json: @user }
      else
        format.json { render json: @user.errors, status: :unprocessable_entity }
      end
    end
  end


  def destroy
    @user.destroy
    respond_to do |format|
      format.json { head :no_content }
    end
  end


    private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def user_params
      params.require(:user).permit(:name, :email, :password_digest)
    end
end

