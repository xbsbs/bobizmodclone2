let handler = async (m, { conn, participants, command }) => {
    let member = participants.map(u => u.jid)
    let orang
    if (/ku/i.test(command)) orang = m.sender
    else orang = member[Math.floor(Math.random() * member.length)]
    let jodoh = member[Math.floor(Math.random() * member.length)]
    let jawab = `@${orang.replace(/@.+/, '')} ❤️ @${jodoh.replace(/@.+/, '')}`.trim()
    let mentionedJid = [orang, jodoh]
    conn.reply(m.chat, jawab, m, { contextInfo: { mentionedJid } })
}
handler.help = ['اخي', 'اخي']
handler.tags = ['fun']
handler.command = /^اخي(in|ku)|صديقي$/i
handler.group = true

module.exports = handler