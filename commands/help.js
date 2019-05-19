const Discord = require('discord.js');
exports.run = (client, message, args) => {

let pages = ['***Administrator***\n```addrole,rainbow,welcome,invite,ban,lock,gantinama,mute,removerole,unmute,kick```', '***Fun***\n```avatar,coin,cuddle,embed,fish,marry,ping,punch,poke,slap```', '***Lainnya***\n```timer,stats,inviteme,bug,channelinfo,clear,botinfo```', '***MUSIK***\n```Mohon Maaf Fitur Musik Kami Hapus!!```'];
let page = 1; 

    const embed = new Discord.RichEmbed() // Define a new embed
    .setColor(0xffffff) // Set the color
    .setFooter(`Bagian ${page} Dari ${pages.length}`)
    .setDescription(pages[page-1])

    message.channel.send(embed).then(msg => {

    msg.react('⏪').then( r => {
        msg.react('⏩')

        // Filters
        const backwardsFilter = (reaction, user) => reaction.emoji.name === '⏪' && user.id === message.author.id;
        const forwardsFilter = (reaction, user) => reaction.emoji.name === '⏩' && user.id === message.author.id;

        const backwards = msg.createReactionCollector(backwardsFilter, {timer: 6000});
        const forwards = msg.createReactionCollector(forwardsFilter, {timer: 6000});

        backwards.on('collect', r => {
            if (page === 1) return;
            page--;
            embed.setDescription(pages[page-1]);
            embed.setFooter(`Bagian ${page} Dari ${pages.length}`);
            msg.edit(embed)
        })

        forwards.on('collect', r => {
            if (page === pages.length) return;
            page++;
            embed.setDescription(pages[page-1]);
            embed.setFooter(`Bagian ${page} Dari ${pages.length}`);
            msg.edit(embed)
        })
    })
})






}

///⏪⏩