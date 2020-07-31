    if (command === "shutdown" && botConfigs.plugins[10].activated == true) {
        if (!message.author.id==="yourid") return message.channel.send("You don't have permission!"); //replace "yourid" with your id lol
        await message.channel.send(`Good night, ${message.author.tag}!`);
        await message.delete().catch();
        await process.exit().catch((e) => { console.error(e); });
    }
