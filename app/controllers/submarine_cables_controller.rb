class SubmarineCablesController < ApplicationController

    def index
        submarine_cables = SubmarineCable.all
        render json: submarine_cables, status: :ok
    end

end
