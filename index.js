const express = require('express');
// import module to parse JSON data
const bodyParser = require('body-parser');

const app = express();

// Middleware to parse JSON
app.use(bodyParser.json());

// Import router
const router = require('./route/bookRoute');

// Use router
app.use('/books', router);

// Start server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});