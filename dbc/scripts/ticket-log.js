//Ticket on Create
//Put this here: https://prnt.sc/rfpy0h
const logChannel = message.guild.channels.find(ch=>ch.name==="logs")
const embed = new Discord.RichEmbed()
.setTitle("Ticket Created")
.addField("By", message.author)
.addField("Subject", subject)
logChannel.send(embed)
//Ticket on Close
//Put this here: https://prnt.sc/rfq0fd
const logChannel = message.guild.channels.find(ch=>ch.name==="logs")
const embed = new Discord.RichEmbed()
.setTitle("Ticket Closed")
.addField("By", message.author)
logChannel.send(embed)
