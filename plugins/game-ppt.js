let handler = async (m, { conn, text, command, usedPrefix, args }) => {
let pp = 'https://telegra.ph/file/1592262447c5ce8714b60.jpg'
if (!args[0]) return conn.sendHydrated(m.chat, 'مرحبا بك أنا بوت انوس \n\nاقدم لك أكثر من100امر:\nاكتب.اوامر\nاكتب.الاوامر\nاكتب.المطور\n\n𝙐𝙨𝙚 𝙚𝙣 𝙢𝙞𝙣𝙪𝙨𝙘𝙪𝙡𝙖𝙨', wm, pp, null, null, null, null, [
['الاوامر 💸', `${usedPrefix + command} papel`],
['المطور 📄', `${usedPrefix + command} المطور`],
['عمك لاك ✂️', `${usedPrefix + command} لاك كيفك`]
], m)
var astro = Math.random()
if (astro < 0.34) {
astro = 'piedra' 
} else if (astro > 0.34 && astro < 0.67) {
astro = 'tijera' 
} else {
astro = 'papel'
}
if (text == 'astro') {
global.db.data.users[m.sender].exp += 500
m.reply(`🔰 Empate!\n\n*👉🏻 Tu: ${text}\n👉🏻 El Bot: ${astro}\n🎁 Premio +500 XP*`)
} else if (text == 'papel') {
if (astro == 'piedra') {
global.db.data.users[m.sender].exp += 1000
m.reply(`🥳 Tú ganas! 🎉\n\n*👉🏻 Tu: ${text}\n👉🏻 El Bot: ${astro}\n🎁 Premio +1000 XP*`)
} else {
global.db.data.users[m.sender].exp -= 300
m.reply(`☠️ Tú pierdes! ❌\n\n*👉🏻 Tu: ${text}\n👉🏻 El Bot: ${astro}\n❌ Premio -300 XP*`)
}
} else if (text == 'tijera') {
if (astro == 'papel') {
global.db.data.users[m.sender].exp += 1000
m.reply(`🥳 Tú ganas! 🎉\n\n*👉🏻 Tu: ${text}\n👉🏻 El Bot: ${astro}\n🎁 Premio +1000 XP*`)
} else {
global.db.data.users[m.sender].exp -= 300
m.reply(`☠️ Tú pierdes! ❌\n\n*👉🏻 Tu: ${text}\n👉🏻 El Bot: ${astro}\n❌ Premio -300 XP*`)
}
} else if (text == 'tijera') {
if (astro == 'papel') {
global.db.data.users[m.sender].exp += 1000
m.reply(`🥳 Tú ganas! 🎉\n\n*👉🏻 Tu: ${text}\n👉🏻 El Bot: ${astro}\n🎁 Premio +1000 XP*`)
} else {
global.db.data.users[m.sender].exp -= 300
m.reply(`☠️ Tú pierdes! ❌\n\n*👉🏻 Tu: ${text}\n👉🏻 El Bot: ${astro}\n❌ Premio -300 XP*`)
}
} else if (text == 'papel') {
if (astro == 'piedra') {
global.db.data.users[m.sender].exp += 1000
m.reply(`🥳 Tú ganas! 🎉\n\n*👉🏻 Tu: ${text}\n👉🏻 El Bot: ${astro}\n🎁 Premio +1000 XP*`)
} else {
global.db.data.users[m.sender].exp -= 300
m.reply(`☠️ Tú pierdes! ❌\n\n*👉🏻 Tu: ${text}\n👉🏻 El Bot: ${astro}\n❌ Premio -300 XP*`)
}
} else if (text == 'piedra') {
if (astro == 'tijera') {
global.db.data.users[m.sender].exp += 1000
m.reply(`🥳 Tú ganas! 🎉\n\n*👉🏻 Tu: ${text}\n👉🏻 El Bot: ${astro}\n🎁 Premio +1000 XP*`)
} else {
global.db.data.users[m.sender].exp -= 300
m.reply(`☠️ Tú pierdes! ❌\n\n*👉🏻 Tu: ${text}\n👉🏻 El Bot: ${astro}\n❌ Premio -300 XP*`)
}
}}
handler.help = ['ppt']
handler.tags = ['games']
handler.command = /^(بوت)$/i
export default handler
