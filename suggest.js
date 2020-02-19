const Discord = require("discord.js");
const client = new Discord.Client()

client.on("ready", async function (ready) {
    client.user.setActivity(".search <id>", {type:"WATCHING"})
})
client.on("message", async function (message) {
    const prefix = "!";
    const args = message.content
        .slice(prefix.length)
        .trim()
        .split(/ +/g);
    const command = args.shift().toLowerCase();
    if(message.author.bot) return;
    if(!message.content.startsWith === prefix) return;
    if (command === "suggest") {
        const suggestion = message.content.split(' ').splice(1).join(' ');
        const channel = message.guild.channels.find(ch => ch.name === 'suggestions');
        if(!suggestion) return message.reply("You didn't specify a suggestion!")
        const suggestEmbed = new Discord.RichEmbed()
        .setColor("#7cfc00")
        .setTitle("Suggestion")
        .setDescription(suggestion)
        .setTimestamp()
        .setAuthor(`By: ${message.author.tag}`)
        if(!channel) return;
        channel.send(suggestEmbed).then(msg => {
            msg.react("👍")
            msg.react("👎")
            message.delete()
        })
    }
})

client.login("token")
