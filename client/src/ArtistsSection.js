import React, { useContext, useEffect, useState } from 'react';
import styles from "./components.module.css";
import { ArtistContext } from './context/ArtistContext';

function ArtistsSection() {
  const [artists, setArtists] = useState([]);
  const { showArtists } = useContext(ArtistContext);

  useEffect(() => {
    fetch('http://localhost:5050/api/top-artists')
      .then(res => res.json())
      .then(data => setArtists(data))
      .catch(err => console.error('Error fetching top artists:', err));
  }, []);

  return (
    <section className={styles.artistsSection}>
      <div className={styles.artistsContent}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/e7cf3cb3a9c709d7b1f905d26407543a66c569d3?placeholderIfAbsent=true&apiKey=a28e4256a4044605ba5f20bd189a07b1"
          alt="Artists visualization"
          className={styles.artistsImage}
        />

        <div className={styles.artistsInfo}>
          <h2 className={styles.sectionTitle}>Artists</h2>
          <ul className={styles.artistsList}>
            {[0, 1, 2, 3].map(index => (
              <li key={index}>
                {showArtists && artists[index] ? artists[index].name : ''}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default ArtistsSection;
