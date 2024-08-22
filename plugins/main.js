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
        pattern: "alive",
        react: "🍬",
        alias: ["online", "test", "bot"],
        desc: "Check bot online or no.",
        category: "main",
        use: '.alive',
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
            const sssf = `${monspace}👋 Hello ${pushname} I'm alive now${monspace}

*DARK YASH MD
    
> *Version:* ${require("../package.json").version}
> *Memory:* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
> *Runtime:* ${runtime(process.uptime())}
> *Platform:* ${hostname}
    
*🍭 Have A Nice Day 🍭*`

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
        pattern: "ping",
        react: "📟",
        alias: ["speed"],
        desc: "Check bot\'s ping",
        category: "main",
        use: '.ping',
        filename: __filename
    },
    async (conn, mek, m, {
        from,
        reply
    }) => {
        try {
            let inital = new Date().getTime();
            let ping = await conn.sendMessage(from, {
                text: '```Pinging To index.js!!!```'
            }, {
                quoted: mek
            })
            let final = new Date().getTime();
            return await conn.edit(ping, '*Pong*\n *' + (final - inital) + ' ms* ')
        } catch (e) {
            reply('*Error !!*')
            console.log(e)
        }
    })

cmd({
        pattern: "menu",
        react: "🗃️",
        alias: ["panel", "list", "commands"],
        desc: "Get bot\'s command list.",
        category: "main",
        use: '.menu',
        filename: __filename
    },
    async (conn, mek, m, {
        from,
        pushname,
        reply
    }) => {
        try {
            if (os.hostname().length == 12) hostname = 'replit'
            else if (os.hostname().length == 36) hostname = 'heroku'
            else if (os.hostname().length == 8) hostname = 'koyeb'
            else hostname = os.hostname()
            let monspace = '```'
            const MNG = `${monspace}👋 Hello ${pushname}${monspace}

*╭─「👹ᴄᴏᴍᴍᴀɴᴅꜱ ᴘᴀɴᴇʟ👹」*
┃ *➩⚙️ ʀᴜɴ ᴛɪᴍᴇ -*  ${runtime(process.uptime())}
┃ *➩⚙️ ʀᴀᴍ ᴜꜱᴀɢᴇ -*  ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
*╰─────────────⦁⦁➤*`

let buttons = [{
    name: "cta_url",
    buttonParamsJson: JSON.stringify({
        display_text: config.BTN,
        url: config.BTNURL,
        merchant_url: config.BTNURL
    }),
},
{
    name: "single_select",
   "buttonParamsJson": `{"title":"Select a Category :)✨",
                 "sections":
                   [{
                    "title":"please select a category",
                    "highlight_label":"DARK-YASH-MD",
                    "rows":[
                      
                    {
                       "header":"",
                       "title":"MAIN MENU",
                       "description":"",
                       "id":".allmenu"
                       },
                       {
                       "header":"",
                       "title":"DOWNLOAD MENU",
                       "description":"",
                       "id":".downloadmenu"
                       },
                       {
                       "header":"",
                       "title":"SEARCH MENU",
                       "description":"",
                       "id":".searchmenu"
                       },
                       {
                       "header":"",
                       "title":"CONVERT MENU",
                       "description":"",
                       "id":".convertmenu"
                       },
                       {
                       "header":"",
                       "title":"MATHS MENU",
                       "description":"",
                       "id":"."
                       },
                       {
                       "header":"",
                       "title":"OWNER MENU",
                       "description":"",
                       "id":".ownermenu"
                       }
                       
                    ]}
                  ]}`
                },
              ]

              let opts = {
                image: config.LOGO,
                header: '',
                footer: config.FOOTER,
                body: MNG
                  
               }
            
              return await conn.sendButtonMessage(from, buttons, m, opts)
            } catch (e) {
            reply('*Error !!*')
            console.log(e)
        }
    })


cmd({
    pattern: "system",
    react: "🪄",
    alias: ["online", "test", "bot"],
    desc: "Check bot online or no.",
    category: "main",
    use: '.system',
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
        const sssf = `┌───────────────────┐  
├ ⏰ *\`Uptime :-\`*  ${runtime(process.uptime())}
├ 📟 *\`Ram usage :-\`* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
├ ⚙️ *\`Platform :-\`*  Heroku
├ 👨‍💻 *\`Owners :-\`* M.G.Manthila
├ 🧬 *\`Version :-\`* 1.0.0
└───────────────────┘`

        let buttons = [{
                name: "quick_reply",
                buttonParamsJson: JSON.stringify({
                    display_text: "PING",
                    id: ".ping"
                }),

            }

        ]

        let opts = {
            image: "https://telegra.ph/file/218c813e9b6ee1dfcbaf8.jpg",
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
        pattern: "news",
        react: "🗞️",
        alias: ["online", "test", "bot"],
        desc: "Check bot online or no.",
        category: "search",
        use: '.news',
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
            const sssf = `🗞️ *DARK YASH NEWS CENTER (24 HOURS)* 📡

*⛬ ➜ Select the type of news you want and mention this message and reply to the relevant number...*\n`

let buttons = [{
    name: "cta_url",
    buttonParamsJson: JSON.stringify({
        display_text: config.BTN,
        url: config.BTNURL,
        merchant_url: config.BTNURL
    }),
},
{
    name: "single_select",
   "buttonParamsJson": `{"title":"Select a news type :)🗞️",
                 "sections":
                   [{
                    "title":"please select a news",
                    "highlight_label":"DARK-YASH-MD",
                    "rows":[
                      
                    {
                       "header":"",
                       "title":"DERANA NEWS",
                       "description":"",
                       "id":".deranaaa"
                       },
                       {
                       "header":"",
                       "title":"ESANA NEWS",
                       "description":"",
                       "id":".esanaaa"
                       },
                       {
                       "header":"",
                       "title":"SPORTY NEWS",
                       "description":"",
                       "id":".sporttt"
                       }
                       
                    ]}
                  ]}`
                },
              ]


            let opts = {
                image: "https://telegra.ph/file/218c813e9b6ee1dfcbaf8.jpg",
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
    pattern: "botinfo",
    react: "⚡",
    alias: ["online", "test", "bot"],
    desc: "Check bot online or no.",
    category: "otherr",
    use: '.botinfo',
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
        const sssf = ` *╭┄[🧑‍🔧 DARK YASH MD 🧑‍🔧 ]┄╮*

 *🎗️DETAILS INFO FETCHER🎗️*

*⛬ ➜ You can select the type of details you want here and get it by answering the numbers here...*
 `
   
let buttons = [{
    name: "cta_url",
    buttonParamsJson: JSON.stringify({
        display_text: config.BTN,
        url: config.BTNURL,
        merchant_url: config.BTNURL
    }),
},
{
    name: "single_select",
   "buttonParamsJson": `{"title":"Select a details :) ✨",
                 "sections":
                   [{
                    "title":"please select a you want.",
                    "highlight_label":"DARK-YASH-MD",
                    "rows":[
                      
                    {
                       "header":"",
                       "title":"OWNER DETAILS",
                       "description":"ʙᴏᴛ ᴅᴇᴛᴀᴜʟꜱ",
                       "id":".ownerrss"
                       },
                       {
                       "header":"",
                       "title":"BOT DETAILS",
                       "description":"ᴏᴡɴᴇʀ ᴅᴇᴛᴀɪʟꜱ",
                       "id":".bottts"
                       },
                       {
                       "header":"",
                       "title":"REFESH RESULT",
                       "description":"ʀᴇꜰᴇꜱʜ ᴀɢᴀɪɴ",
                       "id":".searchmenu"
                       }
                       
                    ]}
                  ]}`
                },
              ]        

        let opts = {
            image: "https://telegra.ph/file/3117ab5de43cf2fcf6b86.jpg",
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


