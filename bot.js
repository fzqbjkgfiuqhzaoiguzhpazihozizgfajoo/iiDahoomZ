const Discord = require('discord.js');
const client = new Discord.Client();

client.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!developers.includes(message.author.id)) return;

if (message.content.startsWith('Swt')) {
client.user.setActivity(argresult, {type:'WATCHING'});
  client.user.setStatus("Idle")
    message.channel.send(` ** Done. :white_check_mark: ** `)
} else 
if (message.content.startsWith('Sls')) {
client.user.setActivity(argresult , {type:'LISTENING'});
  client.user.setStatus("idle")
    message.channel.send(` ** Done. :white_check_mark: ** `)
} else 
if (message.content.startsWith('Sst')) {
  client.user.setGame(argresult, "https://www.twitch.tv/raaaaaaaaaaaz");
  client.user.setStatus("idle")
   message.channel.send(` ** Done. :white_check_mark: ** `)
} else 
if (message.content.startsWith('Spl')) {
client.user.setActivity(argresult , {type:'PLAYING'});
  client.user.setStatus("idle")
    message.channel.send(` ** Done. :white_check_mark: ** `)

}

client.login(process.env.BOT_TOKEN);
