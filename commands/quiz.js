const Discord = require('discord.js');

// Command Handler
exports.run = async (client, message, args) => {

  let quiz = [
    { q: '***Bola apa yang disukai anak anak?***', a: ['bolaemon'] },
    { q: '***Hewan apa yang bikin bingung?***', a: ['ayam'] },
    { q: '***Ayam apa yang terbang dari Makassar ke Jakarta?***', a: ['ayam nekat'] },
  ];
  let options = {
    max: 1,
    time: 10000, // 30050 = 30 seconds and a half ms
    errors: ['time'],
  };

  let item = quiz[Math.floor(Math.random() * quiz.length)];
  await message.channel.send(item.q)
  try {
    let collected = await message.channel.awaitMessages(answer => item.a.includes(answer.content.toLowerCase()), options);
    let winnerMessage = collected.first();
    return message.channel.send({embed: new Discord.RichEmbed()
                                  .setAuthor(`Winner: ${winnerMessage.author.tag}`, winnerMessage.author.displayAvatarURL)
                                  .setTitle(`Correct Answer: \`${winnerMessage.content}\``)
                                  .setFooter(`Question: ${item.q}`)
                                  .setColor('RANDOM')
                                }).then(m => m.delete(5000))

  } catch (_) {
    return message.channel.send({embed: new Discord.RichEmbed()
                                  .setAuthor('⏰Habis!!!')
                                  .setTitle(`Correct Answer(s): \`${item.a}\``)
                                  .setFooter(`Question: ${item.q}`)
                                }).then(m => m.delete(5000))

  }

} 