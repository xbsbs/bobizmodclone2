import fetch from 'node-fetch' 
 let handler = async (m, { conn, usedPrefix, command }) => { 
 let res = await fetch('https://api.waifu.pics/sfw/waifu') 
 if (!res.ok) throw await res.text() 
 let json = await res.json() 
 if (!json.url) throw 'Error!' 
 conn.sendButton(m.chat, `زوجتي ابعد`, wm, json.url, [['التالي 🆕', `/${command}`]], m) 
 } 
 handler.help = ['waifu'] 
 handler.tags = ['anime'] 
 handler.command = /^(بنت)$/i 
 export default handler