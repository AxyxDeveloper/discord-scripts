  if(command === "timer") { //Requires "pretty-ms" module
    try {
    const time = args[0]
    if(!time) return message.reply("Specify a time to set the timer!");
      const ms2 = ms(time)
      var enabled  = 0
      var milli = parseInt(ms2, 10)
      message.delete()
    const timerEmbed = new Discord.RichEmbed()
    .setTitle("Timer")
    .setDescription("I will notify you when this timer has ended.")
    .setFooter(`${message.author.username}`)
    .setColor("#ff8c00")
    message.channel.send(timerEmbed).then(msg => {
      ////////////////////
      const interv = setInterval(() => {
        if(milli === 0) { //
          clearInterval(interv)
        const embed = new Discord.RichEmbed()
        .setTitle("Timer")
        .setDescription("Timer has Ended")
        .setColor("#ff8c00")
        message.delete()
      message.channel.send(`${message.author}, Timer ended.`).then(m => {
        setTimeout(() => {
          msg.edit(embed)
          m.delete()
        }, 50)
          })
          clearInterval(interv)
        }//
        //
        const tim = new Discord.RichEmbed()
    .setTitle(`Timer - ${nice(milli = Math.floor(milli - 1000))}`)
    .setDescription("I will notify you when this timer has ended.")
    .setFooter(`${message.author.username}`)
    .setColor("#ff8c00")
        msg.edit(tim)
    }, 1010)
      if(enabled === 1) {
                  enabled = 0
        const embed = new Discord.RichEmbed()
        .setTitle("Timer")
        .setDescription("Timer has Ended")
        .setColor("#ff8c00")
                msg.edit(embed)
      message.channel.send(`${message.author}, Timer ended.`).then(m => {
        setTimeout(() => {
          m.delete()
        }, 500)
          })
      }
    })
  } catch (error) {
    message.reply("There was a error.")
  }
  }
