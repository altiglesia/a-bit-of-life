class QuizQuestionsController < ApplicationController
skip_before_action :authorized

    def index
        quiz_questions = QuizQuestion.all
        render json: quiz_questions, status: :ok
    end

end
