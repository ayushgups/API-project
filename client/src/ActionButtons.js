import React, { useContext } from "react";
import styles from "./components.module.css";
import { ArtistContext } from './context/ArtistContext';

function ActionButtons() {
  const { showArtists, setShowArtists } = useContext(ArtistContext);

  const toggleShowArtists = () => {
    setShowArtists(prev => !prev); // ✅ flip true ↔ false
  };

  return (
    <section className={styles.actionButtons}>
      <button
        onClick={toggleShowArtists}
        className={`${styles.button} ${styles.artistsButton}`}
      >
        {showArtists ? 'Hide Top Artists' : 'Get Top Artists'}
      </button>

      <button className={`${styles.button} ${styles.albumsButton}`}>
        Get Top Albums
      </button>
    </section>
  );
}

export default ActionButtons;
