const express = require('express');
const cors = require('cors');
const YOUR_ACCESS_TOKEN = 'BQBZI5d-AK-U-XCf4iGA4YmMgP5L0JBMGJqt73X47QuO9kj7zX3NQ7gD0xOwa-WJxhwGGEPfipaPtC3IHD8X6udWy88eEy-iVXr85NsdzFal2uGZPrMr2mE8UZqVdMDR8tf7beRyerMhMlneCGa3mv8wXg8r_wZFczPonVNi2a4HXM0WkRv08If2Ts9x9IpWjiKi9r-tAMSMf1WDkpa4HIGutNEyyY8tP2ZBGOZrE6NXL4_2EFe6v1FNLOqKvVdB-WBM7tMeVQw3P3Ell_j7ucvwNkGs_Aof1S298_oQTdCYSFjZOzek5LC7gYOf1of1bTHI3JvdE0__chrAgH_xg2sPLYbyYfxvtJkPyostAW-3LPniHVE';

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
