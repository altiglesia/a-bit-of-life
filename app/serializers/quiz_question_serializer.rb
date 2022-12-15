class QuizQuestionSerializer < ActiveModel::Serializer
    attributes :id, :question, :options
end
