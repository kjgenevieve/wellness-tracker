class UsersController < ApplicationController
    def index
        @users = User.all
        render :json => @users
    end

    def show
        @user = User.find(params[:id])
        render :json => @user
    end

    def new
        @user = User.new
    end

    def create
        @user = User.new
        @user.name = (params[:name])
        @user.save
        render :json => @user
    end

    def destroy
        @user = User.find(params[:id])
        @user.destroy
    end
end