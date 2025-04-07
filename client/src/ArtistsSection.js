import React, { useContext, useEffect, useState } from 'react';
import styles from "./components.module.css";
import { ArtistContext } from './context/ArtistContext';
import { useToken } from './context/TokenContext';
import axios from 'axios';

function ArtistsSection() {
  const [artists, setArtists] = useState([]);
  const { showArtists } = useContext(ArtistContext);
  const { token } = useToken();

  useEffect(() => {
    if (token) {
      axios.get('http://localhost:5050/api/top-artists', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(res => setArtists(res.data))
      .catch(err => console.error('Error fetching top artists:', err));
    }
  }, [token]);

  return (
    <section className={styles.artistsSection}>
      <div className={styles.artistsContent}>
        <img
          src="/ArtistsPic.svg"
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
