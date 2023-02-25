import { toAudio } from '../lib/converter.js'
let handler = async (m, { conn, usedPrefix, command }) => {
let q = m.quoted ? m.quoted : m
let mime = (q || q.msg).mimetype || q.mediaType || ''
if (!/video|audio/.test(mime)) throw `*رد علي الفيديو الذي تريد تحويله الي صوتي*`
let media = await q.download()
if (!media) throw '*انا اسف حدث خطأ حاول مجددا*'
let audio = await toAudio(media, 'mp4')
if (!audio.data) throw '*حدث خطأ في تحويل الفيديو الي صوتي*'
conn.sendMessage(m.chat, { audio: audio.data,  mimetype: 'audio/mpeg' }, { quoted: m })
}
handler.alias = ['tomp3', 'toaudio']
handler.command = /^ل(صوتي|اغنيه)$/i
export default handler
