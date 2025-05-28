require("./all/module.js")

//========== Setting Owner ==========//
global.owner = "6283856752850"
global.namaowner = "FAA STORE"

//======== Setting Bot & Link ========//
global.namabot = "FAA STORE" 
global.idsaluran = "FAA STORE"
global.linkgc = 'https://chat.whatsapp.com/Eh3gfYMWEQmAPYgIDqT7pE'
global.packname = "BOT BY FAA"
global.author = "FAA STORE"

//==== Waktu Jeda Jpm & Pushkon ====//
global.delaypushkontak = 5000

//========= Setting Url Foto =========//
global.image = "https://t1.pixhost.to/thumbs/5378/593401890_20250424_141012.jpg"

//========= Setting Message =========//
global.msg = {
"error": "error",
"done": "done", 
"wait": "wait", 
"group": "group only", 
"private": "private only", 
"admin": "admin only", 
"adminbot": "admin bot only", 
"owner": "owner only", 
"developer": "developer only"
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})