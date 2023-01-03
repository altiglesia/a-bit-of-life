import React from "react";
import globe from "../../assets/globe.gif";

function StoryCard({ storyCard, showNextStoryCard }) {
    const { content, id } = storyCard;

    function handleClick() {
        showNextStoryCard()
    }

    // const storyImages = () => {

    // }

    const globe = require('../../assets/globe.gif')

    return (
        <div id="storyCardContainer" onClick={handleClick}>
            <h3>{content}</h3>
            <img src={globe}/>
        </div>
    )
}

export default StoryCard;