const express = require('express');
const client = require('prom-client');

const app = express();
const port = 3000;

// Create a Registry and collect default metrics
const register = new client.Registry();
client.collectDefaultMetrics({ register });

// Expose /metrics endpoint
app.get('/metrics', async (req, res) => {
  res.set('Content-Type', register.contentType);
  res.end(await register.metrics());
});

// Example homepage (optional)
app.get('/', (req, res) => {
  res.send('Hello from Node.js App!');
});

app.listen(3000, "0.0.0.0", () => console.log("Node app running"));
