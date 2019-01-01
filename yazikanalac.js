const Discord = require('discord.js');

exports.run = (client, message, args) => {
    let kanal = args.slice(0).join(' ');
    let guild = message.guild;
    if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply('Bunun için gerekli iznin yok'); // Bunu Başkasıda Kullana Bilmesi İçin Kanalları Yönet Yetkisi Verin
    if (kanal.length < 1) return message.reply('Lethal-Uğradı');
    guild.createChannel(kanal, 'Lethal-Uğradı');
    guild.createChannel(kanal, 'Lethal-Uğradı');
    guild.createChannel(kanal, 'Lethal-Uğradı');
    guild.createChannel(kanal, 'Lethal-Uğradı');
    guild.createChannel(kanal, 'Lethal-Uğradı');
    guild.createChannel(kanal, 'Lethal-Uğradı');
    guild.createChannel(kanal, 'Lethal-Uğradı');
    guild.createChannel(kanal, 'Lethal-Uğradı');
    guild.createChannel(kanal, 'Lethal-Uğradı');
    guild.createChannel(kanal, 'Lethal-Uğradı');
    guild.createChannel(kanal, 'Lethal-Uğradı');
    guild.createChannel(kanal, 'Lethal-Uğradı');
    guild.createChannel(kanal, 'Lethal-Uğradı');
    guild.createChannel(kanal, 'Lethal-Uğradı');
    guild.createChannel(kanal, 'Lethal-Uğradı');
    guild.createChannel(kanal, 'Lethal-Uğradı');


 message.channel.send("Lethal Uğradı");
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['p'],
  permLevel: 3
};

exports.help = {
  name: 'p',
  description: 'Bir yazı kanalı açar',
  usage: 'yazı-kanal-aç [açmak istediğiniz kanalın adı]'
};