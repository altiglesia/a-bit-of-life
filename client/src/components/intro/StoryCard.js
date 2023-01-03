import React from "react";

function StoryCard({ storyCard, showNextStoryCard }) {
    const { content, id } = storyCard;

    function handleClick() {
        showNextStoryCard()
    }

    const bit = require('../../assets/bit intro.jpg')
    const globe = require('../../assets/globe.gif')
    const corporations = require('../../assets/corporations.jpg')

    let storyImage;
        if (storyCard.id === 1) {
            storyImage = <img src={corporations} alt="corporations"/>;
        } else if (storyCard.id === 2) {
            storyImage = <img src={bit} alt="bit character"/>;
        } else if (storyCard.id === 3) {
            storyImage = <img src={globe} alt="globe"/>;
        }


    return (
        <div id="storyCardContainer" onClick={handleClick}>
            <h3>{content}</h3>
            {storyImage}
        </div>
    )
}

export default StoryCard;