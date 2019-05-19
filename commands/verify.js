const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    message.delete();
    let role = message.guild.roles.find(role => role.name === 'Unverified');
    if (message.channel.name !== 'verifikasi') return message.reply('Silahkan menuju ke channel #verifikasi');
    message.member.addRole(role);
    if (message.member.roles.has(role.id)) {
        let verifyEmbed = new Discord.RichEmbed()
            .setAuthor(message.member.displayName, message.author.displayAvatarURL)
            .setColor('#36393f')
            .setDescription('Kamu sudah Diverivikasi!')
        return message.channel.send((verifyEmbed));
    } else {
        let verifyEmbed = new Discord.RichEmbed()
            .setAuthor(message.member.displayName, message.author.displayAvatarURL)
            .setColor('#36393f')
            .setDescription('Akun berhasil di Verifikasi.')
        return message.channel.send((verifyEmbed));
    }
}

module.exports.help = {
    name: 'verify',
    description: 'you must have the Verified role'
}