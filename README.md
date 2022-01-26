# Personal-Discord-Bot
Personal Discord Bot handcrafted with love! ![](https://cdn.discordapp.com/emojis/649382052076060673.webp?size=16&quality=lossless)

**NOTE**: This Bot runs right now on [replit](https://replit.com). (Dont confuse yourself with [this](https://github.com/yungbeatz/Personal-Discord-Bot/blob/main/src/.replit) file.)

### My best creations for this bot:
```js
const { Client, Intents } = require('discord.js');
const { MessageEmbed } = require('discord.js');
const googleIt = require('google-it');
const cron = require('cron');


const botPrefix = "$"


  //Searches the Internet!!!
  client.on('messageCreate', message => {
  if (!message.content.startsWith(botPrefix) || message.author.bot) return;
  const args = message.content.slice(botPrefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

if(command === 'search'){
    if(message.content === '$search'){
      message.channel.send('Your'e using this command wrong!\n`$search <keyword/s>`') 
      return;
    }
    const embed = new MessageEmbed()
        .setTitle("Google Search Results")
        .setColor(3426654)
        .setTimestamp()    
    googleIt({'query': args.join(' ')}).then(results => {
        results.forEach(function(item, index) { 
            embed.addField((index + 1) + ": " + item.title, "<" + item.link + ">");
        });
        message.channel.send({embeds: [embed] });
    }).catch(e => {
        // any possible errors that might have occurred (like no Internet connection)
    });
};
});

var CronJob = require('cron').CronJob;
var job = new CronJob('00 30 06 * * 1-5', function() {
  console.log('Timed Morning Message sent.');
  var guild = client.guilds.cache.get('933337944712949782');
  if (guild && guild.channels.cache.get('933337945442779157')) {
    guild.channels.cache.get('933337945442779157').send('Hallo @everyone! Ich wünsch euch allen ein super Tag und viel Glück da draussen 😘🔥💪');
  }
}, null, true, 'Europe/Zurich');
job.start();


//Timed Good Night Message
var CronJob = require('cron').CronJob;
var job = new CronJob('00 30 23 * * 1-5', function() {
  console.log('Timed Good Night Message sent.');
  var guild = client.guilds.cache.get('933337944712949782');
  if (guild && guild.channels.cache.get('933337945442779157')) {
    guild.channels.cache.get('933337945442779157').send('Ab ins Bett @everyone! Es ist 23:30! Hopp Hopp Morgen ist Schule!');
  }
}, null, true, 'Europe/Zurich');
job.start();

//Timed Good Night Message for Sunday
var CronJob = require('cron').CronJob;
var job = new CronJob('00 30 23 * * 0', function() {
  console.log('Timed Good Night Message sent. (sunday)');
  var guild = client.guilds.cache.get('933337944712949782');
  if (guild && guild.channels.cache.get('933337945442779157')) {
    guild.channels.cache.get('933337945442779157').send('Ab ins Bett @everyone! Es ist 23:30! Hopp Hopp Morgen ist wieder Schule!');
  }
}, null, true, 'Europe/Zurich');
job.start();

```



