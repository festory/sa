const Discord = require('discord.js');
exports.run = function(client, message, args) {
	message.channel.send('**Yakıyom Baba Bekle... :smoking::fire:**')
      .then(embedmsg => embedmsg.edit('**Yakıyom Baba Bekle.. :smoking::fire:**'))
      .then(embedsmsg => embedsmsg.edit('**Yakıyom Baba Bekle. :smoking::fire:**'))
      .then(embedsmsg => embedsmsg.edit('**Yakıyom Baba Bekle :smoking::fire:**'))
	  .then(embedsmsg => embedsmsg.edit(':smoking: :cloud::cloud::cloud::cloud::cloud:'))
	  .then(embedsmsg => embedsmsg.edit(':smoking: :cloud::cloud::cloud::cloud:'))
	  .then(embedsmsg => embedsmsg.edit(':smoking: :cloud::cloud::cloud:'))
	  .then(embedsmsg => embedsmsg.edit(':smoking: :cloud::cloud:'))
	  .then(embedsmsg => embedsmsg.edit(':smoking: :cloud:'))
	  .then(embedsmsg => embedsmsg.edit('**Sigara Bitti :no_smoking:**'));

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'sigara',
  description: 'Sigara İçmeye Yarar.',
  usage: 'sigara'
};
