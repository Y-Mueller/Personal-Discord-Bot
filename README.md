# Personal-Discord-Bot
Personal Discord Bot handcrafted with love! ![](https://cdn.discordapp.com/emojis/649382052076060673.webp?size=16&quality=lossless)

**NOTE**: This Bot runs right now on [replit](https://replit.com). (Dont confuse yourself with [this](https://github.com/yungbeatz/Personal-Discord-Bot/blob/main/src/.replit) file.)

### My best creation for this bot:
```js
  const { Client, Intents } = require('discord.js');
const { MessageEmbed } = require('discord.js');
const googleIt = require('google-it');
  
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
```



