const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID === undefined ? ' ' : process.env.SESSION_ID,
BTN: "Follow US",
FOOTER: "•ʙʟᴀᴄᴋ ᴘᴀɴᴛʜᴇʀ ᴍᴅ•|©ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴅᴀʀᴋ ꜱᴀᴅᴀꜱ",
PREFIX: process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
OWNER: process.env.OWNER === undefined ? `94742614390` : process.env.OWNER,

ONLY_GROUP: process.env.ONLY_GROUP === undefined ? 'true' : process.env.ONLY_GROUP,
BTNURL: "https://whatsapp.com/channel/0029VadeSsrEAKWC5XDIba42",
MAX_SIZE: 200,
LOGO: process.env.LOGO === undefined ? 'https://telegra.ph/file/091fc81528af5881cdf47.jpg': process.env.LOGO
};
