import React from "react";
import styles from "./components.module.css";

function AlbumsSection() {
  return (
    <section className={styles.albumsSection}>
      <div className={styles.albumsContent}>
        <div className={styles.albumsInfo}>
          <h2 className={styles.sectionTitle}>Albums</h2>
          <ul className={styles.genresList}>
            <li>Rap</li>
            <li>Pop</li>
            <li>Indian</li>
            <li>Country</li>
          </ul>
        </div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/fbb30880946ec0949dc77228d694c7f29c48b44b?placeholderIfAbsent=true&apiKey=a28e4256a4044605ba5f20bd189a07b1"
          alt="Albums visualization"
          className={styles.albumsImage}
        />
      </div>
    </section>
  );
}

export default AlbumsSection;
