import React from 'react'
import { useState } from 'react';

export const PlaySong = (index) => {
    const [aud] = useState(new Audio(require(`./songs/2.mp3`)));
    const playaudio=()=>{
        aud.play();

    }
    return (
    //   console.log('index is: ', index)
    playaudio()
    
  )
}
