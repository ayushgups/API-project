import React, { createContext, useContext, useState, useEffect } from 'react';

const TokenContext = createContext();

const HARDCODED_TOKEN = 'BQCbGqUauBk59VkWFElnrPci1_L8Np4UO9CAwBgADJBnZurgn8AfLiGJ0oGgzX6hDXLtu4UulCTYGTTV0r4c_9jK22EYo1Hgkp6tARJUrgwGG6TI0La0WQPQiWbG6eN6h8ocFYZkLjLaNgIOxm1iRqIiAkFFNXXHF_ldPf_n03Fzchb0ku6g2qoyZfLhMFUNQ3hjSNvFe3zzBjGb8vpiAROJtUzD8P8guEztM7xTmBDuBDXuqwC9iOKaKjBRw1V1-6lKU0B3mr4EsNR-mOnLUe1pWefMf9lYmxMYVdjOrDNnvvGzo09pnvSI-pNB9ATwTQ7_kNAWqRkGNOZTTPhsi-B6wISvNCpx292rCY0kXIyF3yWb8Gc';

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
