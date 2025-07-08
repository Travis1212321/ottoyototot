//base by HANSTZ
//YouTube: @HANSTZ-TECH
//Whatsapp https://wa.me/255614195217
//GitHub: @Mrhanstz
//WhatsApp: https://whatsapp.com/channel/0029VasiOoR3bbUw5aV4qB31
//want more free bot scripts? follow my channel : https://whatsapp.com/channel/0029VasiOoR3bbUw5aV4qB31
const fs = require('fs')
const chalk = require('chalk')
require('dotenv').config()

//contact details - sensitive info moved to .env
global.SESSION_ID = process.env.SESSION_ID || "HansTz&W1QwGDhC#dNjvrh6Ka1vMksE2QUz4isFlFeWKfp24NdHfsmg5gI8" //fallback to default if not in .env
global.ownernomer = process.env.OWNER_NUMBER || "249126083647"

global.ownername = process.env.OWNER_NAME || "otto²"

global.ytname = "OTTO-KING"

global.socialm = "GitHub: Mrhanstz"

global.location = "AFRICA, Sudan, Omdurman"

global.ownernumber = process.env.OWNER_NUMBER || '249126083647'  //Owner number

global.ownername = process.env.OWNER_NAME || 'OTTOKIN' //owner name
global.botname = 'OTTO-XMD' //name of the bot

//sticker details
global.packname = 'Sticker By'
global.author = 'OTTO-XMD'

//console view/theme
global.themeemoji = '⚠️'
global.wm = "OTTO BOT"

//theme link
global.link = 'https://whatsapp.com/channel/0029VbAigic5fM5hwt07uw3X'

//custom prefix
global.prefa = ['','!','.','#','/']


//bot settings
global.autolikestatus = true //For auto react Status Random
global.autoRecording = false //auto recording
global.autoTyping = false //auto typing
global.autorecordtype = true //auto typing + recording
global.autoread = false //auto read messages
global.autobio = true //auto update bio
global.anti91 = false //auto block +91 
global.autoswview = true //auto view status/story
global.autoreact = false // This is For Auto React 
global.welcome = false // For Welcome massage groups


global.wagc = "https://whatsapp.com/channel/0029VbAigic5fM5hwt07uw3X";

//reply messages
global.mess = {
    done: 'Done !',
    prem: 'This feature can be used by premium user only',
    admin: 'This feature can be used by admin only',
    botAdmin: 'This feature can only be used when the bot is a group admin ',
    owner: 'This feature can be used by owner only',
    group: 'This feature is only for groups',
    private: 'This feature is only for private chats',
    wait: 'In process... ',    
    error: 'Error!',
}

global.thumb = fs.readFileSync('./HansTzMedia/thumb.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
