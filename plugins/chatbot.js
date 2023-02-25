let handler = m => m 
 handler.all = async function (m) { 
 let chat = global.db.data.chats[m.chat] 
  
 if (/^ا$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `اكتب a `, m) //wm, null, [['Menu', '#menu']], m) botones :V 
  
 } 
  
 if (/^الحمد لله$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, ` دوم يا رب، ايش تسوي؟ `, m) //wm, null, [['Menu', '#menu']], m) botones :V 
  
 } 
  
 if (/^يوي$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, ` ماذا ؟ `, m) //wm, null, [['Menu', '#menu']], m) botones :V 
  
 } 
  
 if (/^لا شيء و انت$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, ` اكلمك, `, m) //wm, null, [['Menu', '#menu']], m) botones :V 
  
 } 
  
 if (/^مم$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat,teks, m ` منورة بوند`, hi) //wm, null, [['Menu', '#menu']], m) botones :V 
  
 } 
  
 if (/^بوت زق$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, ` زق في عينك يا وجه البيضة`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
  
 } 
  
 if (/^حرامي$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `تتهم بريء بالسرقة 
 من دون تحري او بحث 
 عن حقيقة ليست ملموسة 
 ارحنا واعمل شرطي  
 ثم افتح فمك وثرثر 
 فكلامك كـ الجهل واحد  
 بل جهلاً ارحم من حديثك 
 تتصنع دور الشرطي  
 وكأنك محقق 
 بالله اصمت ولا تحرج نفسك  
 ارحنا وارح أعصابك  
 ان اكرمك الله بعقل 
 فبسكوتك اقتل جهلك 
 `, m) //wm, null, [['Menu', '#menu']], m) botones :V 
  
 } 
  
  
 if (/^ملل$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, ` نعرف فا اسكت `, m) //wm, null, [['Menu', '#menu']], m) botones :V 
  
 } 
  
 if (/^السلام عليكم$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, ` وعليكم السلام `, m) //wm, null, [['Menu', '#menu']], m) botones :V 
  
 } 
  
 if (/^تصبح على خير/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, ` و انت بخير حبيبي `, m) //wm, null, [['Menu', '#menu']], m) botones :V 
  
 }  
  
 if (/^احبيك$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, ` اكثر `, m) //wm, null, [['Menu', '#menu']], m) botones :V 
  
 } 
     
 if (/^كل زق$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, ` ما اكلك `, m) //wm, null, [['Menu', '#menu']], m) botones :V 
  
 } 
  
 if (/^كيفك|كيفيك$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, ` الحمد لله و انت`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
  
 } 
 return !0 } 
 export default handler