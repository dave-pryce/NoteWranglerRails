class NotesController < ApplicationController
  before_action :set_note, only: [:show, :update, :destroy]

  def index
    respond_to do |format|
      format.html 
      format.json { render json: Note.all}
    end
  end

  def show
    respond_to do |format|
      format.html 
      format.json { render json: Note.find(params[:id])}
    end
  end

  # POST /notes.json
  def create
    @note = Note.new(note_params)

    respond_to do |format|
      if @note.save
        format.json { render json: @note }
      else
        format.json { render json: @note.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /notes/1.json
  def update
    respond_to do |format|
      if @note.update(note_params)
        format.json { render json: @note }
      else
        format.json { render json: @note.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /notes/1.json
  def destroy
    @note.destroy
    respond_to do |format|
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_note
      @note = Note.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def note_params
      params.require(:note).permit(:title, :content, :description, :category_id, :user_id)
    end
end
