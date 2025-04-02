import React from "react";
import styles from "./components.module.css";

function ActionButtons() {
  return (
    <section className={styles.actionButtons}>
      <button className={`${styles.button} ${styles.artistsButton}`}>
        Get Top Artists
      </button>
      <button className={`${styles.button} ${styles.albumsButton}`}>
        Get Top Albums
      </button>
    </section>
  );
}

export default ActionButtons;
