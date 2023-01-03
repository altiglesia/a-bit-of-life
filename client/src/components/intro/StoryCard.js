import React from "react";

function StoryCard({ storyCard, showNextStoryCard }) {
    const { content, id } = storyCard;

    function handleClick() {
        showNextStoryCard()
    }

    // const storyImages = () => {

    // }

    return (
        <div id="storyCardContainer" onClick={handleClick}>
            <h3>{content}</h3>
            <image></image>
        </div>
    )
}

export default StoryCard;