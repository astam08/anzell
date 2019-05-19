const Discord = require('discord.js');
const config = require("../config.json");
//const Eris = require('eris');
//var bot = new Eris(config.token);

const axios = require('axios');

exports.run = (client, message, args) => {

function slowmode(s, m){
    axios({
        method: 'patch',
        url: `https://discordapp.com/api/v6/channels/${message.channel.id}`,
        headers: {
            "Authorization" : `Bot ${config.token}`
          },
        data: {
            rate_limit_per_user: s,
            reason: args.slice(1).join(" ")
        }
      }).then(message.channel.send(m))
      .catch((err) =>{
          message.channel.send("I don't have permission");
      });
}


if(!message.member.permissions.has('KICK_MEMBERS')) {
    const embed = new Discord.RichEmbed()
    .setColor(0xF46242)
    .setTimestamp()
    .setTitle("Maaf kamu gak ada izin!")
    message.channel.send({embed});
    return;
} else {
        
        if(args[0] === "off"){
            slowmode(0, "Slow Mode Off");
        } else if(isNaN(args[0]) || parseInt(args[0]) > 120 || parseInt(args[0]) < 1){
            message.channel.send("Silahkan masukan angka 1 sampai 120");
        } else {
            slowmode(args[0], `Slow Mode Di set ke ${args[0]} Detik`);
        }


    }

}

exports.conf = {
    DM: true,
    OwnerOnly: false
}