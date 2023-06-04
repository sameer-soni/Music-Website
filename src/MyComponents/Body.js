import React from 'react'
import './style.css'

//songs
import Song1 from './Song1'
    //artist's songs
import AviciiSongs from './ArtistsSongs/AviciiSongs'
import TaylorSwift from './ArtistsSongs/TaylorSwift'
import OneDirection from './ArtistsSongs/OneDirection'

import playlist from './Image/playlist.png'
import artist from './Image/artist.png'
import album from './Image/album.png'
import song from './Image/song.png'

import ts from './Image/artists/taylor_swift.png'
import ed from './Image/artists/ed_sheeran.png'
import hs from './Image/artists/harry_styles.png'
import idk from './Image/artists/idk.jpg'

// album main right
import avicii from './Image/artists/face/avicii.png'
import OneD from './Image/artists/face/1D.png'
import swift from './Image/artists/face/swift.png'

import play from './Image/play-button.png'
import forward from './Image/fast-forward.png'
import backward from './Image/backward-arrows.png'
import speaker from './Image/speaker.png'
import pause from './Image/pause.png'

//diff files
import BottomContainer from './Bottom-Container'

import {
    BrowserRouter as Router,
    Switch,
    Routes,
    Route,
    Link
} from "react-router-dom";

import { useState, useEffect } from 'react'

export default function Body() {

    //----------------Bottom-container-Starts--------------------------------------------
    // const [aud] = useState(new Audio(require('./songs/3.mp3')));
    // let progressbar = document.getElementById('slider');

    const clicked = () => {
        console.log('clicked');
        // console.log(aud.currentTime);

        // if( aud.paused||aud.currentTime <=0){
        //     aud.play();
        //     let b = document.getElementById('play-pause-button');
        //     b.classList.remove('play');
        //     b.classList.add('pause');
        //    console.log(b)
        // }else{
        //     aud.pause();
        //     let b = document.getElementById('play-pause-button');
        //     b.classList.remove('pause');
        //     b.classList.add('play');
        // }
    }
    const [currentSong, setCurrentSong] = useState(null);
    const [pbValue, setPbValue] = useState(0);
    const [currentsongID, setcurrentsongID] = useState(null);

    useEffect(() => {
        if(currentSong){
            const audy = currentSong.audio;
            
            const handle = () => {
                let progress = parseInt((audy.currentTime / audy.duration) * 100);
                setPbValue(progress);
            }
            audy.addEventListener('timeupdate', handle);
        }
            

    }, [currentSong])

    const setTime = (e) => {
        let value = e.target.value
       currentSong.audio.currentTime = value *currentSong.audio.duration /100; 
    }


    const handleSongClick = (song) => {
        if (currentSong && currentSong.id === song.id) {
            // If the clicked song is already playing, pause it
            currentSong.audio.pause();
            setCurrentSong(null);
            setcurrentsongID(null);
            return;
        }

        if (currentSong) {
            // Pause the current song
            currentSong.audio.pause();
            setcurrentsongID(null);
        }

        // Play the clicked song
        const audio = new Audio(require(`./songs/${song.src}`));
        audio.play();
        setCurrentSong({ id: song.id, audio });
        setcurrentsongID(song.id);
        // console.log(song.id)
        
    };



    //--------------------------Song1_ENDS-----------------------------------------------------------------

    return (
        <>
            <Router>
                <div id="outer-container">
                    <div id="left-container">
                        <div id="library-box">
                            <div className='lib-heading'>LIBRARY</div>
                            <div className='lib-items'><img src={playlist} alt="" /><Link to="/">Playlists</Link></div>
                            <div className='lib-items'><img src={artist} alt="" /><Link to="/about">Artists</Link></div>
                            <div className='lib-items'><img src={album} alt="" />Albums</div>
                            <div className='lib-items'><img src={song} alt="" />Songs</div>
                        </div>
                        <div id="discorver-box">
                            <div className='lib-heading'>DISCOVER</div>
                            <div className='lib-items'><img src={playlist} alt="" />Playlists</div>
                            <div className='lib-items'><img src={artist} alt="" />Artists</div>
                            <div className='lib-items'><img src={album} alt="" />Albums</div>
                            <div className='lib-items'><img src={song} alt="" />Songs</div>
                        </div>
                        <div id="lower-box">
                            Made by Sameer
                        </div>
                    </div>
                    <div id="main-container">
                        <div id='main-container-1'>
                            <span>Artists</span>
                            <span><input type="text" id='SearchBar' placeholder='What do you want to listen to?' /></span>
                            <div>Most Popular</div>
                        </div>
                        <div id='main-container-2'>
                            <div className='main-container-2-imgHolder'><img src={idk} alt="" /></div>
                            <div className='main-container-2-imgHolder'><img src={hs} alt="" /></div>
                            <div className='main-container-2-imgHolder'><img src={ed} alt="" /></div>
                            <div className='main-container-2-imgHolder'><img src={ts} alt="" /></div>
                            <div className='main-container-2-imgHolder'><img src={ts} alt="" /></div>
                            <div className='main-container-2-imgHolder'><img src={ts} alt="" /></div>
                            <div className='main-container-2-imgHolder'><img src={ts} alt="" /></div>
                            {/* <span className='main-container-2-imgHolder'><img src={ts} alt="" /></span> */}
                        </div>
                        <div id='main-container-3'>
                            <Routes>
                                <Route exact path="/Artists/Avicii" element={<AviciiSongs handleSongClick={handleSongClick} currentsongID={currentsongID}/>}>
                                </Route >
                                <Route exact path="/Artists/OneDirection" element={<OneDirection handleSongClick={handleSongClick} currentsongID={currentsongID}/>}>
                                </Route >
                                <Route exact path="/Artists/TaylorSwift" element={<TaylorSwift handleSongClick={handleSongClick} currentsongID={currentsongID}/>}>
                                </Route>
                                <Route exact path="/" element={<Song1 handleSongClick={handleSongClick} />}>
                                </Route>
                            </Routes>
                            <div id="artist-holder">
                                <div>Listen This Weekend</div>
                                <Link to="/Artists/Avicii"><div className="artist-container avicii"><img src={avicii} alt="" /> <span id='avi-ci'>Avicii</span><div>If there is love in this life, we're unstopabble.</div></div></Link>
                                <Link to="/Artists/OneDirection"><div className="artist-container OneD"><img src={OneD} alt="" /> <span id='OD'>One-Direction</span><div>If there is love in this life, we're unstopabble.</div></div></Link>
                                <Link to="/Artists/TaylorSwift"><div className="artist-container Tswift"><img src={swift} alt="" /> <span id='ts'>Taylor Swift</span><div>If there is love in this life, we're unstopabble.</div></div></Link>
                            </div>
                        </div>
                    </div>

                </div>

                <div id="bottom-container">
                    <div id="control-buttons">
                        <div className='control-buttons-img-holder'><img src={backward} alt="" /></div>
                        <div className='control-buttons-img-holder play' id='play-pause-button' onClick={clicked}></div>
                        <div className='control-buttons-img-holder'><img src={forward} alt="" /></div>
                    </div>
                    <div id="progress-bar">
                        <input type="range" name="" id="slider" min={0} max={100} value={pbValue} onChange={setTime} />
                        <img src={speaker} alt="" />
                    </div>
                    <div id='otherstuff'>

                    </div>

                    {/* <BottomContainer pbValue={pbValue} setPbValue={setPbValue} setTime={setTime} /> */}
                </div>
            </Router >
        </>
    )
}
