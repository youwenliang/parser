// server.js
const express = require('express');
const Mercury = require('@postlight/mercury-parser'); // or './dist/mercury' if local build

const app = express();

app.get('/parser', async (req, res) => {
  const { url } = req.query;
  if (!url) return res.status(400).json({ error: 'Missing url' });

  try {
    const result = await Mercury.parse(url);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Running on ${PORT}`));
