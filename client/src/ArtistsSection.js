import React from "react";
import styles from "./components.module.css";

function ArtistsSection() {
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
            <li>Drake</li>
            <li>Playboi Carti</li>
            <li>The Weekend</li>
            <li>Arjit Singh</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default ArtistsSection;
