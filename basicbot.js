const Discord = require("discord.js")
const client = new Discord.Client()

client.on("ready", async function (ready) {
  console.log("ready")
})

client.on("message", async function (message) {
  if(message.author.bot) return;
  const prefix = "!";
  if(!message.content.startsWith === prefix) return;
  if(message.content === prefix + "help") {

  const e = new Discord.RichEmbed()
  .setTitle("This is a title")
  .setDescription("This is the Description")
  .addField("This is a field title", "this is a field description")
  .setTimestamp()
  .setFooter("This is a footer, and this is a timestamp -->")
  .setAuthor("<--- This is a footer avatar, and This is a author name", client.user.avatarURL)
  message.channel.send(e)
  }
})
client.login("token")
