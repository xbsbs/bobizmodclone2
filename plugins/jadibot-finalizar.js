let handler  = async (m, { conn }) => { 
 if (global.conn.user.jid == conn.user.jid) conn.reply(m.chat, `${ag} إذا لم تكن روبوتا فرعيا ، فاتصل بالرقم الرئيسي لتصبح روبوتا`, m) 
 else { 
 await conn.reply(m.chat, `${rg} لقد قمت بتسجيل الخروج معي 😯`, m) 
 conn.ws.close()}} 
 handler.command = /^(berhenti|stop|detener)$/i 
 handler.owner = true   
 handler.fail = null 
 export default handler