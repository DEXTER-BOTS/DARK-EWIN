const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || '94770730717'
global.mongodb = process.env.MONGODB_URI || ""
global.port= process.env.PORT || 8000
global.email = 'sam@secktor.live'
global.github = 'https://github.com/darkewing/DARK-EWING'
global.location = 'Sultanpur IN'
global.gurl = 'https://instagram.com/' // add your username
global.sudo = process.env.SUDO || '2347039570336,2348050907760'
global.devs = '2347039570336,2348050907760';
global.website = 'https://github.com/darkewing/DARK-EWING' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://raw.githubusercontent.com/SecktorBot/Brandimages/main/logos/SocialLogo%201.png'
module.exports = {
  
  sessionName:  process.env.SESSION_ID ||  "DARK-EWING;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV01MQW9DZ05RZENEaTc3QWlTbXdaYnBKd3BTZGM0dVl0ZVdwYSthdUIzMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0lEQXE3Nm5OSDgvTWNmTXhuVnFqbjdwNlZUK21Ec3ZKYTB4Y1hsemJXUT0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtSE4xaDFXOURpQ0RvRXFBVGpicDVGVzdBdkVtV0VIYlZPWW9rNFNRWVUwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJyWVdobjVKSTg2NXJoTVFmamFqRDcrTkRiVU1EVHdnRGk0Rjk1K2JuYmswPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9GTzVJM0d4bGw5SGxvSFZBam0wUFp6Ly9Ma05vRGVFT082VVV4ekQvVkk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Illib3lqS3QzRExqeGZFc3FGZUt3K3ZSbWRqV3hiSHpWbk1vM3JYSGhUQ009In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJaKzRoOE5BNERZbEZMeC8vKzhjMnQ4RUhIRTFPL29QbEZJVkkzdENlYmlUZEYvZjNLdUc2VndFdmFVTXRZSjBkY1ZpZ1dtUVVMbENqZ1BSdk4zVzVoZz09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjEwMSwiYWR2U2VjcmV0S2V5IjoiSFJpRXJuTHlpbDRYNzRSejFCUVUyT1k3NW10NVRvOVRJT0VMUjAwOWpJWT0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiU1Izb1M3M0FSOEc2QmtKdWxPajJQUSIsInBob25lSWQiOiI4YjY4N2E1YS00NmU2LTQxNmUtOTdhNy0wMTkyMjMxOTQxMWQiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUJiSGRCcEltbmcyOUpibnMyOGk5dnFOdGVZPSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCekZuT240YktGNzNId1g2ODBzejBqUDVLOGM9In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNLdnN6TFVGRU1YQnRMVUdHQVVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJPeDhFYzVUZjJpUjBxcGx6UUZLVm1ZVTVaZjg5SlFlNVlYWmZkSHY3NXlFPSIsImFjY291bnRTaWduYXR1cmUiOiIxVk1BbkF4RmRMUHlBUUdDQmhYL0s2ajhGMzMvcFNKdHAxSHhrd0NkSFVhV0cwZTBTelJLN1I2cGVTRzlhTkJLUlFKM2Zpd21oeFNEemhHQWl3ZjJBUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoid09lb3o5Y3R5V25TeHFIRUFYclFsWUpuYVA4VnpsTDRxVFlnR0gwZGREWlpnKzhNS01CUGtkZXJNbEZ2Rk9lVGp3U254QkRxWHBOUkhPNTU2S2tYakE9PSJ9LCJtZSI6eyJpZCI6Ijk0NzcwNzMwNzE3OjExQHMud2hhdHNhcHAubmV0In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzcwNzMwNzE3OjExQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlRzZkJIT1UzOW9rZEtxWmMwQlNsWm1GT1dYL1BTVUh1V0YyWDNSNysrY2gifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjI2MjIxNTN9",
  botname:   process.env.BOT_NAME === undefined ? 'ᴅᴀʀᴋ ᴇᴡɪɴɢ 𝐁𝐨�' : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'excel' : process.env.OWNER_NAME,
  author:  process.env.PACK_INFO === undefined ? 'excel' : process.env.PACK_INFO.split(";")[0],
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  packname:  process.env.PACK_INFO === undefined ? 'Dark-Ewing-Md' : process.env.PACK_INFO.split(";")[1],
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  typingprensence:  process.env.TYPING === undefined ? false : process.env.TYPING,
  autosendstatus:  process.env.STATUS_SENDER === undefined ? false : process.env.STATUS_SENDER,
anticall:  process.env.ANTI_CALL === undefined ? false : process.env.ANTI_CALL,
recordingpresence:  process.env.RECORDING === undefined ? false : process.env.RECORDING,	
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? true : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  afk:  process.env.AFK ||true,
  autobio:  process.env.AUTO_BIO === undefined ? '' : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'EWING',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
