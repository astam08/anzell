const Discord = require("discord.js");
const bot = new Discord.Client();
exports.run = (client, message, args) => {
      if (!message.member.hasPermission("MANAGE_NICKNAMES")) return message.reply("Maaf kamu gak punya izin");
      if (!message.guild.member(client.user).hasPermission('MANAGE_NICKNAMES')) return message.reply('Sorry, i dont have the perms to do this cmd i need MANAGE_NICKNAMES. :x:')
      if (message.mentions.users.size < 1) return message.reply('You must mention someone to change the users nickname. :x:')
      let user = message.guild.member(message.mentions.users.first()) || message.author;
      if (user.highestRole.position >= message.member.highestRole.position ) return message.reply('I cant change that members nickname. They are the same level as you or higher. :x:');
      let newusername = args.slice(1).join(' ')
      if (newusername.length < 1) return message.reply('Silahkan mention target')
       message.guild.members.get(user.user.id).setNickname(newusername);
        const embed = new Discord.RichEmbed()
        .setColor(0x00A2E8)
        .addField("Nama berhasil diganti!", newusername + " Ke " + user.user.username + " :white_check_mark:");
        message.reply({embed})
}