let fetch = require('node-fetch') 
 let handler  = async (m, { conn }) => { 
   conn.sendButtonLoc(m.chat, await (await fetch(flu + 'Truth')).buffer(), `${pickRandom(global.truth)}`, wm, 'Bener?😂', `beneran`, m) 
 } 
 handler.help = ['truth'] 
 handler.tags = ['game'] 
 handler.command = /^(سوال)$/i 
 handler.owner = false 
 handler.mods = false 
 handler.premium = false 
 handler.group = true 
 handler.private = false 
  
 handler.admin = false 
 handler.botAdmin = false 
  
 handler.fail = null 
  
 module.exports = handler 
  
 function pickRandom(list) { 
   return list[Math.floor(list.length * Math.random())] 
 } 
  
 global.truth = [ 
 "من هوا انا\nجاوب؟", 
 "من هوا صانع الانمي؟ ", 
 "ماهي اليوم الي نزل فيها القرآن الكريم?", 
 "ماهوا أشهر الذي نزل فيه القرآن?", 
 "اين التقى محمد رسول الله جبريل عليه السلام اول مره?", 
 "كم عدد آيات القرآن?", 
 "صلي على النبي محمد صلى الله عليه وسلم" , 
 "كم كان عمره الرسول يوم تؤفا ابوه", 
 "كم عدد الدول العربية?", 
 "ما هي الدوله الي تشتهر في اصل العرب وهيا اقوي دوله في العالم لا تنكرو انها بلادي😎?", 
 "كم حفظت من القرآن?", 
 "هل تحب حبيبتك?", 
 "كم عمرك?", 
 "هل انت جميل او قبيح بدون كذب?", 
 "كم معك اخوه?", 
 "ماهي اسم امك ولا تتهرب انا امي حواء وانت سريع🤣?", 
 ]