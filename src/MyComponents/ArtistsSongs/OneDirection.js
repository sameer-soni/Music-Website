import React, { useState, useEffect } from 'react';

export default function OneDirection(props) {
  const songlist = [
    { id: 1, name: 'One Direction - Best Song Ever', src:'od1.mp3' },
    { id: 2, name: "One Direction - Live While We're Young", src: 'od2.mp3' },
    { id: 3, name: 'One Direction - Perfect', src: 'od3.mp3' },
    { id: 4, name: 'One Direction - Story of My Life', src: 'od4.mp3' },
    { id: 5, name: 'One Direction - What Makes You Beautiful', src: 'od5.mp3' },
    { id: 6, name: 'One Direction - You & I', src: 'od6.mp3' },
    { id: 8, name: 'One_Direction_-_Night_Changes', src: 'od7.mp3' },
    { id: 7, name: 'One_Direction_-_Steal_My_Girl', src: 'od8.mp3' }
  ];
  return (
    <>
      <div id='song-holder'>
        <div>Some of the 1D's best Songs:</div>
        {songlist.map((song) => (
          <div key={song.id} className={`song-container ${props.currentsongID === song.id ? 'activee':''}`} onClick={() => props.handleSongClick(song)}>{song.id}.<span>{song.name}</span>
          </div>
        ))}
      </div>
    </>
  );
}