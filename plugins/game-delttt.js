import MessageType from '@adiwajshing/baileys'
let handler = async (m, { conn, usedPrefix, command }) => {
let room = Object.values(conn.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))
if (room == undefined) return conn.sendButton(m.chat, '*[❗] انت لست في اي مباراه*', wm, null, [['بدأ غرفه جديده', `${usedPrefix}ttt partida nueva`]], m)
delete conn.game[room.id]
await m.reply('*[ ✔ ] تم حذف الغرفه بنجاح*')}
handler.command = /^(delttt|deltt|delxo|deltictactoe)$/i
handler.fail = null
export default handler
