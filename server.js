// Yes, these comments are real, they are not from ChatGPT

// .env
import dotenv from 'dotenv';
dotenv.config();

// Determine mode
const dev = process.env.NODE_ENV !== 'production';
console.log(`Running in ${dev ? 'development. Happy coding!' : 'production. Good luck!'}`)

// Import next
import next from 'next';
const nextapp = next({ dev });
const handle = nextapp.getRequestHandler();

// Server hosting stuff
import express from 'express';
import cron from 'node-cron';

// Discord stuff
import { Client, GatewayIntentBits } from 'discord.js';

// More Server stuff
async function main() {
    await nextapp.prepare();
    const app = express();
    const port = process.env.PORT || 3000;
    const url = process.env.URL || 'http://localhost:3000';
    var lastHealthCheck = new Date();


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
    app.get('/api/health', async (req, res) => {
        const formattedDate = lastHealthCheck.toLocaleString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
            hour12: true
        });
        return res.json({
            success: true,
            lastCheck: formattedDate
        });
    })

    // Let nextjs handle routing
    app.get('*', (req, res) => {
        return handle(req, res);
    });

    // Wakey wakey, back to the battle
    cron.schedule('*/14 * * * *', async () => {
        await fetch(url);
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
}
main();