import React, { useContext } from "react";
import styles from "./components.module.css";
import { ArtistContext } from './context/ArtistContext';
import { SongContext } from './context/SongContext';

function ActionButtons() {
  const { showArtists, setShowArtists } = useContext(ArtistContext);
  const { showSongs, setShowSongs } = useContext(SongContext);

  const toggleShowArtists = () => {
    setShowArtists(prev => !prev); // ✅ flip true ↔ false
  };

  const toggleShowSongs = () => {
    setShowSongs(prev => !prev); // ✅ flip true ↔ false
  };

  return (
    <section className={styles.actionButtons}>
      <button
        onClick={toggleShowArtists}
        className={`${styles.button} ${styles.artistsButton}`}
      >
        {showArtists ? 'Hide Top Artists' : 'Get Top Artists'}
      </button>

      <button 
        onClick={toggleShowSongs}
        className={`${styles.button} ${styles.albumsButton}`}>
        {showSongs ? 'Hide Top Songs' : 'Get Top Songs'}
      </button>
    </section>
  );
}

export default ActionButtons;
