const express = require('express');
const axios = require('axios');
const app = express();

// To read form data
app.use(express.urlencoded({ extended: true }));

// To use public folder
app.use(express.static('public'));

// Handle form request
app.post('/fetch', async (req, res) => {
    let url = req.body.url;

    // If user forgets http
    if (!url.startsWith('http')) {
        url = 'http://' + url;
    }

    try {
        const response = await axios.get(url);
        res.send(response.data);
    } catch (error) {
        res.send('<h2 style="color:red;text-align:center;">Invalid URL or Unable to Fetch</h2>');
    }
});

// Start server
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
