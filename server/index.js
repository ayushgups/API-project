const express = require('express');
const cors = require('cors');
const YOUR_ACCESS_TOKEN = 'BQCWVRy-Cr5J-vPId5fJF5SoUS8pI-nLweUrhchRHG31jl3QqMbx8kuzfwRIr4icg2LCS6GP7jgDE_fwpVM-U0jFryJPo7ZjvW6MVngF3Swc8wfbHKfDLE9KEvuWZQDL_hypsLrqlmtwPUE1gO59dDjRa0wKxnW4yHYLkX0q4jo7IQYjuRK8myEoF31jQC1rbSj-GtIz-h-LYIQECLsceGsOQTS928ulK5-e4_lLHCXHTkyBOQQ5_V8aaDfdCMvit-kFKHNjVHkhHHPbhtA0P5UZ6mDc71u2JaeweMb_2AMcYj1HDnYOO2JFlMqus57V4IL6JrZaLtr-Pso0ITEeWxvr2tsRuzPtP-CwOcH6BHr2xu-h9OU';

const app = express();
const PORT = 5050;

app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());

app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello from the Express Backend!' });
});

app.get('/api/top-artists', async (req, res) => {
  try {
    const response = await fetch('https://api.spotify.com/v1/me/top/artists?limit=4', {
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
