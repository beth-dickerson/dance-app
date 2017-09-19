class VenuesController < ApplicationController
  def index
    @user = current_user
    @venues = Venue.all
  end

  def show
    @venue = Venue.find(params[:id])

    @user = user_signed_in?
    @user_id = 0
    if user_signed_in?
      @user_id = current_user.id
  end

  def new
    @user = current_user
    @venue = Venue.new
  end

  def create
    @user = current_user
    @venue = Venue.create(venue_params)
    @venue.user = @user

    if @venue.save
      redirect_to @venue, notice: "Venue added successfully"
    else
      flash[:alert] = @venue.errors.full_messages.join(', ')
      render :new
    end
  end

  def edit
    @venue = Venue.find(params[:id])
  end

  def update
    @vnue = Venue.find(params[:id])

    if @venue.update(venue_params)
      redirect_to root_path, notice: "Venue updated successfully"
    else
      flash[:alert] = @venue.errors.full_messages.join(', ')
      render :edit
    end
  end

  def destroy
    @venue = Venue.find(params[:id])
    @venue.destroy
    redirect_to root_path
  end

  private

  def venue_params
    params.require(:venue).permit(:name, :description, :email, :neighborhood, :phone, :url, :photo)
  end
end
