if (command === "giveaway") {
        try {
        if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("You don't have permission!")
        try {
        const _channel = message.mentions.channels.first()
        } catch (error) {
            const Error = new Discord.RichEmbed()
            .setTitle("Error")
            .setDescription("*Oops!* \nThere was a error on fetching that channel! Please try again!\n\nChannel Example: *#giveaways-channel*")
        }
        if(!_channel) return message.reply("Specify a channel!");
        const _item = args[1]
        if(!_item) return message.reply("Specify a item!");
        const _time = args[2]
        if(!_time) return message.reply("Specify the time!");
        const embed = new Discord.RichEmbed()
        .setTitle("Giveaway! :tada:")
        .setDescription(_item)
        .setColor("#7cfc00")
        .setFooter(`React 🎉 to join - ${_time}`)
        .setTimestamp()
        _channel.send(embed).then(msg => {
            msg.react("🎉")
            setTimeout(() => {
                const peopleReacted = msg.reactions.get("🎉").users;
                var winner = peopleReacted.random()
                if(winner.id === client.user.id) {
                    winner = peopleReacted.random()
                    if(winner.id === client.user.id) {
                        winner = peopleReacted.random()
                        _channel.send(`${winner} has won ${_item}! :tada:`)
                        const finalE = new Discord.RichEmbed()
                        .setTitle("Giveaway Over")
                        .setColor("#7cfc00")
                        .setDescription(`Winner: ${winner}`)
                        msg.edit(finalE)
                    }
                    _channel.send(`${winner} has won ${_item}! :tada:`)
                    const finalE = new Discord.RichEmbed()
                    .setTitle("Giveaway Over")
                    .setColor("#ff8c00")
                    .setDescription(`Winner: ${winner}`)
                    msg.edit(finalE)
                }
            }, ms(_time))
        })
    } catch (error) {
        const Error = new Discord.RichEmbed()
        .setTitle("Error!")
        .setDescription("Error! I've received this error: ```js \n" + error + "```")
        .setTimestamp()
        message.channel.send(Error)
    }
    }
