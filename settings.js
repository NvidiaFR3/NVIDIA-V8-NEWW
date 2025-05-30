/* 

=========================================================================

  #- Credits By FR3 HOSTING
   Contact: https://62882008771872
    
  Developer : https://wa.me/62882008771871
  
  -[ ! ]- Jangan hapus contact developer! hargai pembuat script ini

=========================================================================

*/

const fs = require('fs');
const chalk = require('chalk');
const { version } = require("./package.json")

// Settings Bot 
global.owner = '62882008771871'
global.versi = version
global.namaOwner = "FR3 HOSTING"
global.packname = 'FR3 HOSTING'
global.botname = 'NvidiaBotz' // Jangan Ubah
global.botname2 = 'NvidiaBotz'

global.tempatDB = 'database.json' // Jangan ubah
global.pairing_code = true // Jangan ubah
global.dev = '62882008771871' // jangan ubah

// Settings Link / Tautan
global.linkOwner = "https://wa.me/62882008771871"
global.linkWebsite = "https://fr3-host.github.io/home"
global.linkGrup = "https://chat.whatsapp.com/Crk0eS20MADKkFbe4EnNIs"

// Delay Jpm & Pushctc || 1000 = 1detik
global.delayJpm = 3500
global.delayPushkontak = 2000

// Settings Channel / Saluran
global.linkSaluran = "https://whatsapp.com/channel/0029Vb0fOlxEFeXsah2fi31y"
global.idSaluran = "120363380080841414@newsletter"
global.namaSaluran = "ALL CH FR3"

global.merchantIdOrderKuota = "OK1411540"
global.apiOrderKuota = "572272217330500471411540OKCTC30AF47601ADFFA26974F246D8AC31B9"
global.qrisOrderKuota = "00020101021126670016COM.NOBUBANK.WWW01189360050300000879140214737303604511730303UMI51440014ID.CO.QRIS.WWW0215ID20233008497000303UMI5204541153033605802ID5919TOKO LUXZ OK14115406009BENGKALIS61052871162070703A01630497DB"

// isi link adepeh lu
global.linkgbbuypublic =
"https://chat.whatsapp.com/IEgOzVyQyf07lckS4i3pz9"
global.linkgcreseller = "https://chat.whatsapp.com/KjqW7uDN4oSKTZCJQR7Xio"

// Settings Api Digital Ocean
global.apiDigitalOcean = "-"

// Settings Api (jangan di ubah)
global.apiSimpelBot = "FR3host"
global.ApikeyRestApi = "new" 

// Settings All Payment
global.dana = "0882008771871" 
global.ovo = "Tidak Tersedia"
global.gopay = "0882008771871"

// Settings Image Url
global.image = {
menu: "https://img1.pixhost.to/images/5781/598960949_fr3hosting.jpg", 
reply: "https://img1.pixhost.to/images/5781/598960949_fr3hosting.jpg", 
logo: "https://img1.pixhost.to/images/5781/598960949_fr3hosting.jpg", 
dana: "./media/dana.jpg", 
ovo: "./media/ovo.jpg", 
gopay: "./media/gopay.jpg", 
qris: "./media/qris.jpg"
}

//~~~~~~~~~~~~~~~ [Seting Panel] ~~~~~~~~~~~~~~~~//

// Settings Api Panel Pterodactyl
global.egg = "15" // Egg ID
global.nestid = "5" // nest ID
global.loc = "1" // Location ID
global.domain = "https://reseller-xnnx.fr3serv.my.id" //domain
global.apikey = "ptla_156ldJqgIbzCKIgw9UO4vs7l05ey5hXj33HeguINaK2" //ptla
global.capikey = "ptlc_cjU3wqTEsqdSBaAUODBeWLO7EEtqTs8nbuErHcshu5c" //ptlc


// Settings Api Panel Pterodactyl Server 2
global.eggV2 = "15" // Egg ID
global.nestidV2 = "5" // nest ID
global.locV2 = "1" // Location ID
global.domainV2 = "https://apist.fr3serv.my.id" //domain
global.apikeyV2 = "ptla_zdvMVUArJyvy1mqgLzA39e3u9gNBt98yCPPT5hbCm7z" //ptla
global.capikeyV2 = "ptlc_o2fkErDKsAbtTUXaAsZhxnwC9NGFReU2S36arIVaLTE" //ptlc

// Settings Api Panel Pterodactyl Server 3
global.eggV3 = "15" // Egg ID
global.nestidV3 = "5" // nest ID
global.locV3 = "1" // Location ID
global.domainV3 = "https://dimz.tokopanelmurah.biz.id" //domain
global.apikeyV3 = "ptla_F6bYrzRK72sWFS4XeGcccs9h8XfDYixAkokBsinxMyg" //ptla
global.capikeyV3 = "ptlc_1S31BBKj73wDN6ZSwvooSW0gU0Sr2DeI1X1lxO6aTP2" //ptlc

// Settings Api Panel Pterodactyl Server 4
global.eggV4 = "15" // Egg ID
global.nestidV4 = "5" // nest ID
global.locV4 = "1" // Location ID
global.domainV4 = "_" //domain
global.apikeyV4 = "_" //ptla
global.capikeyV4 = "_" //ptlc

// Settings Api Panel Pterodactyl Server 5
global.eggV5 = "15" // Egg ID
global.nestidV5 = "5" // nest ID
global.locV5 = "1" // Location ID
global.domainV5 = "_" //domain
global.apikeyV5 = "_" //ptla
global.capikeyV5 = "_" //ptlc

// Settings Api Subdomain
global.subdomain = {
"fr3serv.my.id": {
"zone": "65a88f5deee3629dcf7ca40493a06f22",
"apitoken": "vP0oD4FGJBpHvDKZGZFIq0Cb2fRcGV5RppLcvug5"
},
"tokopanelmurah.biz.id": {
"zone": "a08b53cf7ce5f763e58b395eb3889bca", 
"apitoken": "3KG8jYVrZq31l-rrmpYDMayHDJn2KUEcLQK9UVQC"
} 
}

// Settings Api Key Orkut
global.virtu = "bfO7oT3pkqWIGQvMy2rVAiwKNcSCxm"  //Seting Apikey Mu

// Message Command 
global.mess = {
	owner: "* *Akses Ditolak*\nFitur ini hanya untuk FR3 HOSTING!",
	admin: "* *Akses Ditolak*\nFitur ini hanya untuk admin grup!",
	botAdmin: "* *Akses Ditolak*\nFitur ini hanya untuk ketika bot menjadi admin!",
	group: "* *Akses Ditolak*\nFitur ini hanya untuk dalam grup!",
	private: "* *Akses Ditolak*\nFitur ini hanya untuk dalam private chat!",
	prem: "* *Akses Ditolak*\nFitur ini hanya untuk user premium!",
	wait: 'Loading...',
	error: 'Error!',
	done: 'Done'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})