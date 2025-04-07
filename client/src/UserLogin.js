import React from 'react';

const LoginWithSpotify = () => {
  const CLIENT_ID = 'ea068713fefd46abbf6e157c4959ef4a';
  const REDIRECT_URI = 'http://localhost:3000/callback';
  const SCOPE = 'user-top-read';
  const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize';
  const RESPONSE_TYPE = 'code';

  const loginUrl = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${encodeURIComponent(
    REDIRECT_URI
  )}&scope=${encodeURIComponent(SCOPE)}&response_type=${RESPONSE_TYPE}`;

  return (
    <div>
      <a href={loginUrl}>
        <button>Login with Spotify</button>
      </a>
    </div>
  );
};

export default LoginWithSpotify;