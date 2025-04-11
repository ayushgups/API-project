const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const CLIENT_ID = 'ea068713fefd46abbf6e157c4959ef4a';
const CLIENT_SECRET = '3fbb332e28614905824ce1a26e0fba99';
const REDIRECT_URI = 'http://localhost:3000/callback';

const app = express();
const PORT = 5050;

mongoose.connect('mongodb://127.0.0.1:27017/spotifyDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

console.log("Connected to Mongo Server");

const TokenDataSchema = new mongoose.Schema({
  token: String,
  topArtists: Array,
  topSongs: Array
});

const TokenData = mongoose.model('TokenData', TokenDataSchema);

app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());

/*
app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello from the Express Backend!' });
});

app.get('/api/top-artists', async (req, res) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({ error: 'No token provided' });
    }

    const response = await fetch('https://api.spotify.com/v1/me/top/artists?limit=20', {
      headers: {
        Authorization: authHeader
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
*/

app.get('/api/top-artists', async (req, res) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: 'No token provided' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const existing = await TokenData.findOne({ token });
    if (existing && existing.topArtists?.length) {
      console.log("Retrieving Artists from Database");
      return res.json(existing.topArtists);
    }

    const response = await fetch('https://api.spotify.com/v1/me/top/artists?limit=20', {
      headers: { Authorization: authHeader }
    });
    const data = await response.json();

    const topArtists = data.items.map(artist => ({
      name: artist.name,
      image: artist.images[0]?.url,
      url: artist.external_urls.spotify
    }));

    await TokenData.updateOne(
      { token },
      { $set: { topArtists } },
      { upsert: true }
    );
    console.log("Database Updated");

    res.json(topArtists);
  } catch (err) {
    console.error('❌ Error fetching top artists:', err);
    res.status(500).json({ error: 'Failed to fetch top artists' });
  }
});


app.get('/api/top-songs', async (req, res) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: 'No token provided' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const existing = await TokenData.findOne({ token });
    if (existing && existing.topSongs?.length) {
      console.log("Retrieving Songs from Database");
      return res.json(existing.topSongs);
    }

    const response = await fetch('https://api.spotify.com/v1/me/top/tracks?limit=4', {
      headers: { Authorization: authHeader }
    });

    const data = await response.json();

    const topSongs = data.items.map(song => ({
      name: song.name,
      image: song.album.images[0]?.url,
      url: song.external_urls.spotify
    }));

    await TokenData.updateOne(
      { token },
      { $set: { topSongs } },
      { upsert: true }
    );
    console.log("Database Updated");

    res.json(topSongs);
  } catch (err) {
    console.error('❌ Error fetching top songs:', err);
    res.status(500).json({ error: 'Failed to fetch top songs' });
  }
});

/*
app.get('/api/top-songs', async (req, res) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      console.log("buthole popsicle")
      return res.status(401).json({ error: 'No token provided' });
    }

    const response = await fetch('https://api.spotify.com/v1/me/top/tracks?limit=4', {
      headers: {
        Authorization: authHeader
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
*/
app.post('/api/get-token', async (req, res) => {
  const code = req.body.code;

  const tokenResponse = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization:
        'Basic ' + Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64')
    },
    body: new URLSearchParams({
      grant_type: 'authorization_code',
      code,
      redirect_uri: REDIRECT_URI
    })
  });

  const tokenData = await tokenResponse.json();
  res.json(tokenData);
});

app.listen(PORT, () => {
  console.log(`✅ Backend running on http://localhost:${PORT}`);
});
