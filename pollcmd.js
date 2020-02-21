if(command === "poll") {
        if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("You're not allowed to use this command!") //remove this line of code to allow everyone to use
        const pollChannel = message.channel
        const pollTitle = message.content.split(' ').splice(1).join(' ');
        if(!pollTitle) return message.reply("Specify a Title!");
        pollTitle.replace(" ", " ");
        const pollEmbed1 = new Discord.RichEmbed()
        .setTitle("Creating Poll...")
        .setColor("#ff8c00")
        const pollEmbed2 = new Discord.RichEmbed()
        .setTitle("Sending Poll...")
        .setColor("#ff8c00")
        const pollEmbed3 = new Discord.RichEmbed()
        .setTitle("Poll Send...")
        .setDescription("**Adding Reactions**")
        .setColor("#ff8c00")
        const pollEmbed4 = new Discord.RichEmbed()
        .setTitle("Reactions Added")
        .setColor("#ff8c00")
        message.channel.send(pollEmbed1).then(poll => {
            const pollStatus = poll
            const pollEmbed = new Discord.RichEmbed()
            .setTitle("Poll")
            .setDescription(`${pollTitle}`)
            .setTimestamp()
            .setColor("#7cfc00")
            pollStatus.edit(pollEmbed2)
            pollChannel.send(pollEmbed).then(embed => {
                pollStatus.edit(pollEmbed3)
                embed.react("👍") //you can change these  emojis <unicode character>
                setTimeout(() => {
                                  embed.react("👎")
                pollStatus.edit(pollEmbed4)
                setTimeout(() => {
                    pollStatus.delete()
                    message.delete()
                }, 8000) //you can change the time of the status message will be deleted
                }, 2300)
            })
        })
    }
