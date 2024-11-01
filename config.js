const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_19_40_11_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxNTksXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxOSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDg1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDY1LFxuICAgICAgICAxNjksXG4gICAgICAgIDIyMixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTQsXG4gICAgICAgIDI1LFxuICAgICAgICA2OSxcbiAgICAgICAgMTIxLFxuICAgICAgICA3NSxcbiAgICAgICAgODUsXG4gICAgICAgIDI0LFxuICAgICAgICA3NCxcbiAgICAgICAgMTc5LFxuICAgICAgICA2OSxcbiAgICAgICAgOTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAwLFxuICAgICAgICAxODcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTQxLFxuICAgICAgICA4MSxcbiAgICAgICAgOTEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTY4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNyxcbiAgICAgICAgODcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDg4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDg1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMzYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDYyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDcsXG4gICAgICAgIDM5LFxuICAgICAgICA2MCxcbiAgICAgICAgMjUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxODQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDY5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTIwLFxuICAgICAgICA4OSxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMzksXG4gICAgICAgIDM1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgOTgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTUyLFxuICAgICAgICA2MyxcbiAgICAgICAgNzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIxLFxuICAgICAgICA0MixcbiAgICAgICAgMjksXG4gICAgICAgIDE2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDExOSxcbiAgICAgICAgNTksXG4gICAgICAgIDM3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTY1LFxuICAgICAgICA3MyxcbiAgICAgICAgMjM5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDQ3LFxuICAgICAgICA5MixcbiAgICAgICAgMTg2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDkyLFxuICAgICAgICAxODYsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDc0LFxuICAgICAgICA5MCxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDg2LFxuICAgICAgICA0OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDkwLFxuICAgICAgICA2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDU2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDksXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDQ3LFxuICAgICAgICA5MSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNCxcbiAgICAgICAgNjAsXG4gICAgICAgIDI5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDk5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNjMsXG4gICAgICAgIDk2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDUyLFxuICAgICAgICA3OSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDI5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgOTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTk3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDg5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgOTksXG4gICAgICAgIDIwMixcbiAgICAgICAgMTM1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDY3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDUyLFxuICAgICAgICA0MixcbiAgICAgICAgMTE2LFxuICAgICAgICAyMyxcbiAgICAgICAgNjEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgOTUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNjJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA2OFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA0OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgwLFxuICAgICAgICA0OSxcbiAgICAgICAgMTgxLFxuICAgICAgICA2MixcbiAgICAgICAgMjMzLFxuICAgICAgICAyOSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDExLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgOTgsXG4gICAgICAgIDYyLFxuICAgICAgICA3NSxcbiAgICAgICAgMjI4LFxuICAgICAgICA4OSxcbiAgICAgICAgMSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgOTIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgODYsXG4gICAgICAgIDY0LFxuICAgICAgICA2MSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxODEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTM3LFxuICAgICAgICA2MSxcbiAgICAgICAgMjExLFxuICAgICAgICAxOTUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTE1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDQxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDI1LFxuICAgICAgICAxODcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTcsXG4gICAgICAgIDU3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjE2LFxuICAgICAgICAxMjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDQ3LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjcvd1JxWmxBSXdVS3Zka2xIMkpNNFBmQk0wa1lBQnNTSk5tdUV6RnhHNkE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjQ2SEtQVm9yUU9LSF9VMWlLb2xUcVFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZTk0NzY3ZmItMTc2MS00NTk2LWE4MWQtOGNiMjQ3NWJkNjYyXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzMyxcbiAgICAgIDI0LFxuICAgICAgMTM5LFxuICAgICAgMjAwLFxuICAgICAgMjIyLFxuICAgICAgMjYsXG4gICAgICAxOTQsXG4gICAgICAzMCxcbiAgICAgIDIwOSxcbiAgICAgIDE3NixcbiAgICAgIDE0MCxcbiAgICAgIDU4LFxuICAgICAgMTg1LFxuICAgICAgMTQ0LFxuICAgICAgMTYyLFxuICAgICAgMjIyLFxuICAgICAgMTMzLFxuICAgICAgMTcyLFxuICAgICAgNzYsXG4gICAgICAyNDZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5OSxcbiAgICAgIDE0NSxcbiAgICAgIDEzMCxcbiAgICAgIDg4LFxuICAgICAgMTM4LFxuICAgICAgMjExLFxuICAgICAgMCxcbiAgICAgIDE1OCxcbiAgICAgIDI3LFxuICAgICAgMTcwLFxuICAgICAgMTAwLFxuICAgICAgNzMsXG4gICAgICAyMzYsXG4gICAgICAyMTIsXG4gICAgICAxMTAsXG4gICAgICA4OSxcbiAgICAgIDM0LFxuICAgICAgODQsXG4gICAgICAxMjcsXG4gICAgICAxNDlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPalAyRzBRazkyVXVRWVlBU0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInNIS0U1eGRORmNjR2hRMGFUblk2R1RTeENEazlicGJRNllZdDVFWW8wQ1U9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwibjBrNXlCaUQzRmVtczhIZ3hxc3NKbVZMcHdSZGEvZENoaDd6N1ZwSGpFQTJuZkNXL3o0VlQ2eTBkRWN3Mmh3bnRRa3F4Wk1iN0hJM0tMM3Zub013RGc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiNUtCTXJNMFB5ay95d0trUVBtajN4S0VpbTVRQngvYkt4cGw2WWtxcjl2NG9idEdXUHdOTFU2ZnZXMDlRQWVxZE9tMXdLK2NsazllM3Uwd25DaDJtaGc9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI1MDkzODAwOTc5Njo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNDA2MzkyNTc3ODQ0NjE6NUBsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjUwOTM4MDA5Nzk2OjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMzdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMDQ5MDAwNixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUQwclwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRDBxLmpzb24iOiAie1wia2V5RGF0YVwiOlwidklDQVYwa2d3c0Y4a1BuRnFDNXhqYnc0WURIcFhYME1hQytpKzYzRlF5OD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMzAwNDE1NzEsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUQwci5qc29uIjogIntcImtleURhdGFcIjpcIkZ6Z2Z6b3luOU9Gc3hkQldmbHRQL1NObHZUclo3WG5ncHFTb2ZiLzhNdXM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjMwMDQxNTcxLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzMwMzU4ODg3OTczXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRDBzLmpzb24iOiAie1wia2V5RGF0YVwiOlwiT2dIUWxhWTVYdUxmWk5pZWd5bWxCZ3NyS3p6VlB6Y0YzaTQ2eC9lS25Rcz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMzAwNDE1NzIsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUQwdC5qc29uIjogIntcImtleURhdGFcIjpcIlhYQVpDZ21VMWpINXFULzJGbkN2ZTZ0OFlIeUkxYVkraFEzRmlRWThNVmc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjMwMDQxNTcyLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzMwMzk2NzIzNTc5XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRDB1Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiY2ZraVVyNURwL1hWQkltZXFQMVpCQW1LK3l1ckNIdUlnNEQ2U1dCZUtkOD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMzAwNDE1NzMsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUQwdi5qc29uIjogIntcImtleURhdGFcIjpcIm9LOXpSZkJ4Q1d6RXlHMi9qMVJqWFpZbE1qSXdhcWVKZTM3dkoyQXlmdDg9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjMwMDQxNTczLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzMwMzk3OTEwMzYwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRDB3Lmpzb24iOiAie1wia2V5RGF0YVwiOlwieHQ3d1o0MDc1K2NuT2trVGwyWVg1NjNwNnhZTGtjZUhRSGQ5YjdZU3MvRT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMzAwNDE1NzQsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUQweC5qc29uIjogIntcImtleURhdGFcIjpcIjU5c2VJaTJWQ3FmeEY1cnJ0WDZxK21LcUdTaWNlZ05OMEk0VGhJOHExU0k9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjMwMDQxNTc0LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzMwNDg5OTIyMDYxXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "𓆩ᬼ⃟🌹𝗞𝗠𝗚♱⃞𝗚𝗢𝗧𝗔𝗥 ᭄🐐亗",
  ownername:process.env.OWNER_NAME|| "𓆩ᬼ⃟🌹𝗞𝗠𝗚♱⃞𝗚𝗢𝗧𝗔𝗥 ᭄🐐亗",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
