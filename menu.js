const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');

exports.run = (client, message) => {
  const embed = new Discord.RichEmbed()
  
  .setTitle("Ana Yemekler")
  .setAuthor("YEMEK MENUSU" , "https://img.monocle.com/radio/shows/the-menu-final-5718a9900140e.jpg?w=640&h=640")
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor("RANDOM")
  .setDescription('.hamburger\n')
  .setFooter("♥️ 2018 ♥ Monster Army ♥ BOT ♥️ 0.0.1 V ♥", "https://img.monocle.com/radio/shows/the-menu-final-5718a9900140e.jpg?w=640&h=640")
  .setThumbnail("https://img.monocle.com/radio/shows/the-menu-final-5718a9900140e.jpg?w=640&h=640")
 
  .setTimestamp()
  .addField("Meşrubatlar", ".çay\n", true)
  
  .addField("Ek seyler ", ".sigara \n", true)
  
 
  .addField("Yemek", ".çorba\n", true)
  
  .addField("Tatli", ".pasta\n", true)
  
  .addField("Salata", ".salata \n", true)
  

  message.channel.send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['menu,yemek,yemekmenu,'],
  permLevel: 0
};

exports.help = {
  name: 'menü',
  description: 'menu',
  usage: 'menü'
};
