const Discord = require("discord.js");
exports.run = (client, message, args) => {
 if (!message.member.permissions.has("MANAGE_CHANNELS")) return message.channel.send("Maaf kamu tidak punya izin!");
  if (!message.guild.member(client.user).hasPermission('MANAGE_CHANNELS')) return message.reply('Sorry, i dont have the perms to do this cmd i need MANAGE_CHANNELS. :x:')
  const ms = require('ms');
  if (!client.lockit) client.lockit = [];
  const time = args.join(' ');
  const validUnlocks = ['buka', 'unlock', 'stop', 'off'];
  if (!time) return message.reply('You must set a duration for the lockdown in either hours, minutes or seconds');

  if (validUnlocks.includes(time)) {
    message.channel.overwritePermissions(message.guild.id, {
      SEND_MESSAGES: true
    }).then(() => {
      message.channel.send('Lockdown OFF.');
      clearTimeout(client.lockit[message.channel.id]);
      delete client.lockit[message.channel.id];
    }).catch(error => {
      console.log(error);
    });
  } else {
    message.channel.overwritePermissions(message.guild.id, {
      SEND_MESSAGES: false
    }).then(() => {
      message.channel.send(`Channel Di kunci dalam waktu ${ms(ms(time), { long:true })}`).then(() => {

        client.lockit[message.channel.id] = setTimeout(() => {
          message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: true
          }).then(message.channel.send('Lockdown Off'))
          delete client.lockit[message.channel.id];
        }, ms(time));
      }).catch(error => {
        client.channels.get("575744370473435136").send(error);
      });
    });
  }
}