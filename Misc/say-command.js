if (command === "say") {
        //script start
            //remove the // from this script to enable admin only
            //if(!message.member.hasPermission("ADMINSTRATOR")) return message.reply("You're not allowed to use this command!");
            const msg = message.content.split(' ').splice(1).join(' ');
            if(!msg) return message.reply("Please enter a message to send!");
            //remove the // from this script to enable delete (not recommed)
            //message.delete()
            message.channel.send(msg)
    })
}

          
