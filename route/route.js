import express from "express";
import Slack from "slack-node";
import Discord from "discord.js"
import CircularJSON from "circular-json";
import axios from "axios";

// Define a route to send a Slack message

export const slackConnection = async (req, res) => {
    const apiToken = 'xoxb-6004940419424-6473607178966-eksTst0cB31xbwEoKPl1ryhz';
    const slack = new Slack(apiToken);

    try {
        const messageOptions = {
            text: 'Hello from Node.js to Slack!',
            channel: '@texting platform'
        };

        slack.api('chat.postMessage', messageOptions, (err, response) => {
            if (err) {
                console.error(err);
                res.status(500).json({ error: 'Failed to send message to Slack' });
            } else {
                console.log(response);
                res.json({ success: true, message: 'Message sent to Slack successfully' });
            }
        });

    }
    catch (error) {
        res.status(400).json(CircularJSON.stringify({ error: error.message }))
    }
}


//discord messages

export const discordMessages = async (req, res) => {
    const discordWebhookUrl = "https://discord.com/api/webhooks/1158748084487082014/rlDzOR4gGKzyD5QqHOk_EG6LnkUShr9xkZNVOeAhg5QlmRBD9rLdrzNFnNdC5-CX1DBM"
    const { content } = req.body;
    try {
        if (!content) {
            return res.status(400).json({ error: 'Content is required' });
        }

        try {
            await axios.post(discordWebhookUrl, { content });
            console.log('Message sent to Discord successfully');
            res.json({ success: true, message: 'Message sent to Discord successfully' });
        } catch (error) {
            console.error('Error sending message to Discord:', error.message);
            res.status(500).json({ error: 'Failed to send message to Discord' });
        }
    }
    catch (error) {
        res.status(400).json(CircularJSON.stringify({ error: error.message }))
    }
}