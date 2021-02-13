const Discord = require('discord.js');
require('dotenv').config();
const client = new Discord.Client();

const token = process.env.DISCORD_TOKEN;
const messages = require('./model/bot_messages');

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if (msg.author.bot) {
        console.error('No response');
        return false;
    }

    else if (msg.content.includes("@here") || msg.content.includes("@everyone")) {
        console.error('No response');
        return false;
    }

    else if (msg.mentions.has(client.user.id)) {
        const maxSize = messages.length;
        const index = Math.random() * maxSize;
        msg.reply(messages[Math.floor(index)]);
    }
});

if (token == null) {
    console.error('¡Token inválido!');
}
else {
    client.login(token);
}