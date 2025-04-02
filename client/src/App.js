import React, { useEffect, useState } from 'react';
import styles from "./SpotifyApp.module.css";
import TeamHeader from "./TeamHeader";
import HeroSection from "./HeroSection";
import ActionButtons from "./ActionButtons";
import ArtistsSection from "./ArtistsSection";
import AlbumsSection from "./AlbumsSection";
import { ArtistProvider } from './context/ArtistContext';
import { SongProvider } from './context/SongContext';



function App() {

  return (
    <ArtistProvider>
    <SongProvider>
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
    </SongProvider>
    </ArtistProvider>
    
  );
}

export default App;
