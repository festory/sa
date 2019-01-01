const Discord = require('discord.js');

exports.run = async(client, message, args) => { 
const emoji1 = message.client.emojis.get('480442327555637248');
const emoji2 = message.client.emojis.get('480441425532813313');
const emoji3 = message.client.emojis.get('480441425532813313');
const emoji4 = message.client.emojis.get('480437539698769922');
const emoji5 = message.client.emojis.get('479317126017187861');
const emoji6 = message.client.emojis.get('480445499204304897');
const emoji7 = message.client.emojis.get('480440881653088277');
      let isEnabled;
      message.reply("Monster Army Canlı Destek Komutunu Kullandığınız İçin Teşekkürler.");
      let mesaj = args.slice(0).join(' ');
      let chan = message.channel;
      let destekKanal = "511523358752374797";
      const embed = new Discord.RichEmbed()
        .addField('Uyarı', `${emoji1} Canlı Destek Çağrısı`)
        .setAuthor(`${message.author.tag} (${message.author.id})`, `${message.author.avatarURL}`)
        .setColor("RANDOM")
        .addField(`Bilgiler`, `**Sunucu**: ${message.guild.name} (${message.guild.id}) \n**Kanal**: ${message.channel.name} (${message.channel.id}) \n**Destek İsteyen**: ${message.author.tag} (${message.author.id}) \n**Destek Mesajı**: ${mesaj}`)
        .setFooter("Monster Army Canlı Destek Sistemi")
        .setTimestamp()
      client.channels.get(destekKanal).send({
        embed: embed
      });
    const collector = client.channels.get(destekKanal).createCollector(message => message.content.startsWith(''), {
      time: 0
    })
    client.channels.get(destekKanal).send(`${emoji2}` + ' Destek çagrısı bağlanmak için `katıl` yazınız. İptal Etmek İçin `kapat` yazınız.')
    collector.on('message', (message) => {
      if (message.content === 'kapat') collector.stop('aborted')
      if (message.content === 'katıl') collector.stop('success')
    })
    collector.on('end', (collected, reason) => {
      if (reason === 'time') return message.reply(`${emoji4}` +'Çagrı zaman aşımına uğradı.')
      if (reason === 'aborted') {
        message.reply(`${emoji3}` +'Çağrı reddedildi.')
        client.channels.get(destekKanal).send(`${emoji3}` +'Başarıyla çağrı reddedildi.')
      }
      if (reason === 'success') {
        client.channels.get(destekKanal).send(`${emoji5}` +'Destek çagrısı alındı!')
        client.channels.get(destekKanal).send(`${emoji2}` +'Destek çağrısını kapatmak için `kapat` yazınız.')
        chan.send(`${message.author}`)
        chan.send(`${emoji7}` +'Çağrınız bir destek yetkilisi tarafından alındı!')
        chan.send(`${emoji4}` +'En Yakın Zamanda Size Yardımcı Olacagız.')
        chan.send(`${emoji2}` +'Destek çagrısı kapatmak için `kapat` yazınız.')
        isEnabled = true
        client.on('message', message => {
          function contact() {
            if (isEnabled === false) return
            if (message.author.id === client.user.id) return
            if (message.content.startsWith('kapat')) {
              message.channel.send(`${emoji3}` +'Çağrı Kapatıldı.')
              if (message.channel.id === chan.id) client.channels.get(destekKanal).send(`${emoji3}` +'Çağrı karşı taraftan kapatıldı.')
              if (message.channel.id === destekKanal) chan.send(`${emoji3}` +'Çağrı karşı taraftan kapatıldı.')

              return isEnabled = false
            }
            if (message.channel.id === chan.id) client.channels.get(destekKanal).send(`${emoji6}` +`**${message.author.tag}**: ${message.content}`)
            if (message.channel.id === destekKanal) chan.send(`${emoji6}` +`**${message.author.tag}**: ${message.content}`)
          }
          contact(client)
        })
      }
    })
}
exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: ['canlıdestek'],
  permLevel: 0 
};

exports.help = {
  name: 'canlıdestek',
  ad: 'Canlı Destek', 
  description: 'Canlı destek ekibi ile iletişime geçersin.',
  usage: 'canlıdestek'
}; 