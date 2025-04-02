import React from "react";
import styles from "./components.module.css";

function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.titleContainer}>
        <h1 className={styles.appTitle}>
          Spotify <br /> App
        </h1>
        <p className={styles.byline}>By: Krish & Ayush & Tarun</p>
      </div>
      
    </section>
  );
}

export default HeroSection;
