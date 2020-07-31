//This is a hardcore bot for professionals. Please use this if you know wat this does.
const Discord = require("discord.js")
const client = new Discord.Client()

client.on("message", async function (message) {
    const prefix = ".";
    const args = message.content
        .slice(prefix.length)
        .trim()
        .split(/ +/g);
    const command = args.shift().toLowerCase();
    if(message.author.bot) return;
    if(!message.content.startsWith === prefix) return;
    if (command === "say") {
        //script start
            //remove the // from this script to enable admin only
            //if(!message.member.hasPermission("ADMINSTRATOR")) return message.reply("You're not allowed to use this command!");
            const msg = message.content.split(' ').splice(1).join(' ');
            if(!msg) return message.reply("Please enter a message to send!");
            //remove the // from this script to enable delete (not recommed)
            //message.delete()
            message.channel.send(msg)
            //script end
        })
    }
})

client.login("token")
