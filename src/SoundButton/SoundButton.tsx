import React, { useEffect, useRef } from 'react';
import './SoundButton.css';

type Props = {
  button: string
  name: string
  audio: string
  changeTitle: (name: string) => void
}

const SoundButton: React.FC<Props> = (props) => {
  const audioRef = useRef<HTMLAudioElement>(null);

  const playSound = () => {
    audioRef.current!.volume = 0.25;
    audioRef.current!.play();
    props.changeTitle(props.name);
  }

  const onKeyUp = (e: KeyboardEvent) => {
    if (e.key.toUpperCase() === props.button) {
      playSound();
    }
  }

  useEffect(() => {
    document.addEventListener('keypress', onKeyUp);

    return () => {
      document.removeEventListener('keypress', onKeyUp);
    }
  });

  return <button className="drum-pad" onClick={playSound} id={props.button + '-btn'}>
    {props.button}
    <audio ref={audioRef} src={props.audio} className="clip" id={props.button}></audio>
  </button>
}

export default SoundButton;
