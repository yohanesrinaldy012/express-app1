const express = require('express');

function createServer() {
  const app = express();
  app.use(express.json());

  app.get('/health', (req, res) => {
    res.json({ status: 'ok', service: 'app1' });
  });

  app.get('/', (req, res) => {
    res.json({ message: 'Hello from App1', version: '0.1.0' });
  });

  app.post('/echo', (req, res) => {
    res.json({ received: req.body || {} });
  });

  return app;
}

if (require.main === module) {
  const port = process.env.PORT || 3000;
  createServer().listen(port, () => {
    console.log(`app1 listening on ${port}`);
  });
}

module.exports = { createServer };
