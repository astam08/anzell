const Discord = module.require('discord.js');
const ms = require('ms');

module.exports.run = async (bot, message, args) => {

  if(message.member.hasPermission("ADMINISTRATOR")) {
            let member2 = message.mentions.members.first();
            if(!member2) return message.reply(":x: " + "| Kamu perlu mention nama penggunany!");

            let muteRole2 = message.mentions.roles.first();
            if(!muteRole2) return message.reply(":x: " + `| Tidak ada role!`);
            
            let time2 = args[2];
            if(!time2) {
              member2.addRole(muteRole2.id);
              message.channel.send(member2 + ` Kamu telah diberikan role Permanent: ` + muteRole2.name);
            }else {
              member2.addRole(muteRole2.id);
              message.channel.send(member2 + ` Kamu telah diberikan role: ` + muteRole2.name + ` untuk: ${ms(ms(time2), {long: true})}`);

              setTimeout(function(){
                member2.removeRole(muteRole2.id);
                message.channel.send(member2 + ` you role has been taken off of you your glory lasted: ${ms(ms(time2), {long: true})}`)

              }, ms(time2));

              };
              }else {
                return message.reply(":x: " + "| kamu perlu izin \"ADMINISTRATOR\" ❌")
              };
}

module.exports.help = {
    name: "addrole"
}