const Discord = require("Discord.js")
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
    if (command === "say") {
        //script start
        const msg = message.content.split(' ').splice(1).join(' ');
        if(!msg) return message.reply("Specify a message. :x:"); 
        message.delete();
        if(message.member.nickname) {
            var username = message.member.nickname
        } else {
            var username = message.author.username
        }
        message.channel.createWebhook(username, message.author.avatarURL, 'Bot Command').then(wehook => {
            const token = wehook.token
            const id = wehook.id
            const msgweb = new Discord.WebhookClient(id, token)
            msgweb.send(msg)
            setTimeout(() => {
                wehook.delete()
            }, 5000);
            //script end
        })
    }
})

client.login("token")
