const express = require('express');
const route = express.Router(); // Create a router instance

// GET route
route.get('/', (req, res) => {
  res.status(200).send('Hello, World! In GET');
});

// POST route
route.post('/', (req, res) => {
  res.status(201).send('Hello, World! In POST');
});

module.exports = route; // Export the router