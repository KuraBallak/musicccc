const { Client, Collection, MessageEmbed } = require(`discord.js`);
const {
  PREFIX,
  approveemoji,
  denyemoji
} = require(`../config.json`);
const db = require('quick.db');

module.exports = {
  name: "invite",
  aliases: ["inv"],
  cooldown: 1.5,
  description: "",
  execute(message) {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
   .setImage(`https://images-ext-1.discordapp.net/external/oyDRWRH1m1r_yoFxpNGLpthFvCjeWpmCR32AlAnyJig/https/share.creavite.co/4tQont7IqtvSAdv1.gif`)
   .setDescription("✅ **[Click here](https://discord.com/api/oauth2/authorize?client_id=894294802265411674&permissions=8&scope=bot) to invite the bot.**")
    .setColor("#FF0000")
   helpEmbed  
   message.react("✅")
    return message.channel.send(helpEmbed).catch(console.error);

  }
};
