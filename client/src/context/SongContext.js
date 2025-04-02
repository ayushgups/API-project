import { createContext, useState } from 'react';

export const SongContext = createContext();

export function SongProvider({ children }) {
  const [showSongs, setShowSongs] = useState(false);

  return (
    <SongContext.Provider value={{ showSongs, setShowSongs }}>
      {children}
    </SongContext.Provider>
  );
}
