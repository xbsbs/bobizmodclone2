let handler  = async (m, { conn }) => { 
 let name = conn.getName(m.sender) 
 let teks = ` 
 ${pickRandom([`' *⚜️━━─━━━⌠⚜️⌡━━━─━━⚜️*
*❈╎مـرحـبـاً انـا بوت مملكة『 مغامـــــBOTــــره 𓆩⚜️𓆪 』🤖╎❈*
*⚜️━━─━━━⌠⚜️⌡━━━─━━⚜️*
*❖┃قــائمــه┋📜┋رابط الجروب┃❖*
*⚜️━━─━━━⌠⚜️⌡━━━─━━⚜️*

*⚜️━━─━━⌠ قائمه الجروب ⌡━━─━━⚜️*

⚜️⇜ https://chat.whatsapp.com/LO17u6F9Fw4LE9izmmyOGz
اهلين بيك عندنا 😂اعضاء محترمين مملكة تعلم صناعة بوتات احترافية برمجة برامج '`])} 
 `.trim() 
 conn.reply(m.chat, teks, m, { mentions: { mentionedJid: [m.sender] }}) 
 } 
 handler.customPrefix = /الدعم|استقبال|الاستقبال/i 
 handler.command = new RegExp 
  
 export default handler 
  
 function pickRandom(list) { 
     return list[Math.floor(Math.random() * list.length)] 
 }