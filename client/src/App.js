import React, { useEffect, useState } from 'react';
import styles from "./SpotifyApp.module.css";
import TeamHeader from "./TeamHeader";
import HeroSection from "./HeroSection";
import ActionButtons from "./ActionButtons";
import ArtistsSection from "./ArtistsSection";
import AlbumsSection from "./AlbumsSection";
import { ArtistProvider } from './context/ArtistContext';


function App() {

  return (
    <ArtistProvider>
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
    </ArtistProvider>
  );
}

export default App;
