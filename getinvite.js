if(command==="getinvite") {
    message.channel.createInvite().then(invite=>{
          const embed = new Discord.RichEmbed()
    .setTitle("Invite")
    .setDescription("This invite will end in ***24h***")
          .setURL(`https://discord.gg/${invite.code}`)
          .setColor("#1e90ff")
    message.channel.send(embed)
    message.delete()
    })
  }
