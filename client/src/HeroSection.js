import React from "react";
import styles from "./components.module.css";

function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.titleContainer}>
        <img
          src="https://download.logo.wine/logo/Spotify/Spotify-Logo.wine.png"
          alt="Spotify logo"
          className={styles.logo}
        />
        <h1 className={styles.appTitle}>
          Spotify <br /> App
        </h1>
        <p className={styles.byline}>By: Krish & Ayush & Tarun</p>
      </div>
      
    </section>
  );
}

export default HeroSection;
