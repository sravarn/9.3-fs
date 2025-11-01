// Simple Express backend with a health endpoint and a sample API
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get('/health', (req, res) => res.status(200).json({ ok: true, ts: Date.now() }));

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from backend!', env: process.env.NODE_ENV || 'dev' });
});

// example POST
app.post('/api/echo', (req, res) => {
  res.json({ you_sent: req.body });
});

app.listen(PORT, () => {
  console.log(`Backend listening on port ${PORT}`);
});
