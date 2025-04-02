import React, { useContext, useEffect, useState } from 'react';
import styles from "./components.module.css";
import { ArtistContext } from './context/ArtistContext';
import { SongContext } from './context/SongContext';
import axios from 'axios';


function AlbumsSection() {
  const [songs, setSongs] = useState([]);
  const { showSongs } = useContext(SongContext);

  useEffect(() => {
    axios.get('http://localhost:5050/api/top-songs')
      .then(res => setSongs(res.data))
      .catch(err => console.error('Error fetching top artists:', err));
  }, []);

  return (
    <section className={styles.albumsSection}>
      <div className={styles.albumsContent}>
        <div className={styles.albumsInfo}>
          <h2 className={styles.sectionTitle}>Songs</h2>
          <ul className={styles.genresList}>
              {[0, 1, 2, 3].map(index => (
                <li key={index}>
                  {showSongs && songs[index] ? songs[index].name : ''}
                </li>
              ))}
            </ul>
        </div>
        <img
          src="/SongsPicture.svg"
          alt="Albums visualization"
          className={styles.albumsImage}
        />
      </div>
    </section>
  );
}

export default AlbumsSection;
