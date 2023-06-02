import React from 'react'
import './style.css'
import Song1 from './Song1'

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
import note from './Image/artists/face/note.png'
import swift from './Image/artists/face/swift.png'

import play from './Image/play-button.png'
import forward from './Image/fast-forward.png'
import backward from './Image/backward-arrows.png'
import speaker from './Image/speaker.png'

//scripts
import playButton from './audio.js'

import {
    BrowserRouter as Router,
    Switch,
    Routes,
    Route,
    Link
} from "react-router-dom";

export default function Body() {
    return (
        <>
            <Router>
                <div id="outer-container">
                    <div id="left-container">
                        <div id="library-box">
                            <div className='lib-heading'>LIBRARY</div>
                            <div className='lib-items'><img src={playlist} alt="" /><a href="">Playlists</a></div>
                            <div className='lib-items'><img src={artist} alt="" />Artists</div>
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
                            <div id='song-holder'>
                                <div>This Week: Most Trending Music</div>
                                <Routes>
                                    <Route path="/about">
                                    </Route>
                                    <Route path="/" element={<Song1 />}>
                                    </Route>
                                </Routes>
                            </div>
                            <div id="artist-holder">
                                <div>Listen This Weekend</div>
                                <div className="artist-container avicii"><img src={avicii} alt="" /> <span>Avicii</span><div>If there is love in this life, we're unstopabble.</div></div>
                                <div className="artist-container"><img src={note} alt="" /> <span>Dream Note</span><div>If there is love in this life, we're unstopabble.</div></div>
                                <div className="artist-container"><img src={swift} alt="" /> <span>Taylor Swift</span><div>If there is love in this life, we're unstopabble.</div></div>
                                {/* <div className="artist-container">artist1</div>
                                <div className="artist-container">artist1</div> */}
                        </div>
                    </div>
                </div>

            </div>

            <div id="bottom-container">
                <div id="control-buttons">
                    <div className='control-buttons-img-holder'><img src={backward} alt="" /></div>
                    <div className='control-buttons-img-holder'><img src={play} alt="" onClick={playButton} /></div>
                    <div className='control-buttons-img-holder'><img src={forward} alt="" /></div>
                </div>
                <div id="progress-bar">
                    <input type="range" name="" id="slider" min='0' max='100' />
                    <img src={speaker} alt="" />
                </div>
                <div id='otherstuff'>

                </div>

            </div>
        </Router >
        </>
    )
}
