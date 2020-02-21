  if(command === "timer") {
    try {
    const time = args[0]
    if(!time) return message.reply("Specify a time to set the timer!");
    const timerEmbed = new Discord.RichEmbed()
    .setTitle("Timer")
    .setDescription("I will notify you when this timer has ended.")
    .setColor("#ff8c00")
    message.channel.send(timerEmbed).then(msg => {
    setTimeout(() => {
        const embed = new Discord.RichEmbed()
        .setTitle("Timer")
        .setDescription("Timer has Ended")
        .setColor("#ff8c00")
                msg.edit(embed)
      message.channel.send(`${message.author}, Timer ended.`).then(m => {
        setTimeout(() => [
          m.delete()
        ], 700)
      })
    }, ms(time))
    })
  } catch (error) {
    message.reply("There was a error.")
  }
  }
