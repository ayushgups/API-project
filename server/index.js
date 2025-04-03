const express = require('express');
const cors = require('cors');
const YOUR_ACCESS_TOKEN = 'BQB9FmvPKdUBf_T_i-D9xENXxOy5R4uND-TK6mcsSqEiEwBqRS298S3rwtNOyZL1FD2CbajZF4ezyi2ncIPO4Sn9oT1GcW3ae6ppLUOgzRJHaofI7vnBrsW49chmiCSX1Ur7ltVBoqE8FAuMGLha4yMPPedRHusquKmJjqBe03XRZGTLPYLo025-SD1x4evzrxt310V2DiizLPaFe4uFA7cR59Btig6hD3LkcsQxWKyhEX8ioHycnaenlPiQSDi8kGQgO9xAWP0Jf_iNZm7kHW8zPaAyOa5_UCZNpUV9bk2_JFof3lJFGslMGBArkF9uLwQ2qHKhWwycjyTGokGm1ietD0EWb0DJCl85LfeVItArHLQ3J8Q';

const app = express();
const PORT = 5050;

app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());

app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello from the Express Backend!' });
});

app.get('/api/top-artists', async (req, res) => {
  try {
    const response = await fetch('https://api.spotify.com/v1/me/top/artists?limit=20', {
      headers: {
        Authorization: `Bearer ${YOUR_ACCESS_TOKEN}`
      }
});

    const data = await response.json();

    const topArtists = data.items.map(artist => ({
      name: artist.name,
      image: artist.images[0]?.url,
      url: artist.external_urls.spotify
    }));

    res.json(topArtists);
  } catch (err) {
    console.error('❌ Error fetching top artists:', err.message || err);
    res.status(500).json({ error: 'Failed to fetch top artists' });
  }
  
});

app.get('/api/top-songs', async (req, res) => {
  try {
    const response = await fetch('https://api.spotify.com/v1/me/top/tracks?limit=4', {
      headers: {
        Authorization: `Bearer ${YOUR_ACCESS_TOKEN}`
      }
});

    const data = await response.json();

    const topSongs = data.items.map(song => ({
      name: song.name,
      image: song.album.images[0]?.url, // highest quality album image
      url: song.external_urls.spotify
    }));

    res.json(topSongs);
  } catch (err) {
    console.error('❌ Error fetching top songs:', err.message || err);
    res.status(500).json({ error: 'Failed to fetch top songs' });
  }
  
});


app.listen(PORT, () => {
  console.log(`✅ Backend running on http://localhost:${PORT}`);
});
