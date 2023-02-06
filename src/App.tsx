import React, { useState } from 'react';
import './App.css';
import SoundButton from './SoundButton/SoundButton';
import { drumSounds } from './drumSounds';

function App() {
  const sounds = drumSounds;

  const [state, setState] = useState({ title: 'Press any button' });

  const changeTitle = (title: string) => {
    setState({ title });
  }

  const soundButtons = sounds.map((sound) => {
    return <SoundButton button={sound.button}
                        name={sound.name}
                        audio={sound.audio}
                        changeTitle={changeTitle}
                        key={sound.button}/>
  });

  return <main id="drum-machine">
    <h1 id="display">{state.title}</h1>
    <div className="keysContainer">
      {soundButtons}
    </div>
  </main>;
}

export default App;
