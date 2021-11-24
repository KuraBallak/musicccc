const { Client, Collection, MessageEmbed } = require(`discord.js`);
const { 
  PREFIX, 
} = require(`../config.json`);

  


module.exports = {
  name: "help",
  aliases: ["h"],
  cooldown: 8,
  description: "**SnooBot Help**",
  execute(message) {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
    .setImage(`https://images-ext-1.discordapp.net/external/oyDRWRH1m1r_yoFxpNGLpthFvCjeWpmCR32AlAnyJig/https/share.creavite.co/4tQont7IqtvSAdv1.gif`)
    .setTitle(`**ProMusic Help**`)
    .setDescription(`

<a:discord:813406342173818910> | **User Commands**
> **\`invite(inv)\` • \`support\` • \`about\` • \`ping\` • \`prefix\` • \`uptime\` • \`se\` • \`avatar\` • \`serverinfo(sifo)\`**

<a:dark:813714900777959444> | **Music Commands**
> **\`play\` • \`skip\` • \`skipto\` • \`stop\` • \`volume\` • \`nowplaying\` • \`shuffle\` • \`search\` • \`resume\` • \`remove\` • \`queue\` • \`filter\` • \`loop\` • \`lyrics\` • \`radio\`**

<a:setting:813404135181385759> | **Fun Commands**
> **\`lock(l)\` • \`unlock(ul)\` • \`giveaway\` • \`bans\` • \`embed\` • \`slowmode\` • \`say\` • \`cv\`**

<:emoji_61:827114330608107531> | **Gif Commands**
> **\`boy\` • \`girl\` • \`anime\` • \`sad\` • \`hug\` • \`slap\`**

<🔗> | Links
[SUPPORT](https://discord.gg/GzXHT9BCpp)    -    [INVITE](https://discord.com/api/oauth2/authorize?client_id=894294802265411674&permissions=8&scope=bot)
`)

   .setFooter(`${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
   .setColor("#FF0000");
   message.react("✅")
    return message.channel.send(helpEmbed).catch(console.error);

  }
};
