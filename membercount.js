//Please fill in these things:
const channelID = "";

//if your bot's client = client? or bot?
//How to know? See for const client/bot = new Discord.Client()
//if bot: change the "client" at the script to "bot"

client.on("guildMemberAdd", async function (user) {
const sendCh = message.guild.channels.find(ch => ch.id === `${channelID});
if(!sencCh) return;
sendCh.setName(`Members: ${user.guild.memberCount}`)
console.log("There is a new member!")
if(sendCh.type === "text") {
sendCh.overwritePermissions(message.guild.id, {
    VIEW_CHANNEL: true,
    SEND_MESSAGES: false
} else if(sencCh.type === "voice") {
    VIEW_CHANNEL: true,
    CONNECT: false
}
)}