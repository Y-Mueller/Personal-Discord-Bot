const { Client, Intents } = require('discord.js');
const { MessageEmbed } = require('discord.js');
const cron = require('cron');
const fs = require("fs");
const path = require('path');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.DIRECT_MESSAGES, Intents.FLAGS.GUILD_PRESENCES, Intents.FLAGS.GUILD_VOICE_STATES,] });

const botPrefix = "$"


var botname = "Steve"

const token = "YOUR_BOT_TOKEN_HERE";

const express = require('express');
const app = express();
const port = 3000;
app.get('/', (req, res) => res.send("vallah if you see this, vallahi everythings good!"));
app.listen(port, () => console.log(`${botname} connected to http://localhost:${port}! LETS GO`));

client.on('ready', () => {
  console.log('Status is working fine!')
  client.user.setActivity(`Minecraft`, { type: "PLAYING" })
  client.user.setPresence({ status: 'dnd' })

});

//USER IDS
const JeremysID = '513335497007824907';
const RubensID = '589458623957172267';
const TimosID = '610487032376066050';
const IgorsID = '535843378412257294';
const JansID = '555070664718024704';
const YungsID = '605760781664911380';

//Timed Good Morning Message
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


var CronJob = require('cron').CronJob;
var job = new CronJob('00 30 23 * * 0', function() {
  console.log('Timed Good Night Message sent. (sunday)');
  var guild = client.guilds.cache.get('933337944712949782');
  if (guild && guild.channels.cache.get('933337945442779157')) {
    guild.channels.cache.get('933337945442779157').send('Ab ins Bett @everyone! Es ist 23:30! Hopp Hopp Morgen ist wieder Schule!');
  }
}, null, true, 'Europe/Zurich');
job.start();


//AUTORESPONDER
client.on('messageCreate', (message) => {
  if (message.content.toLowerCase() === 'i win') {
    const user = message.mentions.users.first() || message.author;
    console.log(`${user} triggered autoresponder \`i win\``);
    message.channel.send({ content: 'no you dont' });
  }
  if (message.content.toLowerCase() === 'salat') {
    const user = message.author.username || message.author;
    console.log(`${user} triggered autoresponder \`salat\``);
    message.channel.send({ content: 'https://www.gutekueche.at/storage/media/recipe/38982/conv/gruner-salat-mit-barlauch_1496830537-default.jpg' })
  }
  if (message.content === 'Lewis Hamilton is the GOAT💜') {
    const user = message.author.username || message.author;
    console.log(`${user} triggered autoresponder \`Lewis Hamilton is the GOAT💜\``);
    const exampleEmbed = new MessageEmbed()
      .setColor('#259797')
      .setTitle('Stats')
      .setDescription('WM-Bilanz:\nWeltmeister (2008, 2014, 2015, 2017, 2018, 2019, 2020)\nStarts: 288\nSiege: 103\nPoles: 103\nSR: 59\nWM-Punkte: 4165,5\nPodestplätze: 182\nFührungsrunden:\n 5.392 über 27.460,5 km')
      .setThumbnail('https://cdn.discordapp.com/emojis/930850546921902170.webp?size=96&quality=lossless')
    message.channel.send({ embeds: [exampleEmbed] });
  }
  if (message.content.toLowerCase() === '<:mercedes:930850546921902170>') {
    const exampleEmbed = new MessageEmbed()
      .setColor('#259797')
      .setTitle('Mercedes-AMG Petronas Formula One Team.')
      .setDescription('The only Constructor with 8 consecutive Constructor Championships💜❤️💙🇬🇧🇩🇪🇫🇮 <:mercedes:930850546921902170>')
      .setThumbnail('https://cdn.discordapp.com/emojis/930850546921902170.webp?size=96&quality=lossless')
    message.channel.send({ embeds: [exampleEmbed] });
  }
  if (message.content.toLowerCase() === 'kek') {
    const user = message.author.username || message.author;
    console.log(`${user} triggered autoresponder \`kek\``);
    message.channel.send({ content: '<a:kek:933007522539909141>' })
});

//commmands
client.on('messageCreate', message => {
  if (!message.content.startsWith(botPrefix) || message.author.bot) return;
  const args = message.content.slice(botPrefix.length).split(/ +/);
  const command = args.shift().toLowerCase();
  if (command === 'gayrate') {
    const user = message.author.username || message.author;
    console.log(`${user} triggered command \`gayrate\``);
    var gayrate = Math.floor(Math.random() * 100) + 1;
    if (gayrate < 30) {
      message.channel.send({ content: `Du bist ${gayrate}% gay! Das geht noch! lol` })
    }
    if (gayrate > 30) {
      message.channel.send({ content: `Du bist ${gayrate}% gay! OHA wann outest du dich?` });
      message.channel.send({ content: `<:gay:933003733271461969>` });
    }
  }
  if (command === 'simprate') {
    const user = message.author.username || message.author;
    console.log(`${user} triggered command \`simprate\``);
    var simprate = Math.floor(Math.random() * 100) + 1;
    if (simprate < 50 && message.author.id !== JansID) {
      message.channel.send({ content: `Du bist zu ${simprate}% ein simp!! Das geht noch! lol` });
    }
    else if (message.author.id === JansID && simprate < 50) {
      message.channel.send({ content: `Du bist zu ${simprate}% ein simp!! Das ist eine Lüge Jan` });
      message.channel.send({ content: '<:doggo:933321185226276945>' })
    }
    if (simprate > 50 && message.author.id !== JansID) {
      message.channel.send({ content: `Du bist zu ${simprate}% ein Simp!! erinnerst mich an <@555070664718024704>, looool.` });
    }
    else if (message.author.id === JansID && simprate > 50) {
      message.channel.send({ content: `Du bist zu ${simprate}% ein Simp! war ja klar Jan.` })
      message.channel.send({ content: '<:smirk:933327430968573992>' })
    }
  }
  if (command === 'ping') {
    const user = message.author.username || message.author;
    console.log(`${user} triggered command \`ping\``);
    message.channel.send({ content: `Pong ${Date.now() - message.createdTimestamp}ms. <a:loading2:932399047740911636>` });
  }
  if (command === 'av' || command === 'avatar') {
    const user = message.mentions.users.first() || message.author;
    const user1 = message.author.username;
    console.log(`${user1} triggered command \`av || avatar\``);
    const avatarEmbed = new MessageEmbed()
      .setColor(0x333333)
      .setAuthor(user.username)
      .setImage(user.displayAvatarURL({ dynamic: true, size: 256 }))
    message.channel.send({ embeds: [avatarEmbed] })
  }
  if (command === 'nick') {
    const user = message.mentions.users.first() || message.author;
    const user1 = message.author.username;
    console.log(`${user1} triggered command \`nick\``);
    if (message.content === '$nick') {
      message.channel.send({ content: `Bro... \`$nick\` _ __Dein Nickname__ _.` })
      return;
    }
    message.member.setNickname(message.content.replace('$nick ', ''));
    message.channel.send({ content: 'Nickname erfolgreich geändert!' })
  }
  if (command === 'resetnick') {
    const user = message.author.username || message.author;
    console.log(`${user} triggered command \`resetnick\``);
    if (!message.member.nickname) return message.channel.send({ content: "Alter du hast nichtmal einen nickname, was willst du resetten???." });
    message.member.setNickname("").then(member => {
      message.channel.send({ content: "Nickname wurde zurückgesetzt." });
    }).catch(e => {
      console.log(e);
      message.channel.send({ content: "ups, irgendwas ist schief geloffen...umm warte, ich ping mal kurz yung" });
      message.channel.send({ content: `<@${YungsID}>` })
    })
  }
  if (command === 'help') {
    const user = message.author.username || message.author;
    console.log(`${user} triggered command \`help\``);

    const exampleEmbed = new MessageEmbed()
      .setColor('#0099ff')
      .setTitle('𝚈𝚞𝚗𝚐𝚜 𝙴-𝙶𝚒𝚛𝚕')
      .setAuthor({ name: '⁺ yungbeatz', iconURL: 'https://cdn.discordapp.com/avatars/605760781664911380/a_26b930ec44b511971d0770acc3635ffe.gif', url: 'https://cdn.discordapp.com/avatars/605760781664911380/a_26b930ec44b511971d0770acc3635ffe.gif' })
      .setDescription('Ich weiss selber nicht warum ich diesen Bot gemacht hab. Während ich diese Nachricht schreibe ist es <t:1642206222:F> also jaaaaaa.')
      .setThumbnail('https://cdn.discordapp.com/avatars/920285881338843146/c560fb0b2df78147e6641853aa3e8d87.png?size=4096')
      .addFields(
        { name: '<:cmd:932999035831353377> COMMANDS', value: '_ _' },
        { name: ':chart_with_upwards_trend: Raters', value: '➜ `$gayrate`\n➜ `$simprate`' },
        { name: ':globe_with_meridians: Sources', value: '➜ `$suicide`' },
        { name: '<:info:932999652125585540> User CMD\'s', value: '➜ `$av`\n➜ `$nick`\n➜ `$resetnick`' },
        { name: '<:yung:932981081689432144> Affection', value: '➜ `$hug`' },
        { name: '<:devicon:932999900449357885> Misc', value: '➜ `$ping`\n➜ `$help`' }
      )
      .setFooter({ text: '⁺ yungbeatz', iconURL: 'https://cdn.discordapp.com/avatars/605760781664911380/a_26b930ec44b511971d0770acc3635ffe.gif' });
    message.channel.send({ embeds: [exampleEmbed] });
  }
  if (command === 'suicide') {
    const user = message.author.username || message.author;
    console.log(`${user} triggered command \`suicide\``);
    const exampleEmbed = new MessageEmbed()
      .setColor('#0099ff')
      .setTitle('Yooo Chill mal!')
      .setDescription('Hold up bro! Ist es so schlimm das du schon zu diesen Mitteln greifen musst? Überlegs dir gut, vielleicht reicht es mal mit <@589458623957172267> zu reden, immerhin hat er schon **ZWEI MÄDCHEN** aus der Depression geholt!\nNützt aber auch das nicht hab ich dir einpaar nützliche Links unten verlinkt. <3')
      .setThumbnail('https://c.tenor.com/QSFMj0VddAQAAAAM/hold-on-wait-a-minute.gif')
      .addFields(
        { name: 'Suicide Lines', value: '**La Main Tendue**\nHotline: `143`\nWebsite: https://143.ch\nE-mail Helpline: `verband@tel-143.ch`\n**PARSPAS**\nHotline: `+41 (0) 27 321 21 21`\nWebsite: https://parspas.ch' },
      )
      .setFooter({ text: '⁺ yungbeatz', iconURL: 'https://cdn.discordapp.com/avatars/920285881338843146/c560fb0b2df78147e6641853aa3e8d87.png?size=4096' });
    message.channel.send({ embeds: [exampleEmbed] });
  }
  if (command === 'revive') {
    const user = message.mentions.users.first() || message.author;
    const user1 = message.author.username
    console.log(`${user1} triggered command \`revive\``);
    message.channel.send({ content: `KOMMT HER @everyone!!! ${user} WILL REDEN!!' })
  }
  if (command === 'topic') {
    const user = message.author.username || message.author;
    console.log(`${user} triggered command \`topic\``);
    let { topics } = require("./topics.json")
    const topic = topics[Math.floor(Math.random() * topics.length)];
    const topicEmbed = new MessageEmbed()
      .setColor('#0099ff')
      .setTitle('Random Topic')
      .setDescription(topic)
      .setThumbnail('https://cdn.discordapp.com/avatars/920285881338843146/c560fb0b2df78147e6641853aa3e8d87.png?size=4096')
      .setFooter({ text: '⁺ yungbeatz', iconURL: 'https://cdn.discordapp.com/avatars/920285881338843146/c560fb0b2df78147e6641853aa3e8d87.png?size=4096' });
    message.channel.send({ embeds: [topicEmbed] });
  }

  if (command === 'hug') {
    const user1 = message.author.username;
    const user = message.author;
    console.log(`${user1} triggered command \`hug\``);
    const mentioned_user = message.mentions.users.first()
    if (message.content === '$hug') {
      message.channel.send('Bro... `$hug @username`....`')
      return;
    }
    if (message.content === '$hug @everyone' || message.content === '$hug @here') {
      message.channel.send('Alter? Das ist illegal.')
      return;
    }
    let { hugs } = require("./hug_gifs.json")
    const hug = hugs[Math.floor(Math.random() * hugs.length)];
    const hugEmbed = new MessageEmbed()
      .setColor('#000000')
      .setDescription(`**${user} gives a big hug to ${mentioned_user}**`)
      .setImage(hug)
      .setFooter({ text: 'so cute omggg! <33', iconURL: 'https://cdn.discordapp.com/emojis/649382052076060673.webp?size=96&quality=lossless' });
    message.channel.send({ embeds: [hugEmbed] });
  }
  if(command === 'search'){
    if(message.content === '$search porn'){
      message.channel.send('nein') 
      return;
    }
    const embed = new MessageEmbed()
        .setTitle("Google Search Results")
        .setColor(3426654)
        .setTimestamp()
        .setThumbnail('https://c.tenor.com/HIc93FPnB8QAAAAS/egirl-pfp.gif')    

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




//EMOJI REACTION TO CERTAIN USERS
client.on('messageCreate', async message => {
  if (message.author.id === JeremysID) {
    try {
      await message.react('🇨🇭');
    } catch (err) {
      console.error(err);
    }
  }
  if (message.author.id === RubensID) {
    try {
      await message.react('💜')
    } catch (err) {
      console.error(err);
    }
  }
  if (message.author.id === YungsID) {
    try {
      await message.react('<:yung:933487374011338783> ')
    } catch (err) {
      console.error(err);
    }
  }
});
client.login(token);

