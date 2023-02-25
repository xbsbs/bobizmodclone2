// Gracias a https://github.com/BrunoSobrino 
 /*let handler = async(m, { conn, text, args, usedPrefix, command }) => { 
 if (!text) throw `${mg}𝙀𝙎𝘾𝙍𝙄𝘽𝘼 𝙋𝘼𝙍𝘼 𝙌𝙐𝙀 𝙀𝙇 𝙏𝙀𝙓𝙏𝙊 𝙎𝙀 𝘾𝙊𝙉𝙑𝙄𝙀𝙍𝙏𝘼 𝙀𝙉 𝙎𝙏𝙄𝘾𝙆𝙀𝙍\n𝙀𝙅𝙀𝙈𝙋𝙇𝙊\n*${usedPrefix + command}* Nuevo Sticker\n\n𝙒𝙍𝙄𝙏𝙀 𝙎𝙊 𝙏𝙃𝙀 𝙏𝙀𝙓𝙏 𝘽𝙀𝘾𝙊𝙈𝙀𝙎 𝘼 𝙎𝙏𝙄𝘾𝙆𝙀𝙍\n𝙀𝙓𝘼𝙈𝙋𝙇𝙀\n*${usedPrefix + command}* New Sticker` 
 let teks = encodeURI(text) 
 if (command == 'attp') { 
 conn.sendFile(m.chat, `https://api.lolhuman.xyz/api/attp?apikey=9b817532fadff8fc7cb86862&text=${teks}`, 'sticker.webp', '', m, { asSticker: true })} 
      
 if (command == 'attp2') { 
 conn.sendFile(m.chat, `https://api.lolhuman.xyz/api/attp2?apikey=9b817532fadff8fc7cb86862&text=${teks}`, 'sticker.webp', '', m, { asSticker: true })} 
 if (command == 'ttp5') { 
 conn.sendFile(m.chat, `https://api.lolhuman.xyz/api/ttp6?apikey=9b817532fadff8fc7cb86862&text=${teks}`, 'sticker.webp', '', m, { asSticker: true })} 
      
 if (command == 'ttp4') { 
 conn.sendFile(m.chat, `https://api.lolhuman.xyz/api/ttp5?apikey=9b817532fadff8fc7cb86862&text=${teks}`, 'sticker.webp', '', m, { asSticker: true })} 
      
 if (command == 'ttp3') { 
 conn.sendFile(m.chat, `https://api.lolhuman.xyz/api/ttp3?apikey=9b817532fadff8fc7cb86862&text=${teks}`, 'sticker.webp', '', m, { asSticker: true })} 
      
 if (command == 'ttp2') { 
 conn.sendFile(m.chat, `https://api.lolhuman.xyz/api/ttp2?apikey=9b817532fadff8fc7cb86862&text=${teks}`, 'sticker.webp', '', m, { asSticker: true })} 
      
 if (command == 'ttp') { 
 conn.sendFile(m.chat, `https://api.lolhuman.xyz/api/ttp?apikey=9b817532fadff8fc7cb86862&text=${teks}`, 'sticker.webp', '', m, { asSticker: true })} 
      
 } 
 handler.command = handler.help = ['ttp', 'ttp2', 'ttp3', 'ttp4', 'ttp5', 'attp', 'attp2'] 
 handler.tags = ['sticker'] 
 export default handler */ 
  
  
 // Gracias a https://github.com/BrunoSobrino 
 let handler = async(m, { conn, text, args, usedPrefix, command }) => { 
 if (!text) throw `${mg} اكتب بحيث يصبح النص ملصقا\nمثل\n*${usedPrefix + command}* yuna` 
 let teks = encodeURI(text) 
  
 if (command == 'attp') { 
 let teksb = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text 
 conn.sendFile(m.chat, global.API('xteam', '/attp', { file: '', text: teksb }), 'sticker.webp', '', m, false, { asSticker: true })} 
  
 if (command == 'attp2') { 
 conn.sendFile(m.chat, `https://api.lolhuman.xyz/api/attp?apikey=${lolkeysapi}&text=${teks}`, 'sticker.webp', '', m, { asSticker: true })} 
      
 if (command == 'attp3') { 
 conn.sendFile(m.chat, `https://api.lolhuman.xyz/api/attp2?apikey=${lolkeysapi}&text=${teks}`, 'sticker.webp', '', m, { asSticker: true })} 
  
 if (command == 'ttp5') { 
 conn.sendFile(m.chat, `https://api.lolhuman.xyz/api/ttp6?apikey=${lolkeysapi}&text=${teks}`, 'sticker.webp', '', m, { asSticker: true })} 
      
 if (command == 'ttp4') { 
 conn.sendFile(m.chat, `https://api.lolhuman.xyz/api/ttp5?apikey=${lolkeysapi}&text=${teks}`, 'sticker.webp', '', m, { asSticker: true })} 
      
 if (command == 'ttp3') { 
 conn.sendFile(m.chat, `https://api.lolhuman.xyz/api/ttp3?apikey=${lolkeysapi}&text=${teks}`, 'sticker.webp', '', m, { asSticker: true })} 
      
 if (command == 'ttp2') { 
 conn.sendFile(m.chat, `https://api.lolhuman.xyz/api/ttp2?apikey=${lolkeysapi}&text=${teks}`, 'sticker.webp', '', m, { asSticker: true })} 
      
 if (command == 'ttp') { 
 conn.sendFile(m.chat, `https://api.lolhuman.xyz/api/ttp?apikey=${lolkeysapi}&text=${teks}`, 'sticker.webp', '', m, { asSticker: true })} 
      
 } 
 handler.command = handler.help = ['ttp', 'ttp2', 'ttp3', 'ttp4', 'ttp5', 'attp', 'attp2', 'attp3'] 
 handler.tags = ['sticker'] 
 export default handler