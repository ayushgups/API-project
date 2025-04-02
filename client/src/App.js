import React, { useEffect, useState } from 'react';
import styles from "./SpotifyApp.module.css";
import TeamHeader from "./TeamHeader";
import HeroSection from "./HeroSection";
import ActionButtons from "./ActionButtons";
import ArtistsSection from "./ArtistsSection";
import AlbumsSection from "./AlbumsSection";

function App() {
  const [backendData, setBackendData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5050/api/message')
      .then(res => res.json())
      .then(data => setBackendData(data.message))
      .catch(err => console.error('Error fetching backend:', err));
  }, []);

  return (
    <main className={styles.appContainer}>
      <section className={styles.thumbnail}>
        <div className={styles.contentWrapper}>
          <div className={styles.leftColumn}>
            <TeamHeader />
            <HeroSection />
            <ActionButtons />
          </div>
          <div className={styles.rightColumn}>
            <div className={styles.contentSection}>
              <div className={styles.sectionWrapper}>
                <ArtistsSection />
                <AlbumsSection />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
