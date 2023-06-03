import React, { useState, useEffect } from 'react';

export default function Song1(props) {
  const songlist = [
    { id: 1, name: 'Anee-Marie - Birthday', src: '1.mp3' },
    { id: 2, name: 'DJ_Snake_ft.__Justin_Bieber_-__Let_Me_Love_You', src: '2.mp3' },
    { id: 3, name: 'Faded', src: '3.mp3' },
    { id: 4, name: 'Justin Bieber - Despacito 🎤 ft. Luis Fonsi & Daddy Yankee', src: '3.mp3' },
    { id: 5, name: 'Maroon 5 - Memories (Lyrics)', src: '3.mp3' },
    { id: 6, name: 'Marshmello ft. Bastille - Happier (Official Music Video)', src: '3.mp3' },
    // Add more songs here...
  ];

//   const [currentSong, setCurrentSong] = useState(null);

//   const handleSongClick = (song) => {
//     if (props.currentSong && props.currentSong.id === song.id) {
//       // If the clicked song is already playing, pause it
//       props.currentSong.audio.pause();
//       props.setCurrentSong(null);
//       return;
//     }
  
//     if (props.currentSong) {
//       // Pause the current song
//       props.currentSong.audio.pause();
//     }
  
//     // Play the clicked song
//     const audio = new Audio(require(`./songs/${song.src}`));
//     audio.play();
//     props.setCurrentSong({ id: song.id, audio });
//   };

  return (
    <>
      <div id='song-holder'>
        <div>This Week: Most Trending Music</div>
        {songlist.map((song) => (
          <div key={song.id} className='song-container' onClick={() => props.handleSongClick(song)}>{song.id}.<span>{song.name}</span>
          </div>
        ))}
      </div>
    </>
  );
}