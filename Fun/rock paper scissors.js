 const Loading = new Discord.RichEmbed()
            .setTitle("Loading Minigame...")
            .setThumbnail("https://media.discordapp.net/attachments/743098996184318043/744154717504012338/Dual_Ring-1s-200px_1.gif?width=150&height=150")
            .setColor('#8635ff')
        const startEmbed = new Discord.RichEmbed()
            .setTitle("Rock, Paper, Scissors Minigame")
            .setDescription("Take your time. React with 1 of these reactions (🗻 📰 ✂).")
            .setColor('#8635ff')
            .setFooter(client.user.username, client.user.avatarURL)
            .setTimestamp()
        message.channel.send(Loading).then(embed => {
            if (message.deleteable) { message.delete() }
            embed.react('🗻').then(() => {
                embed.react('📰').then(() => {
                    embed.react('✂').then(() => {
                        embed.edit(startEmbed).then(started => {
                            const filter = (reaction, user) => user.id === message.author.id && reaction.emoji.name === '🗻' || reaction.emoji.name === '📰' || reaction.emoji.name === '✂'
                            started.awaitReactions(filter, { max: 1 }).then(collected => {
                                var botReactions = ['🗻', '📰', '✂']
                                var chosenReaction = botReactions[Math.floor(botReactions.length * Math.random())]
                                var user = collected.first()._emoji.name
                                //collected.first()._emoji.name
                                const tie = new Discord.RichEmbed()
                                    .setTitle("It's a tie!")
                                    .setFooter("No one has won 😢")
                                    .setColor('#8635ff')
                                    .setTimestamp()
                                const botWon = new Discord.RichEmbed()
                                    .setTitle(`*${client.user.tag}* won!`)
                                    .setFooter(`${client.user.tag} had chosen ${chosenReaction}`,client.user.avatarURL)
                                    .setColor('#8635ff')
                                    .setTimestamp()
                                const userWon = new Discord.RichEmbed()
                                    .setTitle(`*${message.author.tag}* won!`)
                                    .setFooter(`${client.user.tag} had chosen ${chosenReaction}`, client.user.avatarURL)
                                    .setColor('#8635ff')
                                    .setTimestamp()
                                if (chosenReaction === user) {
                                    started.edit(tie)
                                } else if (user === "🗻") {
                                    if (chosenReaction === "📰") {
                                        started.edit(botWon)
                                    }
                                    if (chosenReaction === "✂") {
                                        started.edit(userWon)
                                    }
                                } else if (user === "📰") {
                                    if (chosenReaction === "✂") {
                                        started.edit(botWon)
                                    }
                                    if (chosenReaction === "🗻") {
                                        started.edit(userWon)
                                    }
                                } else if (user === "✂") {
                                    if (chosenReaction === "📰") {
                                        started.edit(userWon)
                                    }
                                    if (chosenReaction === "🗻") {
                                        started.edit(botWon)
                                    }
                                }
                            })
                        })
                    })
                })
            })
        })
