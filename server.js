// server.js
// where your node app starts

// init project
const express = require('express');
const app = express();
const path = require('path');
const Discord = require("discord.js");
const Enmap = require("enmap");
const fs = require("fs");
//const modified = require('./struct/extend.js');
//const by = new modified()
//const antispam = require('./modules/antispam.js');
//let db = JSON.parse(fs.readFileSync("./xp.json", "utf8"));
require ('./rainbow');
require('./test');
//const autoRole = require ("./commands/autorole.js")
   // let autorole = JSON.parse(fs.readFileSync("./autorole.json", "utf8"));
   // if (!autorole[member.guild.id]) { 
     // autorole[member.guild.id] = {
     //   autorole: "none"
    //  };
   // }
   // var role = autorole[member.guild.id].role;
   // if (!role) return;
   // member.addRole(role);
  //});
//require('./bot');
///require('./music.js');
//require('./app');

const client = new Discord.Client();
const config = require("./config.json");
const prefix = config.prefix;
// We also need to make sure we're attaching the config to the CLIENT so it's accessible everywhere!
client.config = config;

fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
  });
});
//antispam(modified);
client.commands = new Enmap();

fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`);
    let commandName = file.split(".")[0];
    console.log(`Attempting to load command ${commandName}`);
    client.commands.set(commandName, props);
  });
});

client.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;  

    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.slice(1);

    if(!command.startsWith(prefix)) return;

    let cmd = client.commands.get(command.slice(prefix.length));
    if(cmd) cmd.run(client, message, args);
    
  
  var prefix = config.prefix;
client.on('message', message => {
if (message.channel.type === "dm") { //if the channel is a DM channel
    var args = message.content.split(" ").slice(0)
    var args = args.slice(0).join(" ") //create the args

    if (message.content.startsWith(prefix)) return message.channel.send(":x: Please use commands in real server! :x:") //if the message is a command
    message.channel.send("This message has been send to the staff! :incoming_envelope:");
    if (message.content.startsWith(prefix)) return
    if (args.length > 256) return message.reply("Your message content too many characters :/") //if the message contnt more than 256 character, what fields do not allow
    var embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setTitle("New request in DM!")
        .addField(args, "Send by: " + message.author.username + " with the ID: " + message.author.id)
    client.guilds.get("564445016295079946").channels.get("571546256523132948").send(embed) //send the embed in a specific channel
}

  //const autoRole = require ("./commands/autorole.js")
    //let autorole = JSON.parse(fs.readFileSync("./autorole.json", "utf8"));
    //if (!autorole[member.guild.id]) { 
     // autorole[member.guild.id] = {
       // autorole: "none"
    //  };
   // }
   // var role = autorole[member.guild.id].role;
    //if (!role) return;
    //member.addRole(role);
  //})
  

if (message.content.startsWith(prefix + "reply")) {
   if (message.author.id !== "402367348364935169") return message.reply('You cannot use that!')
    var args = message.content.split(" ").slice(0)
    var Rargs = message.content.split(" ").slice(2).join(" ")
    var userID = args[1]
    if (isNaN(args[1])) return message.reply("This is not an ID!") //if args is Not A Number!
    var embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setTitle("the staff answered you!")
        .setDescription(Rargs)
        .setFooter("this message was sent to you by: " + message.author.username + " !")
   client.users.get(userID).send(embed)
   message.channel.send(embed).catch(console.error) //send the message
    //it may be that if the user has blocked your bot that it does not work
}
}) 
  
});

class Call {
	constructor(message, bot, commands, args, content, prefix, cmd) {
		this.message = message;
		this.bot = bot;
		this.commands = commands;
		this.args = args;
		this.content = content;
		this.prefix = prefix;
		this.cmd = cmd;
	}
}

client.on('memberGuildAdd', member => {
let channel = member.guild.channels.find('name', 'selamat-datang');
    let memberavatar = member.user.avatarURL
        if (!channel) return;
        let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(memberavatar)
        .addField(':bust_in_silhouette: | Nama : ', `${member}`)
        .addField(':microphone2: | Selamat Datang!', `Selamat Datang , ${member}`)
        .addField(':id: | User :', "**[" + `${member.id}` + "]**")
        .addField(':family_mwgb: | Kamu member Ke', `${member.guild.memberCount}`)
        .addField("Nama", `<@` + `${member.id}` + `>`, true)
        .addField('Server', `${member.guild.name}`, true )
        .setFooter(`**${member.guild.name}**`)
        .setTimestamp()

        channel.sendEmbed(embed);

});
//const serverStats =
//client.on('guildMemberAdd', member => {
 //if (member.guild.id !== serverStats.Server) return;
 // client.channels.get(serverStats.TotalMember).setName(`Total Member: ${member.guild.memberCount}`);
  //client.channels.get(serverStats.Member).setName(`Member: ${member.guild.members.filter(m => !m.user.bot).size}`);
//  client.channels.get(serverStats.TotalBot).setName(`Total Bot: ${member.guild.member.filter(m => m.user.bot).size}`);
  
          
 

//});

//client.on('guildMemberRemove', member => {
//if (member.guild.id !== serverStats.Server) return;
//client.channels.get(serverStats.Server).setName(`Total Member: ${member.guild.memberCount}`);
//client.channels.get(serverStats.TotalMember).setName(`Member: ${member.guild.members.filter(m => !m.user.bot).size}`);
//client.channels.get(serverStats.TotalBot).setName(`Total Bot: ${member.guild.members.filter(m => m.user.bot).size}`);
  


//});



client.login(process.env.TOKEN);

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function(request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
// Routes
app.use('/api/discord', require('./api/discord'));