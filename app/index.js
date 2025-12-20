const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;

// ✅ Updated connection (no old options)
mongoose.connect('mongodb://localhost:27017/testdb')
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('MongoDB connection error:', err));

app.get('/', (req, res) => {
  res.send('Hello from DevSecOps Project!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

