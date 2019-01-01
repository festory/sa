const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

const girismesaj = [
  '**Monster Army Sunucunuza Eklendi!**',
  '**Monster Army** sunucunuzdaki insanlara kolaylıklar sağlar.',
  'Bot Kaan Göztepe tarafından geliştirilmektedir!',
  'Botumuzun özelliklerini öğrenmek için .yardım komutunu kullanabilirsin.',
  '',
  `**Monster Army Discord Sunucusu** https://discord.gg/Uk6nqEZ`
]

client.on('guildCreate', guild => {
    const generalChannel = guild.defaultChannel
    generalChannel.sendMessage(girismesaj)
	client.user.setGame(prefix + 'yardım | ' + client.guilds.size + ' sunucu | ' + client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + ' kullanıcı');
})
