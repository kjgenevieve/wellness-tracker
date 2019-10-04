class AnswersController < ApplicationController
    def index
        @answers = Answer.all
        render :json => @answers
    end

    def show
        @answer = Answer.find(params[:id])
        render :json => @answer
    end

    def show_user
        @answers = Answer.all
        # @user = User.find(params[:id])
        render :json => answer.where("user_id": (params[:user_id]))
    end

    def new
        @answer = Answer.new
    end

    def create    
        params.each do |key, value|
            @answer = Answer.new
            @answer.user_id = value["user_id"].to_i
            @answer.question_id = value["question_id"].to_i
            @answer.response = value["response"]
            @answer.date = value["date"]
            @answer.save
            # render :json => @answer
        end
        render :json => params
    end

    def destroy
        @answer = Answer.find(params[:id])
        @answer.destroy
    end
end