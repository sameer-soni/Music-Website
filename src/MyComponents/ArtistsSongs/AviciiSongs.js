import React, { useState, useEffect } from 'react';

export default function AviciiSongs(props) {
  const songlist = [
    { id: 1, name: 'Avicii - Heaven (Tribute Song)', src:'av1.mp3' },
    { id: 2, name: 'Avicii - The Nights', src: 'av2.mp3' },
    { id: 3, name: 'Avicii - Waiting For Love', src: 'av3.mp3' },
    { id: 4, name: 'Avicii - Wake Me Up ', src: 'av4.mp3' },
    { id: 5, name: 'Avicii - Without You Audio ft. Sandro Cavazza', src: 'av5.mp3' }
    // Add more songs here...
  ];
  return (
    <>
      <div id='song-holder'>
        <div>Some of the Avicci's best Songs</div>
        {songlist.map((song) => (
          <div key={song.id} className={`song-container ${props.currentsongID === song.id ? 'activee':''}`} onClick={() => props.handleSongClick(song)}>{song.id}.<span>{song.name}</span>
          </div>
        ))}
      </div>
    </>
  );
}