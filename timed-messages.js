client.on("ready", () => {
    //When the bot gets online it will start the whole thing.
    var timedmessages = {
        "a random number, can't be the same from another. add this number to the \"Messages\"": {
            "server": {
                "guild": "your server id",
                "channel": "the channel id"
            },
            "interval": "Time in MILLISECONDS",
            "message": "your message here"
        }
    }
    var messages = ["<the number>"]
    messages.forEach(element => {
        const guild = client.guilds.get(timedmessages[element].server.guild)
        const channel = guild.channels.get(timedmessages[element].server.channel)
        setInterval(() => {
            channel.send(timedmessages[element].message)
        }, timedmessages[element].interval)
    })
})
