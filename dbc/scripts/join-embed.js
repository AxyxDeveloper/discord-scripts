//Put this script after the
const Discord = require("discord.js")
const client = new Discord.Client()
//and
botConfigs = {
}
//Script
client.on("guildCreate", asyns function (guild) {
  const sysChannel = guild.channels.find(ch=>ch.id===guild.systemChannelID)
  const 
  const embed = new Discord.RichEmbed()
  .setTitle(`${client.user.tag} Bot`)
  .setDescription(`Thanks for inviting ***${client.user.username}***!\n\nMy prefix is \`${botConfigs.prefix}\``)
  sysChannel.send(embed)
})
