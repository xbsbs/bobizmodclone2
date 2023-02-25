import { createHash } from 'crypto'
import PhoneNumber from 'awesome-phonenumber'
import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, participants }) => {
let pp = 'https://i.imgur.com/WHjtUae.jpg'
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
try {
pp = await conn.profilePictureUrl(who)
} catch (e) {

} finally {
let { name, limit, lastclaim, registered, regTime, age } = global.db.data.users[who]
let username = conn.getName(who)
let prem = global.prems.includes(who.split`@`[0])
let sn = createHash('md5').update(who).digest('hex')
let str = `*الاسم:* ${username} ${registered ? '(' + name + ') ': ''}
*الرقم:* ${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}
*الرابط:* wa.me/${who.split`@`[0]}${registered ? '\n*السن:* ' + age + ' años' : ''}
*الحد:* ${limit} 
*مسجل:* ${registered ? 'نعم': 'لا'}
*بريميوم:* ${prem ? 'نعم' : 'لا'}
*الرقم السري:* 
${sn}`
conn.sendButton(m.chat, str, author, pp, [['الاوامر✨', '.menu']], m)
}}
handler.help = ['profile [@user]']
handler.tags = ['xp']
handler.command = /^بروفايل|بروفيل?$/i
export default handler
