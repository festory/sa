const Discord = require('discord.js');
const client = new Discord.Client();
const moment = require('moment');
const ayarlar = require('./ayarlar.json');
const snekfetch = require('snekfetch');
const superagent = require("superagent");
const chalk = require('chalk');
const fs = require('fs');
require('./util/eventLoader')(client);

var prefix = ayarlar.prefix;

const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
     props.conf.aliases.forEach(alias => {
    client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sa') {
    msg.reply('**Aleyküm Selam, Hoşgeldin**');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'merhaba') {
    msg.reply('Sanada Merhaba ^^');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'monster army') {
    msg.reply('Efendim?');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'botu değiştir') {
    msg.reply('Hayırrrr beni değiştirme lütfennnn yoksa ağlarımmmmm :sob:');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'siktir git') {
    msg.reply('Babana böyle hakaret etmeye utanmıyormusun hadi eyw.'); 
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'orospu çocuğu') {
    msg.reply('Bizim botlar şehrinde bir sözümüz vardır laf gelir dolaşır götüne girer. :)'); 
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'piç') {
    msg.reply('Yaa üzülme annen baban yok diye aç sussuz yaşıyorsun da başkasınada piç deme bari.'); 
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'bot anneni sikerim') {
    msg.reply('Dikkat et beni sikeceğine yanlışıkla annenin götüne nişan alma :)'); 
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'babanı sikerim') {
    msg.reply('Dikkat et beni sikeceğine yanlışıkla babanın götüne nişan alma :)'); 
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'of') {
    msg.reply('Ne oldu sana neden of luyorsun :confused:');  
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'naber') {
    msg.reply('İyidir moruk senden naber'); 
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'bendende iyidir moruk') {
    msg.reply('Ok bro'); 
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'bendende iyidir') {
    msg.reply('Ok bro'); 
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'bende iyiyim moruq') {
    msg.reply('Ok bro'); 
  }
});

client.on('message', msg => {
  if (msg.content === 'iyiyim') {
    msg.reply('İyi olmana gerçekten çok sevindim ^^');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'kudur') {
    msg.reply('Kudurmak asıl senin işindir ;) hadi şimdi kudurabilirsin.'); 
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'şerefsiz') {
    msg.reply('Bende pezevengim memnun oldum istersen seni pazarlıyabilirim. ;)'); 
  }
});

client.on('message', msg => {
  if (msg.content === 'kaan anneni sikerim') {
    msg.reply('Kurucuma küfür etmeye devam edersen olucakları sen düşün  : )');
  }
});

client.on('message', msg => {
  if (msg.content === 'geber') {
    msg.reply('Sen geber asıl :D');
  }
});
////////////////////////
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'amk') {
    msg.reply('Yazık Küfür Etmek Çok Kötü Birşey !');
	msg.react('🖕')
	msg.delete();
 }
});
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'Amk') {
    msg.reply('Yazık Küfür Etmek Çok Kötü Birşey !');
	msg.react('🖕')
	msg.delete();
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'AMK') {
    msg.reply('Yazık Küfür Etmek Çok Kötü Birşey !');
	msg.react('🖕')
	msg.delete();
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'aMK') {
    msg.reply('Yazık Küfür Etmek Çok Kötü Birşey !');
	msg.react('🖕')
	msg.delete();
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'oc') {
    msg.reply('Yazık Küfür Etmek Çok Kötü Birşey !');
	msg.react('🖕')
	msg.delete();
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'Oc') 
     {msg.reply('Yazık Küfür Etmek Çok Kötü Birşey !');
  if (msg.author.bot) return;
  if (msg.content.toLowerCase().includes('oc')) msg.reply('**Yazık Küfür Etmek Çok Kötü Birşey !**');
  if (msg.content.toLowerCase().includes('oruspu')) msg.reply('**Yazık Küfür Etmek Çok Kötü Birşey !**');
  if (msg.content.toLowerCase().includes('pic')) msg.reply('**Yazık Küfür Etmek Çok Kötü Birşey !**');
  if (msg.content.toLowerCase().includes('mk')) msg.reply('**Yazık Küfür Etmek Çok Kötü Birşey !**');
  if (msg.content.toLowerCase().includes('anan')) msg.reply('**Yazık Küfür Etmek Çok Kötü Birşey !**');
  if (msg.content.toLowerCase().includes('yarram')) msg.reply('**Yazık Küfür Etmek Çok Kötü Birşey !**');
  if (msg.content.toLowerCase().includes('yarrak')) msg.reply('**Yazık Küfür Etmek Çok Kötü Birşey !**');
  if (msg.content.toLowerCase().includes('amk')) msg.reply('**Yazık Küfür Etmek Çok Kötü Birşey !**');
  if (msg.content.toLowerCase().includes('top')) msg.reply('**Yazık Küfür Etmek Çok Kötü Birşey !**');
  msg.delete();
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'oç') {
    msg.reply('Yazık Küfür Etmek Çok Kötü Birşey !');
	msg.react('🖕')
	msg.delete();
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'Oç') {
    msg.reply('Yazık Küfür Etmek Çok Kötü Birşey !');
	msg.react('🖕')
	msg.delete();
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'OC') {
    msg.reply('Yazık Küfür Etmek Çok Kötü Birşey !');
	msg.react('🖕')
	msg.delete();
  }
});

client.on('message', msg => {
 if (msg.content.toLowerCase() === 'OÇ') {
    msg.reply('Yazık Küfür Etmek Çok Kötü Birşey !');
	msg.react('🖕')
	msg.delete();
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'pic') {
    msg.reply('Yazık Küfür Etmek Çok Kötü Birşey !');
	msg.react('🖕')
	msg.delete();
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'piç') {
    msg.reply('Yazık Küfür Etmek Çok Kötü Birşey !');
	msg.react('🖕')
	msg.delete();
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'Pic') {
    msg.reply('Yazık Küfür Etmek Çok Kötü Birşey !');
	msg.react('🖕')
	msg.delete();
  }
});

client.on('message', msg => {
    if (msg.content.toLowerCase() === 'Piç') {
    msg.reply('Yazık Küfür Etmek Çok Kötü Birşey !');
	msg.react('🖕')
	msg.delete();
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'PİC') {
    msg.reply('Yazık Küfür Etmek Çok Kötü Birşey !');
	msg.react('🖕')
	msg.delete();
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'PİÇ') {
    msg.reply('Yazık Küfür Etmek Çok Kötü Birşey !');
	msg.react('🖕')
	msg.delete();
  }
});

client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find('name', 'giris-cıkıs');
  if (!channel) return;
  const embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setAuthor(member.user.username, member.user.avatarURL)
  .setThumbnail(member.user.avatarURL)
  .setTitle('📤 | Sunucuya Katıldı | Hoşgeldin ')
  .setTimestamp()
  channel.sendEmbed(embed);
});

////////////////////////

client.on("guildMemberAdd", member => {
	
	var channel = member.guild.channels.find("name", "giriş-çıkış");
	if (!channel) return;
	
	var role = member.guild.roles.find("name", "üye");
	if (!role) return;
	
	member.addRole(role); 
	
	channel.send(member + " artık " + role + " rolü ile aramızda");
	
	member.send("Aramıza hoş geldin! Seni burda görmek ne güzel beni ekleyip grubumuza gelirmisin n\ işte davet linkim: https://discordapp.com/api/oauth2/authorize?client_id=508550163011469318&permissions=8&scope=bot n\ Buda grubum gelmeyi unutma :wink: https://discord.gg/Uk6nqEZ teşekkürler!")
	
});

client.login(ayarlar.token);