let handler = async (m, { conn, text, isROwner, isOwner }) => {
if (text) {
global.db.data.chats[m.chat].sWelcome = text
m.reply('*[❗] تم تغير الترحيب بشكل صحيح*')
} else throw `*[❗] ادخل رساله الترحيب الذي تريدها, مثال:*\n*- @user (mención)*\n*- @group (nombre de grupo)*\n*- @desc (description de grupo)*`
}
handler.help = ['setwelcome <text>']
handler.tags = ['group']
handler.command = ['تغيرالترحيب'] 
handler.admin = true
export default handler
