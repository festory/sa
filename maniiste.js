exports.run = async (client, msg, args) => {
  let mani=[
    "",
    "Gökyüzünün melekleri \nDevran eder felekleri\nBu ayda ikram edenin\nZayi olmaz emekleri",
    "Göz aydın hepimize\n Mübârek günler bize \nOnbir ayın sultanı\nHoş geldin evimize.",
    "Günâhın olsa yığın\n Yine de O’na sığın.\nGazabından fazladır\nRahmeti Allahımın.",
    "Hakk’ın bize ihsanısın\n Hem ayların sultanısın\nSen bir saadet kânısın\n Ey mâhı sultan merhaba.",
    "Herkes sabırla bekler\nZayi olmaz emekler\nİftara geliyoruz.\nHazırlansın yemekler.",
    "Inananlar oruç tutar\nGönüller hep bir atar\n Sevinir hep müminler\nAllah diyenler artar.",
    "masa üstünde pekmez\nbu pekmez bana yetmez \nbenim süsüme yetmez",
    "emeğin var üstümde\nson günüm yanımda \nhelali hoş eyle \nCANIM ANAM BENİM ANAM.",
    "karanfilim dalım yok\nben küçüğüm yarim yok \nbana yar sevdi derler \nvalla haberim yok",
    "Kuyu başı beklerimm\nVay benim emeklerim\nYar aklıma gelince\nSIZLAR KEMİKLERİM.",
    "suya bulgur ezerim\nhem ezer hem süzerim \nben yarimin derdinden \ndeli olmuş gezerim.",
    "Dersimiz matematik,\nMakinamız otomatik,\nGeriye ne kaldı,\nSende söyle bir teknik.",
    "Dağda erik ağacı\nBaktım tadı çok acı\nSensiz geçen günlerim\nBana zehirden acı",
    "Motor geliyor motor,\nÇiftlik motoru mudur?\nTakınmış gözlükleri,\nSevda doktoru mudur?",
    "beyaz giyme toz olur\nkara giyme söz olur\nen iyi yeşil giy\nkavuşmamız tez olur"

  ]
    let member = msg.mentions.members.first()
   if(!member)return msg.channel.send({embed: {
 color: Math.floor(Math.random() * (0x00CC99 + 1)),
 description: (':no_entry_sign: Ya Birisini Etiketle.')
}});



  else{
  msg.channel.send({embed: {
 color: Math.floor(Math.random() * (0xFFFFFF + 1)),
 description: (`${member} ${mani[Math.floor(Math.random() * 16)]}.`)
  }})
  }


}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
 };

exports.help = {
  name: 'mani',
  description: 'Rastgele Bir Mani Gönderir.',
  usage: 'mani'
 }
