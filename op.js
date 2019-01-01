const Discord = require('discord.js');

exports.run = (client, message, args) => {
	let mesaj = args.slice(0).join(' ');
	if (mesaj.length < 1) return message.reply('**Kimi Öpeceğini Yazmalısın!**');
    const embed = new Discord.RichEmbed()
    .setAuthor('Öpme')
    .setColor(3447003)
    .setTimestamp()
    .setDescription(`** ${mesaj} , ` + message.author.username + ' Tarafından öpüldı**')
		.setImage(`https://media1.giphy.com/media/1iI8oGycTjig/giphy.gif`)                            
		.setFooter('SonSöz')
    return message.channel.sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['öp'],
  permLevel: 0
};

exports.help = {
  name: 'öpme',
  description: 'Seçtiğin Kullanıcıyı Öper!',
  usage: 'öpme'
};
