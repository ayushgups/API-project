import React from "react";
import styles from "./components.module.css";

function TeamHeader() {
  return (
    <header className={styles.teamHeader}>
      <nav className={styles.teamNav}>
        <ul className={styles.teamList}>
          <li>Ayush</li>
          <li>Krish</li>
          <li>Tarun</li>
        </ul>
      </nav>
    </header>
  );
}

export default TeamHeader;