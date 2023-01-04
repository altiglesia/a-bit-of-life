class UserSerializer < ActiveModel::Serializer
  attributes :username, :email, :quiz_results, :current_cable_path
end
