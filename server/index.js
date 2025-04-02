const express = require('express');
const cors = require('cors');
const YOUR_ACCESS_TOKEN = 'BQBo7z5TglaoWWn902BZwAskVYKzqGhE8TTWyCZ9CkMoh1yTKK0BNOPUMlvcfLneaq48-fQVHLPN9Zk5y6LLlMXzNOfqwnd7hQORhqPCav5tJbYyYjAR7LoFsk9cENrWiGYP9BShnagwEjFleP2TvuzHo7cYPNgIvK9wnnK3t5He1on7fXQEzvFGgH-O8OrkRPnmwE3MogMWPo8J0Y0cWgMS6c2Zuyo6c4wkMQpAm_dxWfzauOSV-0gUfMcceBMSmSKxXqs3h9zRFhXikw4kskPn6ADtGjv5srU-dvwlSu2SCRkQnEsOFIQftzAwMb8i31cgq6TrdTaruiGXKCUGssliTHuTfXZBAZ01nKsMBvUkQNi55ZQ';

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



app.listen(PORT, () => {
  console.log(`✅ Backend running on http://localhost:${PORT}`);
});
