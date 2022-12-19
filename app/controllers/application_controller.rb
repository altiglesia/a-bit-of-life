class ApplicationController < ActionController::API
# before_action :authorized
rescue_from ActiveRecord::RecordNotFound, with: :record_not_found

    # exp = Time.now.to_i + 24 * 3600
    # exp = (Time.now + 60).to_i
    # exp_payload = { data: 'data', exp: exp }

    def encode_token payload
        JWT.encode(payload, 'a_s3cr3t', "HS256")
    end

    def auth_header
        request.headers['Authorization']
    end

    def decoded_token
        if auth_header
            token = auth_header
            # token
            begin
                JWT.decode(token, 'a_s3cr3t', true, { algorithm: 'HS256' })
            rescue JWT::ExpiredSignature
                # Handle expired token, e.g. logout user or deny access
                nil
            end
        end
    end

    def current_user
        if decoded_token
          user_id = decoded_token[0]['user_id']
          @user = User.find_by(id: user_id)
        end
    end
    
    def logged_in?
        !!current_user
    end

    # def authorized
    #     render json: { message: 'Please log in' }, status: :unauthorized unless logged_in?
    # end
    
private

    def record_not_found error
        render json: {error: "#{error.model} not found"}, status: :not_found
    end

end
