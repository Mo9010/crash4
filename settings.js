
const fs = require("fs");
const chalk = require("chalk")

global.BOT_TOKEN = "8966025319:AAFEMRTsBl-enhwyA11a9y7Sv58POBt6lZA" // create bot here https://t.me/Botfather and get bot token
global.BOT_NAME = "ṂO BOT»࿅ 𓈪" //your bot name
global.OWNER_NAME = "t.me/VIP_Mo101" //your name with sign @
global.OWNER = ["t.me/VIP_Mo101", "t.me/VIP_Mo101"] // Make sure the username is correct so that the special owner features can be used.
global.DEVELOPER = ["8191479021"] //developer telegram id to operate addprem delprem and listprem
global.pp = 'https://pin.it/5W3wbURdm' //your bot pp


//approval
global.GROUP_ID = -1002443427115; // Replace with your group ID
global.CHANNEL_ID =  -1003847318331; // Replace with your channel ID
global.GROUP_LINK = "https://t.me/xs_d_1"; // Replace with your group link
global.CHANNEL_INVITE_LINK = "t.me/VIP_Mo101"; // Replace with your private channel invite link
global.WHATSAPP_LINK = "https://wa.me/𝟐𝟎𝟏𝟏𝟏𝟑𝟗𝟎𝟐𝟐𝟔𝟐"; // Replace with your group link
global.YOUTUBE_LINK = "https://youtube.com/@mido_king_assiut?si=kN2CmqEqyohdj-fq"; // Replace with your youtube link
global.INSTAGRAM_LINK = "https://whatsapp.com/channel/0029VazbCte0bIdtiH7R4E35"; // Replace with your ig link

global.owner = global.owner = ['+𝟐𝟎𝟏𝟏𝟏𝟑𝟗𝟎𝟐𝟐𝟔𝟐'] //owner whatsapp

const {
   english
} = require("./lib");
global.language = english
global.lang = language

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})