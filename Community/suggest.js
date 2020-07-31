const Discord = require("discord.js");
const client = new Discord.Client()

client.on("message", async function (message) {
    const prefix = "!";
    const args = message.content
        .slice(prefix.length)
        .trim()
        .split(/ +/g);
    const command = args.shift().toLowerCase();
    if(message.author.bot) return;
    if(!message.content.startsWith === prefix) return;
  try {
      if (command === "suggest") {
        const suggestion = message.content.split(' ').splice(1).join(' ');
        var channel = message.guild.channels.find(ch => ch.name === 'suggestions');
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
            setTimeout(() => {
              msg.react("👎")
            }, 2000)
            message.delete()
        })
    }
  } catch (error) {
    const Error = new Discord.RichEmbed()
    .setTitle("Error")
    .setDescription(Error)
    var channel = message.guild.channels.find(ch => ch.name === 'logs');
    channel.send(Error)
  }
})

client.login("token")
