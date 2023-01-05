import React, { useState, useEffect } from "react";
import intro from "../../assets/a_bit_of_life_intro_mixdown.mp3"
    
    const useAudio = () => {
      const [audio] = useState(new Audio(intro));
      const [playing, setPlaying] = useState(false);
    
      const toggle = () => setPlaying(!playing);
    
      useEffect(() => {
          playing ? audio.play() : audio.pause();
        },
        [playing]
      );
    
      useEffect(() => {
        audio.addEventListener('ended', () => setPlaying(false));
        return () => {
          audio.removeEventListener('ended', () => setPlaying(false));
        };
      }, []);
    
      return [playing, toggle];
    };
    
    const IntroMusicPlayer = ({ intro }) => {
      const [playing, toggle] = useAudio(intro);

      const playIcon = require("../../assets/volumeOn.jpg")
      const muteIcon = require("../../assets/mute.jpg")
    
      return (
        <div>
          <img onClick={toggle} src={playing ? playIcon : muteIcon} alt="volumeIcon" />
        </div>
      );
    };
    
    export default IntroMusicPlayer;