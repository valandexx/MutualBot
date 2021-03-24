const Discord = require('discord.js')
const client = new Discord.Client()
const { token } = require('./config.json')
client.on('ready', async () => {
    console.log(`Logged into ${client.user.tag}`)
})
client.login(token)