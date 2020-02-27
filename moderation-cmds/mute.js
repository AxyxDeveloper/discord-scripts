if(command === "mute") {
if(!message.member.hasPermission("MUTE_MEMBERS")) return message.reply("You don't have the `MUTE_MEMBERS` permission!");
let user = message.mentions.users.first() || args[0]
if(!user) return message.reply("Please enter the user.");
let reason = args[1]
if(!reason) return message.reply("Please enter the reason.");







}
