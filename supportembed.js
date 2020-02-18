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
    if (command === "support") {
        //script start
          const embed = new Discord.RichEmbed()
          //dont put anything after this. it will result in a error
          .setTitle("Support")
          .setFooter("Support")
          .setTimestamp()
          .setColor("#hexcolor")
          .setDescription("Your description")
          .addField("Support Server", "[Link](https://discord.gg/<yourservercode>)")
          message.channel.send(embed)
            //script end
        })
    }
})

client.login("token")
