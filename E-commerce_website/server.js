const express = require('express');
const app = express();
const port = 3000;

// Simulated product data
const products = [
  // Your product data here
];

app.use(express.static('public')); // Serve static files from 'public' directory

app.get('/api/products', (req, res) => {
  // Simulate fetching products from a database or API
  res.json({ products });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
