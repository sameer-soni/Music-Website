import React, { useState, useEffect } from 'react';

export default function TaylorSwift(props) {
  const songlist = [
    { id: 1, name: 'Taylor Swift - 22', src:'ts1.mp3' },
    { id: 2, name: 'Taylor Swift - Blank Space', src: 'ts2.mp3' },
    { id: 3, name: 'Taylor Swift - Enchanted (Lyrics)', src: 'ts3.mp3' },
    { id: 4, name: 'Taylor Swift - Love Story ', src: 'ts4.mp3' },
    { id: 5, name: 'Taylor Swift - Style', src: 'ts5.mp3' },
    { id: 6, name: 'Taylor Swift - willow ', src: 'ts6.mp3' },
    { id: 7, name: 'Taylor Swift - You Belong With Me', src: 'ts7.mp3' }
  ];
  return (
    <>
      <div id='song-holder'>
        <div>Some of the Taylor Swift's best Songs:</div>
        {songlist.map((song) => (
          <div key={song.id} className={`song-container ${props.currentsongID === song.id ? 'activee':''}`} onClick={() => props.handleSongClick(song)}>{song.id}.<span>{song.name}</span>
          </div>
        ))}
      </div>
    </>
  );
}