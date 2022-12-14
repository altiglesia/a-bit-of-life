class UserSerializer < ActiveModel::Serializer
  attributes :username, :email, :quiz_results
end
