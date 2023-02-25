let handler = async (m, { conn, usedprefix, text }) => { 
 let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender 
 conn.sendFile(m.chat, global.API('https://some-random-api.ml', '/canvas/pixelate', { 
 avatar: await conn.profilePictureUrl(m.sender, 'image').catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'), 
 comment: text, 
 username: conn.getName(m.sender) 
 }), 'error.png', '🌀 *ها هي الصورة المنقطة !!*\n |تفضل جروب البوت ارائيسي https://chat.whatsapp.com/LO17u6F9Fw4LE9izmmyOGz', m) 
 } 
 handler.help = ['pixel','difuminar'] 
 handler.tags = ['maker'] 
 handler.command = /^(صورتي نقط|نقط|نقط صوره)$/i 
 export default handler