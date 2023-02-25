import fs from 'fs'
let handler = async (m, { conn, args }) => {
let group = m.chat
conn.reply(m.chat, 'لينك الجروب♥✨: https://chat.whatsapp.com/' + await conn.groupInviteCode(group), m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: 'لينك الجروب♥✨',
body: 'الامبراطور انوس ',         
previewType: 0, thumbnail: fs.readFileSync("./Menu2.jpg"),
sourceUrl: `https://chat.whatsapp.com/LO17u6F9Fw4LE9izmmyOGz`}}})   
}
handler.help = ['لينك']
handler.tags = ['group']
handler.command = /^لي(ن?ك)?$/i
handler.group = true
handler.botAdmin = true
export default handler
