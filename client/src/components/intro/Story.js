import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import StoryCard from "./StoryCard";
import IntroMusicPlayer from "./IntroMusicPlayer";

function Story() {
    const [storyCards, setStoryCards] = useState([]);
    const [storyCardIndex, setStoryCardIndex] = useState(0);
    const [takeQuizButton, setTakeQuizButton] = useState(false);

    const navigate = useNavigate();
    const navigateToQuiz = () => {
        navigate("/quiz");
    }

    useEffect(() => {
        fetch('/story_cards')
        .then((res) => {
            if (res.ok) {
                res.json().then((data) => setStoryCards(data))
            } else {
                return res.text().then((text) => Promise.reject(text))
            }
        })
    }, [])

    function showNextStoryCard() {
        if (storyCardIndex < 4) {
            setStoryCardIndex(i => i + 1)
        } else {
            setTakeQuizButton(true)
        }
    }

    const storyline = storyCards.map((storyCard) => (
        <StoryCard 
            key={storyCard.id}
            storyCard={storyCard}
            showNextStoryCard={showNextStoryCard}
        />
    ))

    return (
        <div id="storyPage">
            <div id="volumeIcon">
                <IntroMusicPlayer />
            </div>
            <div id="goToQuizButtonContainer">
                {
                    takeQuizButton ? 
                    <button onClick={navigateToQuiz}>
                    Find Out If You're a 0 or 1
                    </button> : null 
                }
            </div>
            <div id="storyCardBox">
                {storyline[storyCardIndex]}
            </div>
        </div>
    )
}

export default Story