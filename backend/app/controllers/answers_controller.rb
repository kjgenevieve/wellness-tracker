class AnswersController < ApplicationController
    def index
        @answers = Answer.all
        render :json => @answers
    end

    def show
        @answer = Answer.find(params[:id])
        render :json => @answer
    end

    def new
        @answer = Answer.new
    end

    def create
        @answer = Answer.new
        @answer.user_id = (params[:user_id])
        @answer.question_id = (params[:question_id])
        @answer.response = (params[:response])
        @answer.date = (params[:date])
        @answer.save
        render :json => @answer
    end

    def destroy
        @answer = Answer.find(params[:id])
        @answer.destroy
end