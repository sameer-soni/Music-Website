import React from 'react'
import { useEffect } from 'react'


export default function UseeffectTesting() {
    useEffect(() => {
      
    }, [])
    
    let ad = document.getElementById('play-pause-button');
let aud = new Audio(require('./songs/faded.mp3'))
console.log('hey')
// let b = document.getElementById('play-pause-button');
let myProgressBar = document.getElementById('slider');
     console.log('clicked')
        if(aud.currentTime <=0 || aud.paused){
            aud.play();
            let b = document.getElementById('play-pause-button');
            b.classList.add('pause');
            b.classList.remove('play');
           console.log(b)
        }else{
            aud.pause();
            let b = document.getElementById('play-pause-button');
            b.classList.add('play');
            b.classList.remove('pause');
        }
    
    
  
}
