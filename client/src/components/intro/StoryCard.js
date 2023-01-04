import React, { useState, useEffect } from "react";
// import Typewriter from "typewriter-effect";
import TypeWriterEffect from 'react-typewriter-effect';

function StoryCard({ storyCard, showNextStoryCard }) {
    const { content, id } = storyCard;
    const [image, setImage] = useState(null)

    function handleClick() {
        showNextStoryCard()
        // setImage(storyImage)
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
    
    useEffect(() => {
        const timer = setTimeout(() => {
            setImage(storyImage)
        }, 32000);
        return () => clearTimeout(timer);
    }, []);
        

    return (
        <div id="storyCardContainer" onClick={handleClick}>
            <TypeWriterEffect
                textStyle={{ fontSize: "1.5em" }}
                startDelay={100}
                cursorColor="white"
                text={content}
                typeSpeed={100}
                eraseSpeed={100}
            />
            <div>
                {image}
            </div>
        </div>
    )
}

export default StoryCard;