// Yes, these comments are real, they are not from ChatGPT

// Configure enviroment
require('dotenv').config({ path: require('path').resolve(__dirname, '../.env') });

// Server hosting stuff
const express = require('express');
const path = require('path');
var cron = require('node-cron');

// More Server stuff
const app = express();
const port = process.env.PORT || 3000;
const url = process.env.URL || 'http://localhost:3000';
var lastHealthCheck = new Date();

// Discord stuff
const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildPresences, GatewayIntentBits.GuildMembers]
});
const connected = new Promise((resolve) => {
    client.once('ready', () => {
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
        console.log(`KyraBot successfully logged in as ${client.user.tag} on ${formattedDate}.`);
        resolve();
    });
})
client.login(process.env.DISCORD_TOKEN);

// Server config
app.use(express.static(path.join(__dirname, '../client/build/')));

// Server routing
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

// API routing
app.get('/api/status', async (req, res) => {
    try {
        await connected;
        const guild = await client.guilds.fetch(process.env["DISCORD_SERVER"]);
        const userId = process.env["DISCORD_TARGET"];
        const member = await guild.members.fetch(userId);
        const presence = member.presence;

        return res.json({
            success: true,
            activity: presence.activities
        })
    } catch (error) {
        console.log(error);
        return res.json({
            success: false,
            activity: []
        })
    }
})

// Wakey wakey, back to the battle
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
