exports.run = (client, message, args) => {
    if (!args[0]) return;
    if (args[0] === "bug") return message.reply("Silahkan masukan Bug yang akan di laporkan ke developer!`");
    args = args.join(" ");
    message.reply("Terimakasih Telah melaporkan Bug kepada kami!");
    const content = `**${message.author.username}#${message.author.discriminator}** (${message.author.id}) reported:\n~~--------------------------------~~\n${args}\n~~--------------------------------~~\nOn the server: **${message.guild.name}**\nServer ID: **${message.guild.id}**`;
    client.channels.get('576098931172442112').send(`${content}`)
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'bug',
  description: 'Reports a bug.',
  usage: 'bug <bug>'
};