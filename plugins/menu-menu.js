import fs from 'fs' 
 import fetch from 'node-fetch' 
 import { xpRange } from '../lib/levelling.js' 
 const { levelling } = '../lib/levelling.js' 
 import PhoneNumber from 'awesome-phonenumber' 
 import { promises } from 'fs' 
 import { join } from 'path' 
 let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text }) => { 
 try { 
 let vn = './media/menu.mp3' 
 let pp = imagen4 
 let img = await(await fetch('https://telegra.ph/file/1592262447c5ce8714b60.jpg')).buffer() 
 let d = new Date(new Date + 3600000) 
 let locale = 'ar' 
 let week = d.toLocaleDateString(locale, { weekday: 'long' }) 
 let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' }) 
 let _uptime = process.uptime() * 1000 
 let uptime = clockString(_uptime) 
 let user = global.db.data.users[m.sender] 
 let { money, joincount } = global.db.data.users[m.sender] 
 let { exp, limit, level, role } = global.db.data.users[m.sender] 
 let { min, xp, max } = xpRange(level, global.multiplier) 
 let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length  
 let more = String.fromCharCode(8206) 
 let readMore = more.repeat(850)    
 let taguser = '@' + m.sender.split("@s.whatsapp.net")[0] 
 let str = `
*╭━━❍اوامر بوت انوس❍━━╮*
*┃ ╭━━━━━━━━━━━━━━━━╮*
*┃ ┃ ╭┈────────────╮*
*┃ ┃ │❍ الامبراطور انوس ⚜️❍*
*┃ ┃ ╰┈────────────╯*
*┃ ╰━━━━━━━━━━━━━━━━╯*
*┣━━━▢ ❤مرحبا ${username}❤*•
*┃╭━━━━━━━━━━━━━━━━╾•*
*┃┃  ❍ ${ucapan()} ❍*
*┃┣━━━━━━━━━━━━━━━━╾•*
*┃
*❖┃قــائمــه┋📜┋الاوامر┃❖*

*┣━━━❰･📜 اوامر الجروب 📜･❱━━━┫*

*┃ ➢.منشن* 
*┃ منشن جماعي لكل الاعضاء 📧*

*┃ ➢.منشنلي*
*┃ البوت يمنشن لك 🐤*


*┃ ➢.وهمي*
*┃ منشن وهمي لكل الاعضاء 👽*


*┃ ➢.رستر*
*┃ يسوي رستارت لرابط القروب ♻️*


*┃ ➢.الاوامر*
*┃ لعرض اوامر البوت 📜*
 

*┃ ➢.الاستقبال*
*┃ يجلب لك رابط الاستقبال 🌐*


*┃ ➢.المطور*
*┃ يجلب لك رقم المطور 🧑‍💻*


*┃ ➢.ترقيه*
*┃ ترقيه عضو لمشرف ↖️*


*┃ ➢.تخفيض*
*┃ تخفيض مشرف لعضو ↙️*


*┃ ➢.اضافه*
*┃ اضافه عضو للقروب 🚸*


*┃ ➢.طرد*
*┃ طرد عضو من القروب 🐍*


*┃ ➢.حذف*
*┃ حذف رسائل الاعضاء في الجروب 🦦*


*┃ ➢.المشرفين*
*┃ يعرض لك قائمه المشرفين ✨*


*┃ ➢.لينك*
 يجلب لك رابط الجروب 🪀*


*┃ ➢.تغيرالترحيب*
*┃ تغيير ترحيب البوت 🎉*


*┃ ➢.تغيرالمغادره*
*┃ تغيير مغادره البوت 🗑️*


*┃ ➢.ب*وت
*┃ يعطيك تعليم على البوت📜*

*┣━━━❰･ 🖼️اوامر الصور🖼️･❱━━━┫*

*┃ ➢.صورتك*
*┃تصميم صورتك مع شخصية انمي😒*


*┃ ➢.صورتي*
*┃يعطيك خلفيتك😎*


*┃ ➢.صورتك3*
*┃يصنع على صورتك بطاقة😂*


*┃ ➢.قط*
*┃يعطيك صور قطط🐱*


*┃ ➢.بنت*
*┃يعطيك صور بنات مزز🤒💖*

*┣━━━❰･ 🎈اوامر التحويلات🎈･❱━━━┫*

*┃ ➢.ملصق*
*┃ تحويل الصور وفيديوهات لملصق 🎴*


*┃ ➢.سرقه*
*┃ سرقه الملصقات بحقوقك 🎴*


*┃ ➢.لصوره*
*┃ تحويل الملصقات لصور 🔂*


*┃ ➢.لفيديو*
*┃ تحويل الملصق المتحرك لفيديو ♻️*


*┃ ➢.لصوتي*
*┃ تحويل الفيديوهات لصوت 🔁*


*┃ ➢.تليجراف*
*┃ رفع الصور وعمل لها رابط 📠*


*┃ ➢.صوره*
*┃ يجلب لك صور من جوجل 🖼️*


*┃ ➢.انطق*
*┃يحول لك اي نص الي كلام 😯*

*┣━━━❰･ 🦄اوامر التسليه🦄 ･❱━━━┫*

*┃ ➢.بروفايل*
*┃ يجلب لك معلومات بروفايلك 🪪*


*┃ ➢.اكس-او*
*┃ لعبه اكس او للتسليه 🎮*


*┃ ➢.مغادره*
*┃ مغادره الجوله في اكس او ❌*


*┃ ➢.توب*
*┃ يجيب توب 10 اللي تختارهم 🏆*


*┃ ➢.شاذ*
*┃ امزح مع صاحبك بالمنشن 🏳️‍🌈*


*┃ ➢.لو*
*┃ لو خيروك 😅*


*┃ ➢.حب*
*┃منشن الي تحبه والبوت يقيس حبه لك❤️*

*┃ ➢.غباء* 
*┃البوت يحدد لك كم غبائه🐱*

*┃ ➢.رجال*
*┃يحدد لك كم عدد رجولته 🤣*

*┃ ➢.ذكي*
*┃يحدد لك كم عدد الذكاء فيك😂*


*┃ ➢.الحب*
*┃ مقياس حب الاصدقاء 🫂*


*┃ ➢.صراحه*
*┃ لعبه الصراحه 🎋*


*┃ ➢.نوم*
*┃يعطيك ملصقات انمي في شكل 😴* 


*┃ ➢.عيد
*┃يعطيك صور عيد ميلاد 🧣
*┃╰━━━━━━━━━━━━━━━━╾•*
*┣━━━❰･😊قائمة الشكر😊･❱━━━┫*
*┃شكرا لكم على استخدام بوتات انوس يا عمري*
*┃انا بوت انتمي الي مملكة مغامـــــBOTــــره*
*┃المطور::967771160204*
*┃جروب الدعم::* https://chat.whatsapp.com/LO17u6F9Fw4LE9izmmyOGz
*╰━━━╼🖊توقيع مغامـــــBOTــــره╾━━━╯*  
 `.trim() 
 let buttons = [ 
 { buttonId: '#donar', buttonText: { displayText: '🎈الاوامر🎈' }, type: 1 }, 
 { buttonId: '#owner', buttonText: { displayText: '⚜️المطور⚜️' }, type: 1 }] 
 //{ buttonId: '#infobot', buttonText: { displayText: '🐾 𝙸𝙽𝙵𝙾𝙱𝙾𝚃 🐾' }, type: 1 }] 
 let buttonMessage = { 
 image: pp, 
 caption: str.trim(), 
 mentions: [m.sender], 
 footer: `*${wm}*`, 
 buttons: buttons, 
 headerType: 4, 
 contextInfo: { 
 mentionedJid: [m.sender], 
 externalAdReply: { 
 showAdAttribution: true, 
 mediaType: 'VIDEO', 
 mediaUrl: null, 
 title: '@emperoranus7621', 
 body: null, 
 thumbnail: img, 
 sourceUrl: `https://chat.whatsapp.com/LO17u6F9Fw4LE9izmmyOGz` 
 }}} 
 conn.sendMessage(m.chat, buttonMessage, { quoted: m }) 
 //await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true}) 
 } catch { 
 conn.reply(m.chat, '*[❗معلومة❗] 𝙴𝙻 𝙼𝙴𝙽𝚄 𝚃𝙸𝙴𝙽𝙴 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝚈 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙴𝙽𝚅𝙸𝙰𝚁𝙻𝙾, 𝚁𝙴𝙿𝙾𝚁𝚃𝙴𝙻𝙾 𝙰𝙻 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃*', m) 
 }} 
 handler.command = /^(menu|menú|memu|memú|help|info|الاوامر|اوامر|2|القائمة|قائمة|commands|commandos|cmd)$/i 
 handler.exp = 50 
 handler.fail = null 
 export default handler 
 function clockString(ms) { 
 let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) 
 let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60 
 let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60 
 return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
