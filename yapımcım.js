const Discord = require('discord.js');
exports.run = function(client, message, args) {
    message.channel.send({embed: {
        color: 0xD97634,
        description: "**Yapimcima ulasmak icin**; https://discord.gg/Uk6nqEZ"
		.setFooter("♥️ 2018 ♥ Monster Army ♥ BOT ♥️ 0.0.1 V ♥", "")
  }});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'yapımcım',
  description: 'Yapimcinin hakkında bilgi gösterir.',
  usage: 'yapimcim'
};