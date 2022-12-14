class ApplicationController < ActionController::API
    # include ActionController::Cookies

    # def hello_world
    #     session[:count] = (session[:count] || 0) + 1
    #     render json: { count: session[:count] }
    # end

    before_action :configure_permitted_parameters, if: :devise_controller?

    protected

    def configure_permitted_parameters
        devise_parameter_sanitizer.permit(:sign_up)
    end
end
