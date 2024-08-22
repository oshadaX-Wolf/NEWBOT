const config = require('../config')
const os = require('os')
const {
    cmd,
    commands
} = require('../command')
const {
    getBuffer,
    getGroupAdmins,
    getRandom,
    h2k,
    isUrl,
    Json,
    runtime,
    sleep,
    fetchJson
} = require('../lib/functions')
cmd({
        pattern: "about",
        react: "🐼",
        alias: ["online", "test", "bot"],
        desc: "Check bot online or no.",
        category: "mainn",
        use: '.about',
        filename: __filename
    },
    async (conn, mek, m, {
        from,
        prefix,
        pushname,
        reply
    }) => {
        try {
            if (os.hostname().length == 12) hostname = 'replit'
            else if (os.hostname().length == 36) hostname = 'heroku'
            else if (os.hostname().length == 8) hostname = 'koyeb'
            else hostname = os.hostname()
            let monspace = '```'
            const sssf = `*👋 Helloᴡ...*

  🎉   I am Dark Yash Md... 
   💥 _Whatsapp Bot Created  By *M.G.Manthila...*_

   ⦁  *🧨 \`ᴛᴇᴀᴍ -:\`* ᴅᴀʀᴋᴍᴀxᴛᴇᴀᴍ
   ⦁ *👨‍💻 \`ᴏᴡɴᴇʀ -:\`* ᴍ.ɢ.ᴍᴀɴᴛʜɪʟᴀ
   ⦁ 💡 *\`ʟᴀɴɢᴜᴀɢᴇ -:\`* ᴊᴀᴠᴀꜱᴄʀɪᴘᴛ

  *✨ Thanks For Using Dark Yash Md Bot...*
*•───────────────────────*`

            let buttons = [{
                    name: "cta_url",
                    buttonParamsJson: JSON.stringify({
                        display_text: config.BTN,
                        url: config.BTNURL,
                        merchant_url: config.BTNURL
                    }),
                },
                {
                    name: "quick_reply",
                    buttonParamsJson: JSON.stringify({
                        display_text: "Get Menu",
                        id: ".menu"
                    }),
                }
            ]
            let opts = {
                image: config.LOGO,
                header: '',
                footer: config.FOOTER,
                body: sssf

            }
            return await conn.sendButtonMessage(from, buttons, m, opts)
        } catch (e) {
            reply('*Error !!*')
            console.log(e)
        }
    })

cmd({
    pattern: "ownerrss",
    alias: ["online","test","bot"],
    desc: "Check bot online or no.",
    category: "mainn",
    use: '.ownerss',
    filename: __filename
},
async(conn, mek, m,{from, prefix, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(os.hostname().length == 12 ) hostname = 'replit'
else if(os.hostname().length == 36) hostname = 'heroku'
else if(os.hostname().length == 8) hostname = 'koyeb'
else hostname = os.hostname()
let monspace ='```'
let monspacenew ='`'
const botdek = `*╭┈┈┄[🧑‍🔧 DARK YASH MD 🧑‍🔧 ]┄┈┈╮*

    *🎗️DARK YASH INFORMATION🎗️*

┏━━━━━━━━━━━━━━━━━━━━━━┓
┣ *❄ BOT NAME -:* DARK YASH MD
┣ *👮 OWNER NAME -:* MANTHILA
┣ *👨‍💻 OWNER NUMBER -:* 743218422
┣ *📡 MODE -:* PRIVATE 
┣ *⚕️ PREFIX -:* [MULTI PREFIX]
┣ *⚙️ PLATFORM -:* HEROKU
┣ *🧬 VERSION -:* 2.0.0
┗━━━━━━━━━━━━━━━━━━━━━━┛
`
await conn.sendMessage(from, { image: { url: "https://telegra.ph/file/1b4af9f4e49249865611a.jpg" }, caption: botdek + "\n" + "⦁ ᴘᴏᴡʀᴇᴅ ʙʏ ᴅᴀʀᴋ-ʏᴀꜱʜ-ᴍᴅ ⦁"}, { quoted: mek })
return await conn.sendMessage(from, { react: { text: "🧑‍💻", key: botde.key } });
reply('*Error !!*' + e )
}catch (e) {
console.log(e)
}
})

cmd({
    pattern: "bottts",
    alias: ["online","test","bot"],
    desc: "Check bot online or no.",
    category: "mainn",
    use: '.bottts',
    filename: __filename
},
async(conn, mek, m,{from, prefix, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(os.hostname().length == 12 ) hostname = 'replit'
else if(os.hostname().length == 36) hostname = 'heroku'
else if(os.hostname().length == 8) hostname = 'koyeb'
else hostname = os.hostname()
let monspace ='```'
let monspacenew ='`'
const ownerm = `*╭┈┄┈[🧑‍🔧 DARK YASH MD 🧑‍🔧 ]┈┄┈╮*

      *🎗️OWNER INFORMATION🎗️*
_______________
𝗠ʏ 𝙸ɴꜰᴏʀᴍᴀᴛɪᴏɴ___😚💐
_________
60% ▰▰▰▰▰▰▱▱▱▱ 100% 𝐂ᴏᴍᴘʟᴇᴛᴇᴅ ✅
┏━━━━━━━━━━━━━━━━━━━━┓
┃〲Nᴀᴍᴇ ❝ ᴍ.ɢ.ᴍᴀɴᴛʜɪʟᴀ ❞ 🐣
┗━━━━━━━━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━━━━━━━━┓
┃ 〲Fʀᴏᴍ ❝ 𝙶ᴀʟʟᴇ ❞ ☘️💐
┗━━━━━━━━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━━━━━━━━┓
┃ 〲Aɢᴇ ❝ 17 ᴏʟᴅ ❞ 🌝✨
┗━━━━━━━━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━━━━━━━━┓
┃ 〲Sᴇx ❝ 𝙼ᴀʟᴇ ❞ 🍼🧩
┗━━━━━━━━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━━━━━━━━┓
┃ 〲Eᴅᴜ ❝ ꜱᴛᴜᴅʏ ❞ 💰💳
┗━━━━━━━━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━━━━━━━━┓
┃〲Cᴏᴜɴᴛʀʏ ❝ ꜱʀɪ ʟᴀɴᴋᴀ ❞ 🏴‍☠️🇱🇰
┗━━━━━━━━━━━━━━━━━━━━┛
`

await conn.sendMessage(from, { image: { url: "https://telegra.ph/file/f8b0f3a7501959871f2ca.jpg" }, caption: ownerm + "\n" + "⦁ ᴘᴏᴡʀᴇᴅ ʙʏ ᴅᴀʀᴋ-ʏᴀꜱʜ-ᴍᴅ ⦁"}, { quoted: mek })
return await conn.sendMessage(from, { react: { text: "🧑‍💻", key: txm.key } });
reply('*Error !!*' + e )
}catch (e) {
console.log(e)
}
})

