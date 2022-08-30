import React, { useEffect, useState } from "react";
import classes from "./MusicPopup.module.css";
import volumeOn from "../../assets/images/volumeon.png";
import volumeOff from "../../assets/images/volumeoff.png";
import bgMusic from "../../assets/audio/music.mp3";

const MusicPopup = ({ turnMusic, setTurnMusic }) => {
  const [music, setMusic] = useState(null);

  useEffect(() => {
    if (turnMusic) {
      const audioEl = new Audio(bgMusic);
      setMusic(audioEl);

      audioEl.volume = 0.2;
      audioEl.play();
    }

    if(!music)
      return;

    if (!turnMusic) {
      music.pause();
      music.currentTime = 0;
    }
  }, [turnMusic]);

  return (
    <div className={classes.wrapper} onClick={() => setTurnMusic(!turnMusic)}>
      Музыка
      {turnMusic ? (
        <img src={volumeOn} alt="" />
      ) : (
        <img src={volumeOff} alt="" />
      )}
    </div>
  );
};

export default MusicPopup;
