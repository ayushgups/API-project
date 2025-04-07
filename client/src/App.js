import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { TokenProvider } from './context/TokenContext';
import Home from './pages/Home';
import SpotifyCallback from './pages/Redirect';



function App() {
  return (
    <TokenProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/callback" element={<SpotifyCallback />} />
        </Routes>
      </Router>
    </TokenProvider>
  );
}

export default App;
