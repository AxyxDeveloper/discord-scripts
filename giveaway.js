  if (command === "giveaway") {
        if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("You don't have permission!")
        const channel = message.mentions.channels.first() || args[0]
        if(!channel) return message.reply("Specify a channel!");
        const item = args[1]
        if(!item) return message.reply("Specify a item!");
        const time = args[2]
        if(!time) return message.reply("Specify the time!");
        const embed = new Discord.RichEmbed()
        .setTitle("Giveaway! :tada:")
        .setDescription(item)
        .setColor("#7cfc00")
        .setFooter(`React 🎉 to join - ${time}`)
        .setTimestamp()
        channel.send(embed).then(msg => {
            msg.react("🎉")
            setTimeout(() => {
                const peopleReacted = msg.reactions.get("🎉").users;
                var winner = peopleReacted.random()
                        channel.send(`${winner} has won ${item}! :tada:`)
                        const finalE = new Discord.RichEmbed()
                        .setTitle("Giveaway Over")
                        .setColor("#7cfc00")
                        .setDescription(`Winner: ${winner}`)
                        msg.edit(finalE)
            }, ms(time))
        })
    }
