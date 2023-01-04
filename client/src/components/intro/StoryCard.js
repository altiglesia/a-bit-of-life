import React, { useState, useEffect } from "react";
// import Typewriter from "typewriter-effect";
import TypeWriterEffect from 'react-typewriter-effect';
import useKeyboard from "../../hooks/useKeyboard";

function StoryCard({ storyCard, showNextStoryCard }) {
    const { content, id } = storyCard;
    const [image, setImage] = useState(null)

    function handleClick() {
        showNextStoryCard()
        // setImage(storyImage)
    }

    useKeyboard((e) => {
        switch(e.keyCode) {
            case 13:
                handleClick()
                break;
            default: ;
        }
    })

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
        let timer;
        if (storyCard.id === 2) {
            timer = setTimeout(() => {
                setImage(storyImage)
            }, 20000);
        } else if (storyCard.id === 3) {
            timer = setTimeout(() => {
                setImage(storyImage)
            }, 18000);
        } else {
            timer = setTimeout(() => {
                setImage(storyImage)
            }, 10000);
        }
        return () => clearTimeout(timer);
    }, []);

    return (
        <div id="storyCardContainer" onClick={handleClick}>
            <div>
                <TypeWriterEffect
                    textStyle={{ fontSize: "1.5em" }}
                    startDelay={100}
                    cursorColor="transparent"
                    text={content}
                    typeSpeed={50}
                    eraseSpeed={100}
                />
            </div>
            <div style={{ margin: "10%" }}>
                {image}
            </div>
        </div>
    )
}

export default StoryCard;