class StoryCardsController < ApplicationController

    def index
        story_cards = StoryCard.order(:id).all
        render json: story_cards, status: :ok
    end

end
