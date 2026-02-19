// Import required modules
const express = require('express');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

// Create express app
const app = express();

// Load PORT from .env or default to 3000
const port = process.env.PORT || 3000;


// --------------------------------------
// Home Route
// --------------------------------------
app.get('/', (req, res) => {
    res.send('Environment Variables Demo!');
});


// --------------------------------------
// Config Route (Demo Only)
// --------------------------------------
app.get('/config', (req, res) => {
    const dbHost = process.env.DB_HOST;
    const dbUser = process.env.DB_USER;
    const apiKey = process.env.API_KEY;

    res.json({
        dbHost,
        dbUser,
        apiKey
    });
});


// --------------------------------------
// 404 Error Handler
// --------------------------------------
app.use((req, res) => {
    res.status(404).send('Not Found');
});


// --------------------------------------
// Start Server
// --------------------------------------
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
