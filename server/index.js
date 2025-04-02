const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5050;

app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());

app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello from the Express Backend!' });
});

app.listen(PORT, () => {
  console.log(`✅ Backend running on http://localhost:${PORT}`);
});
