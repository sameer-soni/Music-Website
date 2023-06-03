import React, { useState } from 'react'
import './style.css'

import play from './Image/play-button.png'
import forward from './Image/fast-forward.png'
import backward from './Image/backward-arrows.png'
import speaker from './Image/speaker.png'
import pause from './Image/pause.png'
import { useEffect } from 'react'

export default function BottomContainer(props) {
    const [aud] = useState(new Audio(require('./songs/3.mp3')));
    let progressbar =document.getElementById('slider');
    
    const clicked = () =>{
        console.log('clicked');
        console.log(aud.currentTime);

        if( aud.paused||aud.currentTime <=0){
            aud.play();
            let b = document.getElementById('play-pause-button');
            b.classList.remove('play');
            b.classList.add('pause');
           console.log(b)
        }else{
            aud.pause();
            let b = document.getElementById('play-pause-button');
            b.classList.remove('pause');
            b.classList.add('play');
        }
    }

    // const[pbValue, setPbValue] = useState(0);
    useEffect(() => {
        const handle = () =>{
            let progress = parseInt((aud.currentTime/aud.duration)*100);
            console.log("useeffect TIme: ", progress)
            props.setPbValue(progress);
        }
        aud.addEventListener('timeupdate', handle);

    }, [])

    // const setTime=(e)=>{
    //     let value = e.target.value
    //     aud.currentTime = value * aud.duration /100; 
    // }
    


    return (
        <>
            <div id="control-buttons">
                <div className='control-buttons-img-holder'><img src={backward} alt="" /></div>
                <div className='control-buttons-img-holder play' id='play-pause-button' onClick={clicked}></div>
                <div className='control-buttons-img-holder'><img src={forward} alt="" /></div>
            </div>
            <div id="progress-bar">
                <input type="range" name="" id="slider" min={0} max={100} value={props.pbValue} onChange={props.setTime(aud)} />
                <img src={speaker} alt="" />
            </div>
            <div id='otherstuff'>

            </div>

        </>


    )
}

// import React, { useState, useEffect } from 'react';
// import './style.css';
// import play from './Image/play-button.png';
// import forward from './Image/fast-forward.png';
// import backward from './Image/backward-arrows.png';
// import speaker from './Image/speaker.png';
// import pause from './Image/pause.png';

// export default function BottomContainer() {
//   const [aud] = useState(new Audio(require('./songs/faded.mp3')));
//   const [pbValue, setPbValue] = useState(0);

//   useEffect(() => {
//     const handleTimeUpdate = () => {
//       let progress = parseInt((aud.currentTime / aud.duration) * 100);
//       setPbValue(progress);
//     };

//     aud.addEventListener('timeupdate', handleTimeUpdate);
//     return () => {
//       aud.removeEventListener('timeupdate', handleTimeUpdate);
//     };
//   }, [aud]);

//   const clicked = () => {
//     if (aud.paused || aud.currentTime <= 0) {
//       aud.play();
//     } else {
//       aud.pause();
//     }
//   };

//   return (
//     <>
//       <div id="control-buttons">
//         <div className='control-buttons-img-holder'><img src={backward} alt="" /></div>
//         <div className='control-buttons-img-holder play' id='play-pause-button' onClick={clicked}></div>
//         <div className='control-buttons-img-holder'><img src={forward} alt="" /></div>
//       </div>
//       <div id="progress-bar">
//         <input type="range" name="" id="slider" min={0} max={100} value={pbValue} onChange={() => {}} />
//         <img src={speaker} alt="" />
//       </div>
//       <div id='otherstuff'></div>
//     </>
//   );
// }
