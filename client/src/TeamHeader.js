import React from "react";
import styles from "./components.module.css";
import { useToken } from "./context/TokenContext";

function TeamHeader() {
  const { setHardcodedToken } = useToken();

  const CLIENT_ID = 'ea068713fefd46abbf6e157c4959ef4a';
  const REDIRECT_URI = 'http://localhost:3000/callback';
  const SCOPE = 'user-top-read';
  const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize';
  const RESPONSE_TYPE = 'code';

  const loginUrl = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${encodeURIComponent(
    REDIRECT_URI
  )}&scope=${encodeURIComponent(SCOPE)}&response_type=${RESPONSE_TYPE}&show_dialog=true`;

  const handleAyushClick = () => {
    setHardcodedToken();
  };

  return (
    <header className={styles.teamHeader}>
      <nav className={styles.teamNav}>
        <ul className={styles.teamList}>
          <li onClick={handleAyushClick} style={{ cursor: 'pointer' }}>Ayush's Top Artists</li>
          <li><a href={loginUrl}>Login with Spotify</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default TeamHeader;
