import React, { useContext, useEffect, useState } from 'react';
import styles from "./components.module.css";
import { ArtistContext } from './context/ArtistContext';
import { SongContext } from './context/SongContext';


function AlbumsSection() {
  const [songs, setSongs] = useState([]);
  const { showSongs } = useContext(SongContext);

  useEffect(() => {
    fetch('http://localhost:5050/api/top-songs')
      .then(res => res.json())
      .then(data => setSongs(data))
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
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/fbb30880946ec0949dc77228d694c7f29c48b44b?placeholderIfAbsent=true&apiKey=a28e4256a4044605ba5f20bd189a07b1"
          alt="Albums visualization"
          className={styles.albumsImage}
        />
      </div>
    </section>
  );
}

export default AlbumsSection;
