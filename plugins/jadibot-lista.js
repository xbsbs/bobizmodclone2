/*async function handler(m, { usedPrefix }) { 
 let users = [...new Set([...global.conns.filter(conn => conn.user && conn.state !== 'close').map(conn => conn.user)])] 
 await m.reply( '😺 𝙇𝙄𝙎𝙏𝘼 𝘿𝙀 𝙎𝙐𝘽𝘽𝙊𝙏𝙎 (𝙎𝙀𝙍𝘽𝙊𝙏/𝙅𝘼𝘿𝙄𝘽𝙊𝙏) 𝘼𝘾𝙏𝙄𝙑𝙊𝙎\n\n🙌 𝙋𝙐𝙀𝘿𝙀𝙎 𝘾𝙊𝙉𝙏𝘼𝘾𝙏𝘼𝙍𝙇𝙊𝙎 𝙋𝘼𝙍𝘼 𝙋𝙀𝘿𝙄𝙍 𝙌𝙐𝙀 𝙎𝙀 𝙐𝙉𝘼𝙉 𝘼 𝙏𝙐 𝙂𝙍𝙐𝙋𝙊, 𝙎𝙀 𝙍𝙀𝙎𝙋𝙀𝙏𝙐𝙊𝙎𝙊\n\n❕ 𝙎𝙄 𝙀𝙇 𝙏𝙀𝙓𝙏𝙊 𝘼𝙋𝘼𝙍𝙀𝘾𝙀 𝙀𝙉 𝘽𝙇𝘼𝙉𝘾𝙊 𝙎𝙄𝙂𝙉𝙄𝙁𝙄𝘾𝘼 𝙌𝙐𝙀 𝙉𝙊 𝘼𝙃𝙄 𝙎𝙐𝘽𝘽𝙊𝙏𝙎 𝘼𝘾𝙏𝙄𝙑𝙊𝙎\n\n❗ 𝘾𝘼𝘿𝘼 𝙐𝙎𝙐𝘼𝙍𝙄𝙊 𝙎𝙐𝘽 𝘽𝙊𝙏 𝙈𝘼𝙉𝙀𝙅𝘼 𝙇𝘼 𝙁𝙐𝙉𝘾𝙄𝙊𝙉 𝘾𝙊𝙈𝙊 𝙌𝙐𝙄𝙀𝙍𝘼, 𝙀𝙇 𝙉𝙐𝙈𝙀𝙍𝙊 𝙋𝙍𝙄𝙉𝘾𝙄𝙋𝘼𝙇 𝙉𝙊 𝙎𝙀 𝙃𝘼𝘾𝙀 𝙍𝙀𝙎𝙋𝙊𝙉𝙎𝘼𝘽𝙇𝙀.') 
 await m.reply(users.map(v => '🐈 Wa.me/' + v.jid.replace(/[^0-9]/g, '') + `?text=${usedPrefix}estado\n(${v.name})\n\n`).join('\n'))} 
 handler.command = handler.help = ['listajadibots','listabots','listjadibot','bots','subsbots'] 
 handler.tags = ['jadibot'] 
 export default handler 
  
 😺 قائمة الروبوتات الفرعية النشطة (SERBOT / JADIBOT) 
  
 🙌 يمكنك الاتصال بهم لتطلب منهم الانضمام إلى مجموعتك ، كن محترما 
  
 ❕ إذا ظهر النص فارغا ، فهذا يعني أنه لا توجد روبوتات فرعية نشطة 
  
 ❗ يدير كل مستخدم روبوت فرعي الوظيفة كما يريد ، والرقم الرئيسي ليس مسؤولا  
 _ 
 */