let handler = m => m; 
  
 handler.all = async function (m) { 
   let chat = global.db.data.chats[m.chat]; 
   let responses; 
    else if (/^ انوس احبك|انوس احبيك|انوس بدي اتزوجك|انوس اموت فيك$/i.test(m.text)) { 
     responses = [ 
       'مثل ما كنت بتكلم',  
          'من صدق',  
              'اخجلتني😊',  
                   'حبيبي 
       '
     ]; 
   } else if (/^السلام عليكم|السلام|سلام عليكم|مرحبا$/i.test(m.text)) { 
     responses = [ 
       'وعليكم السلام',  
          'وعليكم السلام حبي متور.',  
              ' وعليكم السلام كيفك',  
                   'وعليكم السلام ورحمة الله وبركاته' 
     ]; 
   }else if (/^طوم كيفيك|لاك كيفك|كيفيك|كيف الأحوال|كيف حالكم$/i.test(m.text)) { 
     responses = [ 
       'كل شيء بخير الحمد لله ',  
          ' مدري  ',  
              ' الحمد لله ماشي الحال ',  
                  'الحمد الله',  
                      ' اذا انت بخير انا بخير' 
     ]; 
   }else if (/^كل زق|كسمك|كس|زق$/i.test(m.text)) { 
     responses = [ 
       'عيب ',  
          ' تأدب ',  
              ' يا وسخ ',  
                  'الله يهديك ',  
                   ' عيب يا طفل' 
     ]; 
 }else if (/^انوس|انوسي|انووس|طوم$/i.test(m.text)) { 
     responses = [ 
       'هلا',  
           'ويش بدك',  
                'ماذا تريد',  
                  'لماذا؟ ',  
                   'ويش فيك' 
     ]; 
   }else if (/^هههه|ههههه|هههههه|ههههههه|هههههههه|ههههههههه|هههههههههه$/i.test(m.text)) { 
     responses = [ 
       'دوم هل ضحكة ',  
            ' دايمه',  
                   'دوم يا رب  ',  
                         'ههه ',  
                         'ههههههههه',  
                         'ايش لي يضحك',  
                         'اضحك معاك؟',  
                             'دوم ' 
     ]; 
   }else if (/^صباح الخير|صباح النور|صباح الورد$/i.test(m.text)) { 
     responses = [ 
       ' صباح الفل ',  
          '  صباح المدرسة',  
              ' صباح ولا مساء ',  
                  '  انا بنام تصبح على خير ',  
                   ' روح كمل نوم' 
     ]; 
    }else if (/^انوس اسكت|اسكت|بوت اسكت|اسكت يا ولد$/i.test(m.text)) { 
     responses = [ 
             'ما دخلك ',  
               ' مش علي كيفك',  
                 'لا يا مين انت لاتسكتني',  
                   'اسكت انت' 
     ]; 
    }  
   if (responses) { 
     let randomIndex = Math.floor(Math.random() * responses.length); 
     conn.reply(m.chat, responses[randomIndex], m); 
   } 
   return !0 
 }; 
  
 export default handler;