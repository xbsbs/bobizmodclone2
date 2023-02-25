let handler = async (m, { conn, text, isROwner, isOwner }) => {
if (text) {
global.db.data.chats[m.chat].sBye = text
m.reply('*[❗] تم تغير رساله المغادره*')
} else throw `*[❗] ادخل رساله المغادره, مثال:*\n*- @user (mención)*`
}
handler.help = ['setbye <text>']
handler.tags = ['group']
handler.command = ['تغيرالمغادره'] 
handler.admin = true
export default handler
