const Discord = require('discord.js');
const client = new Discord.Client()
client.on('ready', async => {
console.log('membercount on')
});
///require('./music.js');
const serverStats = {
    guildID: '507826013602971652',
    totalUsersID: '576482365195419667',
    memberCountID: '576482416651403297',
    botCountID: '576482459420721182'
}; 

client.on('guildMemberAdd', member => {

    if (member.guild.id !== serverStats.guildID) return;

    // Member joins guild
    client.channels.get(serverStats.totalUsersID).setName(`CAPSUL_FLY MEMBER : ${member.guild.memberCount}`);
    client.channels.get(serverStats.memberCountID).setNane(`PENGGUNA : ${member.guild.members.filter(m => !m.user.bot).size}`);
    client.channels.get(serverStats.botCountID).setName(`TOTAL BOT : ${member.guild.members.filter(m => m.user.bot).size}`);

});

client.on('guildMemberRemove', member => {

    if (member.guild.id !== serverStats.guildID) return;

    // Member leaves guild
    client.channels.get(serverStats.totalUsersID).setName(`CAPSUL_MEMBER : ${member.guild.memberCount}`);
    client.channels.get(serverStats.memberCountID).setName(`PENGGUNA : ${member.guild.members.filter(m => !m.user.bot).size}`);
    client.channels.get(serverStats.botCountID).setName(`TOTAL BOT : ${member.guild.members.filter(m => m.user.bot).size}`);

});


client.login(process.env.TOKEN);