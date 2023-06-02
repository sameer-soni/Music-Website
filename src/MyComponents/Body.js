import React from 'react'
import './style.css'
import playlist from './Image/playlist.png'
import artist from './Image/artist.png'
import album from './Image/album.png'
import song from './Image/song.png'

import ts from './Image/artists/taylor_swift.png'
import ed from './Image/artists/ed_sheeran.png'
import hs from './Image/artists/harry_styles.png'
import idk from './Image/artists/idk.jpg'

import play from './Image/play-button.png'
import forward from './Image/fast-forward.png'
import backward from './Image/backward-arrows.png'
import speaker from './Image/speaker.png'

export default function Body() {
    return (
        <>
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
                            <div className="song-container">song 1</div>
                            <div className="song-container">song 2</div>
                            <div className="song-container">song 3</div>
                            <div className="song-container">song 4</div>
                            <div className="song-container">song 5</div>
                        </div>
                        <div id="artist-holder">
                            <div>Listen This Weekend</div>
                            <div className="artist-container">artist1</div>
                            <div className="artist-container">artist1</div>
                            <div className="artist-container">artist1</div>
                            <div className="artist-container">artist1</div>
                            <div className="artist-container">artist1
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div id="bottom-container">
                <div id="control-buttons">
                    <div className='control-buttons-img-holder'><img src={backward} alt="" /></div>
                    <div className='control-buttons-img-holder'><img src={play} alt="" /></div>
                    <div className='control-buttons-img-holder'><img src={forward} alt="" /></div>
                </div>
                <div id="progress-bar">
                    <input type="range" name="" id="slider" min='0' max='100' />
                    <img src={speaker} alt="" />
                </div>
                <div id='otherstuff'>
                    
                </div>
            
            </div>

        </>
    )
}
