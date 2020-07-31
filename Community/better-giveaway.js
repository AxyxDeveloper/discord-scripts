//requires 'pretty-ms' module
try {
    if (command === "giveaway") {
      if (!message.member.hasPermission("ADMINISTRATOR"))
        return message.reply("You don't have permission!");
      const channel = message.mentions.channels.first() || args[0];
      if (!channel) return message.reply("Specify a channel!");
      const item = args[1];
      if (!item) return message.reply("Specify a item!");
      const time = args[2];
      if (!time) return message.reply("Specify the time!");
      const ms2 = ms(time);
      var milli = parseInt(ms2, 10);
      const embed = new Discord.RichEmbed()
        .setTitle("Giveaway! :tada:")
        .setDescription(item)
        .setColor("#7cfc00")
        .setFooter(`React 🎉 to join`)
        .setTimestamp();
      const botWon = new Discord.RichEmbed()
        .setTitle("Giveaway Failed :weary:")
        .setDescription(
          "There was only 1 reaction and that was me! Now we have to do all over :("
        )
        .setColor("#ff0000")
        .setTimestamp();
      channel.send(embed).then(msg => {
        //nothing here>
        const intev = setInterval(() => {
          if (milli === 0) {
            clearInterval(intev);
            var peopleReacted = msg.reactions.get("🎉").users;
            if (msg.reactions.get("🎉").count === 1) {
              msg.delete();
              message.channel.send(botWon);
              return;
            }
            var filteredWinner = peopleReacted.filter(
              id => id !== client.user.id
            );
            var winner = peopleReacted.random();

            channel.send(`${winner} has won ${item}! :tada:`);
            const finalE = new Discord.RichEmbed()
              .setTitle("Giveaway Over")
              .setColor("#7cfc00")
              .setDescription(`Winner: ${winner}`);
            setTimeout(() => {
              msg.edit(finalE); //test
            }, 10);
          }
          milli = Math.floor(milli - 1000);
          const embed = new Discord.RichEmbed()
            .setTitle("Giveaway! :tada:")
            .setDescription(`${item}\n\nTime Left: **${nice(milli)}**`)
            .setColor("#ff8c00")
            .setFooter(`React 🎉 to join`)
            .setTimestamp();
          msg.edit(embed);
          msg.react("🎉");
          message.delete();
        }, 1010);
      });
    }
  } catch (error) {}
