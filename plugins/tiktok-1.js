const { tiktokdl } = require('tiktokdl')
const config = require('../config')
const { cmd, commands } = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')
var monspace ='```'

cmd({
    pattern: "tt",
    alias: ["tiktok"],
    react: '✨',
    desc: "Download tiktok videos",
    category: "download",
    use: '.tt <tiktok link>',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
  if (!q) return await  reply('*Please give me tiktok url !!*')
let wm = '*`✦ TIKTOK DOWNLODER ✦`*\n\n⦁ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀʀᴋ-ʏᴀꜱʜ-ᴍᴅ ⦁' 
let wwm = 'yash'
let response = await tiktokdl(q)
let { video } = response
let { music } = response
await conn.sendMessage(from, { video: { url: video }, caption: wm}, { quoted: mek })
await conn.sendMessage(from, { audio: { url: music }, caption: wm,mimetype:"audio/mpeg"}, { quoted: mek })
return await conn.sendMessage(from, { react: { text: '✅', key: mek.key }})
} catch (e) {
reply('Error !!')
console.log(e)
}
})
