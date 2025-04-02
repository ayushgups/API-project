import { createContext, useState } from 'react';

export const ArtistContext = createContext();

export function ArtistProvider({ children }) {
  const [showArtists, setShowArtists] = useState(false);

  return (
    <ArtistContext.Provider value={{ showArtists, setShowArtists }}>
      {children}
    </ArtistContext.Provider>
  );
}
