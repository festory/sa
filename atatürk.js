const Discord = require('discord.js');
exports.run = function(client, message, args) {
  const embed = new Discord.RichEmbed()
  .setAuthor("Atatürk")
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor(0x00AE86)
  .setImage("https://img-s1.onedio.com/id-571f39756598bfb75c221250/rev-0/w-635/f-jpg-gif-webp-webm-mp4/s-a7e6b03d1781112e86b8a555efeb6a6f475c34a1.gif")
  .setFooter("©️ 2018 |Monster Army", "https://i.hizliresim.com/pn7Vvr.jpg")
  /*
   * Takes a Date object, defaults to current date.
   */

  message.channel.send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'atatürk',
  description: 'Botun pingini gösterir.',
  usage: 'saygı'
};