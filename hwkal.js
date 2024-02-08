// Buat Lu Yang Jual Sc Ini Yang Jujur Jangan Samp Nipu Apalagi Lari Dari Tanggung Jawab dekk 

//==============[ By Always Ziyo Tzy ]==========//

const fs = require('fs')
const chalk = require('chalk')
//=============[ ----- ]============//

//==========================//
global.gr = 'yudamods.github.io' // gausah di ubah :v
global.wagc = "https://whatsapp.com/channel/0029VaMSKgiCHDyezAI9yV14" // yg ini silahkan ubah
global.ig = '@ziyoo' // ubah aja
global.email = 'yudamodz@gmail.com' //serah
global.region = 'indonesia' // serah
global.domain = '_' // Isi Domain Lu
global.apitokendo = '_' // isi api token yg valid
global.apikey = '_' // Isi Apikey Plta Lu
global.capikey = '_' // Isi Apikey Pltc Lu
global.eggsnya = '15' // id eggs yang dipakai
global.location = '62' // id location
global.domainotp = "-" // Isi Sendiri
global.apikeyotp = "" // Isi Sendiri
global.ownername = 'YUDAMODS' //ubah jadi nama mu, note tanda ' gausah di hapus!
//=================================================//
global.owner = ['6283842204546'] // ubah aja pake nomor lu
//==========================[BY Hw Mods]=======================//
global.keyopenai = ''
//====================[ BY Hw Mods]=============================//
global.botname = 'Hw v24' //ubah jadi nama bot mu, note tanda ' gausah di hapus!
global.packname = 'sticker' // ubah aja ini nama sticker
global.author = 'Mods is here !!' // ubah aja ini nama sticker
global.prefa = ['','!','.',',','🐤','🗿']
global.sessionName = 'haikal' //Gausah Juga
global.sp = '⭔' // Gausah Juga
global.wlcm = []
global.wlcmm = []
global.anticall = true
//=================================================//
//Gausah Juga
global.limitawal = {
    premium: "Infinity",
    free: 100
}
// taaofc
global.thum = fs.readFileSync("./baseikal/image/thum.jpeg") 
global.good = fs.readFileSync("./baseikal/image/good.jpeg") 
global.vidmenu = fs.readFileSync("./baseikal/video/mainmenu.mp4")
//=========================[ BATAS COOEG ]========================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})