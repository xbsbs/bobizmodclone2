let handler = async (m, { conn, text }) => {
  let tag = `@${m.sender.replace(/@.+/, '')}`
  let mentionedJid = [m.sender]
  conn.reply(m.chat, tag, m, { contextInfo: { mentionedJid }})
}
handler.help = ['منشنلي']
handler.tags = ['group']
handler.command = /^منشنلي$/i

handler.group = false

export default handler