import { useState } from 'react';

export function useAudio(audioSrc) {
  const [audio] = useState(new Audio(audioSrc));

  const playAudio = () => {
    audio.play();
  };

  return {
    playAudio
  };
}
