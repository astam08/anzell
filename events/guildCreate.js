module.exports = (client, guild) => {
  client.logger.cmd(`[GUILD JOIN] ${guild.name} (${guild.id}) added the bot. Owner: ${guild.owner.user.tag} (${guild.owner.user.id})`);
  client.user.setActivity('👥Digunakan  ${client.guilds.size} Server!')
//const owner = guild.owner.user 
//var guildMsg = [ "Thanks for adding me to your server. Just a few tips to get you started..", "```**1.** Orcinus default prefix is `>`.", "**2.** Commands will not work in direct messages.", "**3.** Set welcome leave messages with >welcomeleave.", "**4.** Set logs channel with >logs [channel name].", "**5.** Set autorole with >autorole [role name].", "**6.** Prefix can be changed with >prefix [new prefix].", "**7.** Profile System can be enabled with >profilesystem.", "**8.** Automod can be enabled with >automod enable all```" ] owner.send(guildMsg)} 
//catch (err) { 
//return;

//}

//});


};