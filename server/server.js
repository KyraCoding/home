const express = require('express');
const path = require('path');
var cron = require('node-cron');

const app = express();
const port = process.env.PORT || 3000;
const url = process.env.URL || 'http://localhost:3000';
var lastHealthCheck = new Date();

app.use(express.static(path.join(__dirname, '../client/build/')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

cron.schedule('*/10 * * * *', () => {
    fetch(url);
    lastHealthCheck = new Date();
});


app.listen(port, () => {
    const now = new Date();
    const formattedDate = now.toLocaleString('en-US', { 
        month: 'long', 
        day: 'numeric', 
        year: 'numeric', 
        hour: 'numeric', 
        minute: 'numeric', 
        second: 'numeric', 
        hour12: true 
    });
    console.log(`Server started successfully on ${formattedDate}.`);
});