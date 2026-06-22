

//contact details
global.ownernomer = "𝟎𝟏𝟏𝟏𝟑𝟗𝟎𝟐𝟐𝟔𝟐"
global.dev = ["𝟎𝟏𝟏𝟏𝟑𝟗𝟎𝟐𝟐𝟔𝟐","𝟎𝟏𝟏𝟏𝟑𝟗𝟎𝟐𝟐𝟔𝟐"]
global.ownername = "ṂO"
global.ytname = "ṂO"
global.socialm = "GitHub: ṂO"
global.location = "Egypt, cairo, Ṃ₳ᚱ₲"

global.ownernumber = '𝟎𝟏𝟏𝟏𝟑𝟗𝟎𝟐𝟐𝟔𝟐'  //creator number
global.ownername = 'ṂO' //owner name
global.botname = 'Bot Crash  𝐕9 🌴' //name of the bot

//sticker details
global.packname = '\n\n\n\n\n\n\nSticker By'
global.author = 'ṂO ⚉\n\nContact: 01096937730'

//console view/theme
global.themeemoji = '🪀'
global.wm = "ṂO"

//theme link
global.link = 't.me/VIP_Mo101'
global.idch = '120363422217202244@newsletter'

global.baileysDB = 'baileysDB.json'
global.botDb = 'database.json'

//prefix
global.prefa = ['','!','.',',','🐤','🗿'] 

global.limitawal = {
    premium: "Infinity",
    free: 20
}

//menu type 
//v1 is image menu, 
//v2 is link + image menu,
//v3 is video menu,
//v4 is call end menu
global.typemenu = 'v1'

// Global Respon
global.mess = {
    success: 'Done✓',
    admin: `\`[ # ]\` This Command Can Only Be Used By Group Admins !`,
    botAdmin: `\`[ # ]\` This Command Can Only Be Used When Bot Becomes Group Admin !`,
    OnlyOwner: `\`[ # ]\` This Command Can Only Be Used By Premium User ! \n\nWant Premium? Chat Developer.\nTelegram: t.me/VIP_Mo101\nWhatsApp: +𝟎𝟏𝟏𝟏𝟑𝟗𝟎𝟐𝟐𝟔𝟐`,
    OnlyGrup: `\`[ # ]\` This Command Can Only Be Used In Group Chat !`,
    private: `\`[ # ]\` This Command Can Only Be Used In Private Chat !`,
    wait: `\`[ # ]\` Wait Wait a minute`,
    notregist: `\`[ # ]\` You are not registered in the Bot Database. Please register first.`,
    premium: `\`[ # ]\` This Command Can Only Be Used By Premium User ! \n\nWant Premium? Chat Developer.\nYouTube: t.me/VIP_Mo101\nTelegram:t.me/VIP_Mo101 \nWhatsApp: +𝟎𝟏𝟏𝟏𝟑𝟗𝟎𝟐𝟐𝟔𝟐`,
}

// ملف config.js
module.exports = {
    banner: [
        "𝟎𝟏𝟏𝟏𝟑𝟗𝟎𝟐𝟐𝟔𝟐@s.whatsapp.net",
        "20@s.whatsapp.net",
        "𝟎𝟏𝟏𝟏𝟑𝟗𝟎𝟐𝟐𝟔𝟐@s.whatsapp.net",
        "20@s.whatsapp.net",
        "20@s.whatsapp.net",
        "20@s.whatsapp.net"
    ]
};

let fs = require('fs')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})