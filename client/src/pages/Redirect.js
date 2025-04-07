import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useToken } from '../context/TokenContext';

const SpotifyCallback = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { setUserToken } = useToken();

  useEffect(() => {
    const code = new URLSearchParams(location.search).get('code');
    if (code) {
      fetch(`http://localhost:5050/api/get-token`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code })
      })
        .then(res => res.json())
        .then(data => {
          console.log("🔁 Token response:", data);
          setUserToken(data.access_token);
          navigate('/');
        })
        .catch(err => {
          console.error('Error fetching access token:', err);
        });
    }
  }, [location, navigate, setUserToken]);

  return <div>Logging in...</div>;
};

export default SpotifyCallback;
