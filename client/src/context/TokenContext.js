import React, { createContext, useContext, useState, useEffect } from 'react';

const TokenContext = createContext();

const HARDCODED_TOKEN = 'BQAHMt57ogBTIus3Drqs_j5kF8oFtrR_mXgAL1iGYfG5XEJMYxl-zl4KTtgWqWlwszu1l-eO7REPNiVBpjceVL5uwiDwgSCr8P7GLGOJaSMTzNdli4XASq1QF0wF-MZXTAeJmss8yV4JW98iweGhBCRNRuPhQkV2SN45Um7C9h7rZCo3KnEXjNd9W9Yc5ZsByw8vRBfnMQ0uBL7XpaLmdvu68-bVQ27qcKfZ4kLpIwUW-sTuTWZBieHD0CEB4Yfw_xij1_QzhBwb8EJ7EdXPHYUec6zepiaOqh_L4teTE5FSgJWDW7mRuhbMjI64AqulwQhizSdO-5HauE3Zx9jTKK2qlSIt3asvUq1NSyk7NvlDdpicXsg';

export const TokenProvider = ({ children }) => {
  const [token, setToken] = useState(HARDCODED_TOKEN);

  useEffect(() => {
    const storedToken = localStorage.getItem('spotify_token');
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  const setUserToken = (newToken) => {
    localStorage.setItem('spotify_token', newToken);
    setToken(newToken);
  };

  const setHardcodedToken = () => {
    localStorage.removeItem('spotify_token');
    setToken(HARDCODED_TOKEN);
  };

  return (
    <TokenContext.Provider value={{ token, setUserToken, setHardcodedToken }}>
      {children}
    </TokenContext.Provider>
  );
};

export const useToken = () => useContext(TokenContext);
