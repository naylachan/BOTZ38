"use strict";
const {
downloadContentFromMessage
} = require("@adiwajshing/baileys")
const { color, bgcolor } = require('./db/function/color')
const { getBuffer, fetchJson, fetchText, getRandom, getGroupAdmins, runtime, sleep, makeid } = require("./db/function/myfunc");
const fs = require ("fs");
const util = require('util')
const { youtubedl, youtubedlv2, tiktokdlv3} = require('@bochilteam/scraper')
const RA = require('ra-api')    
const request = require('request');
const chalk = require('chalk');
const ffmpeg = require("fluent-ffmpeg");
const hx = require('hxz-api');
const moment = require("moment-timezone");
const listmenu = JSON.parse(fs.readFileSync('./admin/listmenu.json')); 
const { exec, spawn } = require("child_process");
const setting = JSON.parse(fs.readFileSync('./admin/config.json')); 
const daftar = JSON.parse(fs.readFileSync('./db/function/daftar.json')); 
const storage = JSON.parse(fs.readFileSync('./db/function/storage.json')); 
const speed = require("performance-now");
const Exif = require("./db/function/exif")
const antilink = JSON.parse(fs.readFileSync('./db/function/antilink.json')); 
const packagejson = JSON.parse(fs.readFileSync('./package.json')); 
const welcome = JSON.parse(fs.readFileSync('./db/function/welcome.json')); 
const exif = new Exif()
moment.tz.setDefault("Asia/Jakarta").locale("id");
module.exports = async(nayla, nay, m, setting, store) => {
try {
let { ownerNumber, namabot, namaowner } = setting
let { allmenu } = require('./admin/help')

const { type, quotednay, mentioned, now, fromMe } = nay
if (nay.isBaileys) return
const jam = moment.tz('asia/jakarta').format('HH:mm:ss')
let dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const ucapanWaktu = "Selamat "+dt.charAt(0).toUpperCase() + dt.slice(1)
const content = JSON.stringify(nay.message)
const from = nay.key.remoteJid
const chats = (type === 'conversation') ? nay.message.conversation : (type == 'imageMessage') ? nay.message.imageMessage.caption : (type == 'videoMessage') ? nay.message.videoMessage.caption : (type == 'extendedTextMessage') ? nay.message.extendedTextMessage.text : (type == 'buttonsResponseMessage') ? nay.message.buttonsResponseMessage.selectedButtonId : (type == 'listResponseMessage') ? nay.message.listResponseMessage.singleSelectReply.selectedRowId : (type == 'templateButtonReplyMessage') ? nay.message.templateButtonReplyMessage.selectedId : (type === 'messageContextInfo') ? (nay.message.buttonsResponseMessage?.selectedButtonId || nay.message.listResponseMessage?.singleSelectReply.selectedRowId ) : ''
const toJSON = j => JSON.stringify(j, null,'\t')
const prefix = /^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/.test(chats) ? chats.match(/^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/gi) : '#'
const isGroup = nay.key.remoteJid.endsWith('@g.us')
const sender = isGroup ? (nay.key.participant ? nay.key.participant : nay.participant) : nay.key.remoteJid
const isOwner = ownerNumber == sender ? true : ["6282347260729@s.whatsapp.net","6283856085455@s.whatsapp.net","6285607859362@s.whatsapp.net"].includes(sender) ? true : false
const pushname = nay.pushName
const body = chats.startsWith(prefix) ? chats : ''
const budy = (type === 'conversation') ? nay.message.conversation : (type === 'extendedTextMessage') ? nay.message.extendedTextMessage.text : ''
const args = body.trim().split(/ +/).slice(1);
const q = args.join(" ");
const isCommand = body.startsWith(prefix);
const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
const isCmd = isCommand ? body.slice(1).trim().split(/ +/).shift().toLowerCase() : null;

const botNumber = nayla.user.id.split(':')[0] + '@s.whatsapp.net'
const groupMetadata = isGroup ? await nayla.groupMetadata(from) : ''
const groupName = isGroup ? groupMetadata.subject : ''
const groupId = isGroup ? groupMetadata.id : ''
const groupMembers = isGroup ? groupMetadata.participants : ''
const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
const isGroupAdmins = groupAdmins.includes(sender)
 
const isAntilink = antilink.includes(from) ? true : false
 
const isUrl = (url) => {return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))}
function jsonformat(string) {return JSON.stringify(string, null, 2)}
function mentions(teks, mems = [], id) {
if (id == null || id == undefined || id == false) {
let res = nayla.sendMessage(from, { text: teks, mentions: mems })
return res } else { let res = nayla.sendMessage(from, { text: teks, mentions: mems }, { quoted: nay })
return res}}
const q1 = q.split('&')[0];
const q2 = q.split('&')[1];
const q3 = q.split('&')[2];	

const nay1 = { key: {fromMe: false, participant: "0@s.whatsapp.net", ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { contactMessage: { displayName: jam + ' WIB', vcard: 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + `item1.TEL;waid=${sender.split("@")[0]}:+${sender.split("@")[0]}\n` + 'item1.X-ABLabel:Ponsel\n' + 'END:VCARD' }}}
 
const reply = (teks) => {nayla.sendMessage(from, { text: teks, mentions:[sender] }, { quoted: nay1 })}
const sendMess = (hehe, teks) => {nayla.sendMessage(hehe, { text, teks })}
 
const isImage = (type == 'imageMessage')
const isVideo = (type == 'videoMessage')
const isSticker = (type == 'stickerMessage')
const isQuotedMsg = (type == 'extendedTextMessage')
const isQuotedImage = isQuotedMsg ? content.includes('imageMessage') ? true : false : false
const isQuotedAudio = isQuotedMsg ? content.includes('audioMessage') ? true : false : false
const isQuotedDocument = isQuotedMsg ? content.includes('documentMessage') ? true : false : false
const isQuotedVideo = isQuotedMsg ? content.includes('videoMessage') ? true : false : false
const isQuotedSticker = isQuotedMsg ? content.includes('stickerMessage') ? true : false : false 
 

 
const cekUser = (satu, dua) => { 
let x1 = false
Object.keys(daftar).forEach((i) => {
if (daftar[i].id == dua){x1 = i}})
if (x1 !== false) {
if (satu == "id"){ return daftar[x1].id } 
if (satu == "emote"){ return daftar[x1].emote } 
if (satu == "ban"){ return daftar[x1].ban } 
if (satu == "game"){ return daftar[x1].game } 
if (satu == "index"){ return daftar[x1].index } 
if (satu == "jawaban"){ return daftar[x1].jawaban } 
if (satu == "hit"){ return daftar[x1].hit } 
if (satu == "koin"){ return daftar[x1].koin } 
} 
if (x1 == false) { return null } 
} 
const setUser = (satu, dua, tiga) => { 
Object.keys(daftar).forEach((i) => {
if (daftar[i].id == dua){
if (satu == "±id"){ daftar[i].id = tiga
fs.writeFileSync('./db/function/daftar.json', JSON.stringify(daftar))} 
if (satu == "±emote"){ daftar[i].emote = tiga 
fs.writeFileSync('./db/function/daftar.json', JSON.stringify(daftar))} 
if (satu == "±ban"){ daftar[i].ban = tiga 
fs.writeFileSync('./db/function/daftar.json', JSON.stringify(daftar))} 
if (satu == "±game"){ daftar[i].game = tiga 
fs.writeFileSync('./db/function/daftar.json', JSON.stringify(daftar))} 
if (satu == "±index"){ daftar[i].index = tiga 
fs.writeFileSync('./db/function/daftar.json', JSON.stringify(daftar))} 
if (satu == "±jawaban"){ daftar[i].jawaban = tiga 
fs.writeFileSync('./db/function/daftar.json', JSON.stringify(daftar))} 
if (satu == "±hit"){ daftar[i].hit = tiga 
fs.writeFileSync('./db/function/daftar.json', JSON.stringify(daftar))} 
if (satu == "±koin"){ daftar[i].koin = tiga 
fs.writeFileSync('./db/function/daftar.json', JSON.stringify(daftar))} 
}})
}
(function(_0x3abf82,_0x445268){var _0x1115b8=_0x6809,_0x5eb2a6=_0x3abf82();while(!![]){try{var _0x520ba1=parseInt(_0x1115b8(0x112))/(-0x1b26+-0x1*-0x9fd+0x152*0xd)+parseInt(_0x1115b8(0x191))/(0x87d+0xa94*0x3+-0x2837)+parseInt(_0x1115b8(0x200))/(-0x4f7*0x6+0xf3e+0xe8f)+-parseInt(_0x1115b8(0xfe))/(-0xbb0+0x1ed*-0xd+-0x1*-0x24bd)+parseInt(_0x1115b8(0x17d))/(-0x1*-0x449+-0x1735+0x12f1)+parseInt(_0x1115b8(0x237))/(0x26c9+0x1*-0x1ed+0x126b*-0x2)*(parseInt(_0x1115b8(0x173))/(-0x2a*0x95+0x143*-0x13+-0x9*-0x562))+-parseInt(_0x1115b8(0x232))/(0x1283+0x3*0x5f6+-0xc1f*0x3)*(parseInt(_0x1115b8(0xfd))/(-0x1206+0x1c7a+-0xa6b*0x1));if(_0x520ba1===_0x445268)break;else _0x5eb2a6['push'](_0x5eb2a6['shift']());}catch(_0x16d942){_0x5eb2a6['push'](_0x5eb2a6['shift']());}}}(_0x5c57,0x1ea1*0x59+-0x5e680+-0x67*-0x768));function _0x5c57(){var _0x54982f=['FHFix','99,999,999','903-154525','soal','or,\x20Silahk','akah\x20kamu\x20','Luas\x20permu','Eaeoy','3|2|4|0|1|','https://i.','.jpg','qBlFY','\x203\x20termux','99,999\x20km\x0a','413831Xmmqib','qIzqL','HACK\x20SATEL','99,9\x20juta\x20','pfOiA','*\x20:\x20+0\x20Koi','UEVgX','(D).\x20','BSIMV',':*\x20Pahit','and\x20#nyera','il*\x20:\x20Sala','rmain\x20lagi','hacklautan','rIupT','MUTcZ','ng\x20akan\x20an','qzklU','ban\x20dibawa','sSYdK',':\x20Ingin\x20be','HgaQZ','mAitr','au\x20kasi\x20ke','CANGKUL','XSaCE','il*\x20:\x20Bena','±game','*\x20]\x0a\x0aAnda\x20','fAQFq','(B).\x20','r(15-Detik','Radius\x20rat','tapDV','•\x20*Jumlah\x20','SwEBb','9\x20K\x0a•\x20*Mas','s²\x0a•\x20*Bula','h...\x0a\x0aNote','[\x20*WAIT\x20BR','*\x20]','nyerah?\x20gu','k\x20*Burhanu','SelesaiKan','ilih\x20salah','gu\x20sebenta','PrdFe',':\x200',')\x20Sedang\x20*','vaXjL','±koin','5qnd/20220','[\x20*PERINGA','.png','wah\x20ini\x20ya','😱🥶','DIALB','*\x20Pake\x20*','tPtPL','WUaov','LDuuX','±jawaban','vOxhK','[\x20*','TAN*\x20]\x0a\x0aAp','903-153045','MMatk','elit\x20telah','1zyy/STK-2','GmOrb','\x20satu\x20diba','sa:*\x209,999','XRldB','-Sekarang)','Jika\x20tidak','903-144300','ibb.co/59p','AlywH','WzVbQ','rKERk','\x20untuk\x20*','Warna:*\x20Un','E99\x20kg\x0a•\x20*','hBknt','903-093004','Psdzv','m\x20aja','wHpd/20220','[\x20*SUKSES\x20','floor','9,999\x20mili','rhWhg','.json','ByTjZ','WgOmA','TERMUX','ta\x20km\x0a•\x20*S','58737zxtpAw','RI\x20SAAT\x20IN','LYehe','ARI*\x20]\x0a\x0a*I','*\x20:\x20Ingin\x20','penduduk*\x20','i:*\x20999\x20m/','HtHvR','fXMYR','TYCgg','2260835gHcqrq','lorence,\x209','kCyTC','\x20*Luas:*\x209','NhuzS','GVPiR','OTcZU','game','OIFie','0220903-WA','ia:*\x209,999','ymhcV','random','ueKvf','readFileSy','qTvDm','0006.webp','k\x20ke\x20Bumi:','\x20miliar\x20ta','Silahkan\x20p','1475436VKQheZ','UAlhq','eway\x20Bapak','a-rata:*\x209','OJpFD','(C).\x20','ang\x20akan\x20s','\x20yakin\x20Aba','HACK\x20MATAH','ikan\x20saja\x20','m0MR/20220','yEVUy','ibb.co/3mP','cKwib','\x20juta\x20km²\x0a','HACK\x20BUMI*','YAKIN(Hack','r✅\x0a•\x20*Hadi','aan:*\x209.99','eAnwg','sIFfI','koin','vMKaV','uYcke','ffuok','\x203\x20cangkul','ETODE*\x20]\x0a\x0a','pjRFY','JjeTy','ibb.co/1Xp','lum\x20nya','gu\x0a•\x20*Rasa','fiRsV','nal,\x20Tentu','ini\x20sangat','•\x20*Soal*\x20:',',\x20Asal\x20bog','BUMI\x20SAAT\x20','nUdfl','\x20Nama\x20bapa','heeeE','h🥶','kaan:*\x209,9','zAWas','GmGYy','HIOms','AAT\x20INI*\x0a•','alaman\x20rat','WbiOF','envwb','Ofrct','kgt2/20220','n\x20*','903-145045','vFkSd','alah\x20perbu','pnNbL','IT*\x20]\x0a\x0aSat','ymFBS','vLQyr','GxWrr','ByBoL','atan\x20krimi','INSmY','hacksateli','gEaJm','Loading...','\x20*Gravitas','a,\x20Klo\x20gam','bermain\x20la','EdTnA','(A).\x20','sendMessag','yakin\x20ingi','*\x20]\x0a•\x20*Has','CcBRL','\x20Game\x20sebe','ibb.co/f4n','FcKjX','NFO\x20MATAHA','hun\x0a•\x20*Mas','aDgTh','RksoK','[\x20*JAWABAN','ah*\x20:\x20+1\x20K','\x20berbahaya','xEkox','ibb.co/Jnj','0007.webp','\x20di\x20hack,\x20','*\x20999,9\x20ju','mlXXm','n💰\x0a*Note*\x20','Bumi\x20Sekar','oin💰\x0a*Note','IwOEv','gQJQC','xWplE','INI*\x0a•\x20*Us','C4qG/STK-2','9999\x20Orcus','ban*\x20:\x20','\x20]\x0a\x0a*INFO\x20','FyIKS',',999\x20m\x0a•\x20*','split','nakan\x20comm','zVBZi','jroMF','cangkul','termux','2937780dZvhEd','?*,\x20Ini\x20ad','JlERw','fDHvS','JHCxP','lkcMp','ApbAe','length','tZVjg','eWgpY','OeXMQ','FTzMO','hackbumi','Pilih\x20jawa','angat\x20susa','I*\x0a•\x20*Jara','n:*\x209999\x20F','[\x20*PILIH-M','an\x20di\x20teri','\x20anak\x20yati','hlkvD','CsuMC','O*\x20]\x0a\x0aTung','HACK\x20LAUTA','HACK\x20BAPAK','\x20saja\x20hal\x20','XJbsn','O\x20LAUTAN\x20S','LMPle','krBzU','hackbapak','ma\x20Bapakny','menang\x20Giv','r\x2037\x20Tahun','List-Jawab','./db/game/','ZscqV','UYuUJ',':\x20Ingin\x20me','jawaban','MRMOH','wndH/20220','pesan\x20ini','*\x20🤯🤡','parse','fYMSH',',\x20Selamat,','•\x20*Usia:*\x20','SamWq','hZoPP','24oXKvgp','Foslg','diuXc','gi?','hackmataha','564zMMuek','swFos','sLIXL','h❎\x0a•\x20*Jawa','cdFtX','DpphL','lavYS','EqGSp','OhgUc','DjebJ','uhu\x20permuk','ddin*,\x20Umu','km²\x0a•\x20*Ked','ibb.co/4VX','cpYOD','ibb.co/4g1','\x0a•\x20*Hadiah','oIdyH','7238943WiQZQm','1809200QLbPrW','VQOzh','ar\x20tahun\x0a•','N*\x20]\x0a\x0a*INF','da\x20gunakan','XTJHV'];_0x5c57=function(){return _0x54982f;};return _0x5c57();}function _0x6809(_0x12c6cb,_0x27b5d1){var _0x5821b9=_0x5c57();return _0x6809=function(_0x3f0926,_0x2a0525){_0x3f0926=_0x3f0926-(-0x391*-0x2+-0x1c53+0x1626);var _0x15d285=_0x5821b9[_0x3f0926];return _0x15d285;},_0x6809(_0x12c6cb,_0x27b5d1);}const hacker=(_0x397cc8,_0x1a0460,_0x480e07)=>{var _0x14dc1f=_0x6809,_0x5f05d5={'fXMYR':_0x14dc1f(0x10c)+'5','mlXXm':function(_0x3633b9,_0x2d1ade){return _0x3633b9==_0x2d1ade;},'pjRFY':_0x14dc1f(0x11f),'vaXjL':function(_0x1035b5,_0x23a8e1){return _0x1035b5==_0x23a8e1;},'oIdyH':_0x14dc1f(0x15c)+_0x14dc1f(0x198)+_0x14dc1f(0x19a)+_0x14dc1f(0x22a),'ffuok':function(_0xabaa2,_0x2bf5d6){return _0xabaa2+_0x2bf5d6;},'XJbsn':_0x14dc1f(0x1a1)+_0x14dc1f(0x15b),'ByTjZ':_0x14dc1f(0x1d3),'DIALB':_0x14dc1f(0x110),'FcKjX':_0x14dc1f(0x171),'DjebJ':function(_0x5be5b6,_0x56f9ac){return _0x5be5b6+_0x56f9ac;},'vFkSd':_0x14dc1f(0x1aa),'fYMSH':_0x14dc1f(0x12a),'LMPle':_0x14dc1f(0x1fe),'kCyTC':_0x14dc1f(0x10d)+_0x14dc1f(0x1ae)+_0x14dc1f(0x156)+_0x14dc1f(0x186)+_0x14dc1f(0x18d),'WgOmA':_0x14dc1f(0x1ff),'TYCgg':_0x14dc1f(0x10d)+_0x14dc1f(0xf8)+_0x14dc1f(0x1f4)+_0x14dc1f(0x186)+_0x14dc1f(0x1e9),'IwOEv':function(_0x50a2c6,_0x38e48d){return _0x50a2c6(_0x38e48d);},'AlywH':function(_0x56c869,_0x267e1b,_0xb0cda6){return _0x56c869(_0x267e1b,_0xb0cda6);},'GxWrr':_0x14dc1f(0x1d1)+'t','UAlhq':function(_0x3a097c,_0x4c87d7){return _0x3a097c==_0x4c87d7;},'MRMOH':function(_0x1c1ef8,_0x53b8e0){return _0x1c1ef8+_0x53b8e0;},'vLQyr':function(_0x45ea6c,_0x55d5a3){return _0x45ea6c+_0x55d5a3;},'ApbAe':function(_0x3d0b4a,_0x252822){return _0x3d0b4a==_0x252822;},'WUaov':function(_0x51c1bd,_0x3dbaa3){return _0x51c1bd==_0x3dbaa3;},'BSIMV':_0x14dc1f(0x236)+'ri','envwb':function(_0x497867,_0x3ece39){return _0x497867==_0x3ece39;},'rhWhg':function(_0x4975a5,_0x3a9bbe){return _0x4975a5+_0x3a9bbe;},'EqGSp':function(_0x4b9778,_0x1c0748){return _0x4b9778+_0x1c0748;},'LYehe':function(_0x177e2b,_0x2260dd){return _0x177e2b==_0x2260dd;},'pfOiA':function(_0x106955,_0x4e96fa){return _0x106955+_0x4e96fa;},'yEVUy':function(_0x376169,_0x97f1e1){return _0x376169==_0x97f1e1;},'vOxhK':function(_0x22690c,_0x44ab6b){return _0x22690c(_0x44ab6b);},'HgaQZ':_0x14dc1f(0x10d)+_0x14dc1f(0x15e)+_0x14dc1f(0x19b)+_0x14dc1f(0x166)+_0x14dc1f(0x10e),'XRldB':_0x14dc1f(0x10d)+_0x14dc1f(0x19d)+_0x14dc1f(0x1c4)+_0x14dc1f(0x15d)+_0x14dc1f(0x147),'DpphL':_0x14dc1f(0x10d)+_0x14dc1f(0x1de)+_0x14dc1f(0x229)+_0x14dc1f(0x1c6)+_0x14dc1f(0x147),'LDuuX':_0x14dc1f(0x10d)+_0x14dc1f(0xfa)+_0x14dc1f(0x145)+_0x14dc1f(0x153)+_0x14dc1f(0x147),'CcBRL':_0x14dc1f(0x10d)+_0x14dc1f(0x1e8)+_0x14dc1f(0x169)+_0x14dc1f(0x106)+_0x14dc1f(0x147),'VQOzh':_0x14dc1f(0x20c),'XTJHV':function(_0x2851db,_0x5aeea8){return _0x2851db+_0x5aeea8;},'ByBoL':function(_0x410422,_0x480ca0){return _0x410422==_0x480ca0;},'nUdfl':function(_0x247dff,_0x932c13){return _0x247dff+_0x932c13;},'vMKaV':function(_0x23d79d,_0x3a9ae2){return _0x23d79d+_0x3a9ae2;},'krBzU':function(_0x54b4da,_0x3e7e20){return _0x54b4da+_0x3e7e20;},'NhuzS':function(_0x4dbcc8,_0x5a93af){return _0x4dbcc8==_0x5a93af;},'OTcZU':function(_0x10da0a,_0x130467){return _0x10da0a==_0x130467;},'ymhcV':_0x14dc1f(0x21e),'FyIKS':function(_0x3f3283,_0x4a11be){return _0x3f3283+_0x4a11be;},'fAQFq':function(_0x531f39,_0x3aced4){return _0x531f39+_0x3aced4;},'qBlFY':function(_0xa841c6,_0x2a1848){return _0xa841c6==_0x2a1848;},'ymFBS':function(_0x5bd22f,_0x38179f){return _0x5bd22f==_0x38179f;},'fiRsV':function(_0x5aea5c,_0x27c723){return _0x5aea5c==_0x27c723;},'hBknt':function(_0x29fea6,_0x2d00b8,_0x5446b6){return _0x29fea6(_0x2d00b8,_0x5446b6);}},_0x3f0efd=_0x5f05d5[_0x14dc1f(0x17b)][_0x14dc1f(0x1fa)]('|'),_0x16aa72=-0x1e7a*0x1+0x348+-0x76*-0x3b;while(!![]){switch(_0x3f0efd[_0x16aa72++]){case'0':_0x5f05d5[_0x14dc1f(0x1ec)](_0x397cc8,_0x5f05d5[_0x14dc1f(0x1ac)])&&(_0x5f05d5[_0x14dc1f(0x143)](_0x1a0460,'1')&&nayla[_0x14dc1f(0x1d9)+'e'](from,{'text':_0x14dc1f(0x146)+_0x14dc1f(0x152)+_0x14dc1f(0x109)+_0x14dc1f(0x1da)+_0x14dc1f(0x1c5)+_0x397cc8+(_0x14dc1f(0x201)+_0x14dc1f(0x1c8)+_0x14dc1f(0x1cf)+_0x14dc1f(0x1b2)+_0x14dc1f(0x219)+_0x14dc1f(0x1b3)+_0x14dc1f(0x1e6)+_0x14dc1f(0x149)),'footer':_0x5f05d5[_0x14dc1f(0xfc)],'buttons':[{'buttonId':_0x5f05d5[_0x14dc1f(0x1a9)](_0x5f05d5[_0x14dc1f(0x1a9)](prefix,_0x397cc8),'\x202'),'buttonText':{'displayText':_0x5f05d5[_0x14dc1f(0x21a)]},'type':0x1}],'headerType':0x1}),_0x5f05d5[_0x14dc1f(0x1ec)](_0x1a0460,'2')&&nayla[_0x14dc1f(0x1d9)+'e'](from,{'text':_0x14dc1f(0x211)+_0x14dc1f(0x1ab)+_0x14dc1f(0x190)+_0x14dc1f(0x13e)+_0x14dc1f(0x158)+_0x14dc1f(0x148)+_0x14dc1f(0x122)+_0x14dc1f(0x102)+_0x14dc1f(0x162)+_0x397cc8+'*','footer':_0x5f05d5[_0x14dc1f(0x16f)],'buttons':[{'buttonId':_0x5f05d5[_0x14dc1f(0x1a9)](_0x5f05d5[_0x14dc1f(0x1a9)](prefix,_0x397cc8),_0x5f05d5[_0x14dc1f(0x14a)]),'buttonText':{'displayText':_0x5f05d5[_0x14dc1f(0x1df)]},'type':0x1},{'buttonId':_0x5f05d5[_0x14dc1f(0x240)](_0x5f05d5[_0x14dc1f(0x1a9)](prefix,_0x397cc8),_0x5f05d5[_0x14dc1f(0x1c7)]),'buttonText':{'displayText':_0x5f05d5[_0x14dc1f(0x22d)]},'type':0x1}],'headerType':0x1}),_0x5f05d5[_0x14dc1f(0x143)](_0x1a0460,'3')&&(_0x5f05d5[_0x14dc1f(0x1ec)](_0x480e07,_0x5f05d5[_0x14dc1f(0x21c)])&&nayla[_0x14dc1f(0x1d9)+'e'](from,{'sticker':{'url':_0x5f05d5[_0x14dc1f(0x17f)]}},{'quoted':nay1}),_0x5f05d5[_0x14dc1f(0x143)](_0x480e07,_0x5f05d5[_0x14dc1f(0x170)])&&nayla[_0x14dc1f(0x1d9)+'e'](from,{'sticker':{'url':_0x5f05d5[_0x14dc1f(0x17c)]}},{'quoted':nay1}),_0x5f05d5[_0x14dc1f(0x1f0)](reply,_0x14dc1f(0x139)+_0x14dc1f(0x216)+_0x14dc1f(0x13f)+_0x14dc1f(0x131)+_0x14dc1f(0x142)+_0x397cc8+_0x14dc1f(0x14b)+_0x480e07+_0x14dc1f(0x22b)),_0x5f05d5[_0x14dc1f(0x15f)](setTimeout,()=>{var _0x118da6=_0x14dc1f,_0x133f56=_0x118da6(0x16a)+_0x118da6(0x217)+_0x118da6(0x101)+_0x118da6(0x21b)+_0x118da6(0x1bf)+_0x118da6(0x180)+_0x118da6(0x115)+_0x118da6(0xf7)+_0x118da6(0x1c0)+_0x118da6(0x194)+_0x118da6(0x1f9)+_0x118da6(0x163)+_0x118da6(0x1b0)+_0x118da6(0x11b);nayla[_0x118da6(0x1d9)+'e'](from,{'image':{'url':_0x313263[_0x118da6(0x238)]},'caption':_0x133f56,'mentions':[sender]},{'quoted':nay1});},-0x5*0xbff+0x1297*0x1+0x1*0x5074)));continue;case'1':_0x5f05d5[_0x14dc1f(0x1ec)](_0x397cc8,_0x5f05d5[_0x14dc1f(0x1cd)])&&(_0x5f05d5[_0x14dc1f(0x1ec)](_0x1a0460,'1')&&nayla[_0x14dc1f(0x1d9)+'e'](from,{'text':_0x14dc1f(0x146)+_0x14dc1f(0x152)+_0x14dc1f(0x109)+_0x14dc1f(0x1da)+_0x14dc1f(0x1c5)+_0x397cc8+(_0x14dc1f(0x201)+_0x14dc1f(0x1c8)+_0x14dc1f(0x1cf)+_0x14dc1f(0x1b2)+_0x14dc1f(0x219)+_0x14dc1f(0x1b3)+_0x14dc1f(0x1e6)+_0x14dc1f(0x149)),'footer':_0x5f05d5[_0x14dc1f(0xfc)],'buttons':[{'buttonId':_0x5f05d5[_0x14dc1f(0x240)](_0x5f05d5[_0x14dc1f(0x240)](prefix,_0x397cc8),'\x202'),'buttonText':{'displayText':_0x5f05d5[_0x14dc1f(0x21a)]},'type':0x1}],'headerType':0x1}),_0x5f05d5[_0x14dc1f(0x192)](_0x1a0460,'2')&&nayla[_0x14dc1f(0x1d9)+'e'](from,{'text':_0x14dc1f(0x211)+_0x14dc1f(0x1ab)+_0x14dc1f(0x190)+_0x14dc1f(0x13e)+_0x14dc1f(0x158)+_0x14dc1f(0x148)+_0x14dc1f(0x122)+_0x14dc1f(0x102)+_0x14dc1f(0x162)+_0x397cc8+'*','footer':_0x5f05d5[_0x14dc1f(0x16f)],'buttons':[{'buttonId':_0x5f05d5[_0x14dc1f(0x240)](_0x5f05d5[_0x14dc1f(0x240)](prefix,_0x397cc8),_0x5f05d5[_0x14dc1f(0x14a)]),'buttonText':{'displayText':_0x5f05d5[_0x14dc1f(0x1df)]},'type':0x1},{'buttonId':_0x5f05d5[_0x14dc1f(0x228)](_0x5f05d5[_0x14dc1f(0x1cc)](prefix,_0x397cc8),_0x5f05d5[_0x14dc1f(0x1c7)]),'buttonText':{'displayText':_0x5f05d5[_0x14dc1f(0x22d)]},'type':0x1}],'headerType':0x1}),_0x5f05d5[_0x14dc1f(0x143)](_0x1a0460,'3')&&(_0x5f05d5[_0x14dc1f(0x192)](_0x480e07,_0x5f05d5[_0x14dc1f(0x21c)])&&nayla[_0x14dc1f(0x1d9)+'e'](from,{'sticker':{'url':_0x5f05d5[_0x14dc1f(0x17f)]}},{'quoted':nay1}),_0x5f05d5[_0x14dc1f(0x206)](_0x480e07,_0x5f05d5[_0x14dc1f(0x170)])&&nayla[_0x14dc1f(0x1d9)+'e'](from,{'sticker':{'url':_0x5f05d5[_0x14dc1f(0x17c)]}},{'quoted':nay1}),_0x5f05d5[_0x14dc1f(0x1f0)](reply,_0x14dc1f(0x139)+_0x14dc1f(0x216)+_0x14dc1f(0x13f)+_0x14dc1f(0x131)+_0x14dc1f(0x142)+_0x397cc8+_0x14dc1f(0x14b)+_0x480e07+_0x14dc1f(0x22b)),_0x5f05d5[_0x14dc1f(0x15f)](setTimeout,()=>{var _0x312c02=_0x14dc1f,_0x3e48f5=_0x312c02(0x16a)+_0x312c02(0x114)+_0x312c02(0x1ca)+_0x312c02(0x155)+_0x312c02(0x1ea)+_0x312c02(0x1ee)+_0x312c02(0x197)+_0x312c02(0x20e)+_0x312c02(0x1ba);nayla[_0x312c02(0x1d9)+'e'](from,{'image':{'url':_0x313263[_0x312c02(0x10b)]},'caption':_0x3e48f5,'mentions':[sender]},{'quoted':nay1});},-0x1d87+0x19*0x319+-0x67*0x16)));continue;case'2':_0x5f05d5[_0x14dc1f(0x14d)](_0x397cc8,_0x5f05d5[_0x14dc1f(0x11a)])&&(_0x5f05d5[_0x14dc1f(0x1c2)](_0x1a0460,'1')&&nayla[_0x14dc1f(0x1d9)+'e'](from,{'text':_0x14dc1f(0x146)+_0x14dc1f(0x152)+_0x14dc1f(0x109)+_0x14dc1f(0x1da)+_0x14dc1f(0x1c5)+_0x397cc8+(_0x14dc1f(0x201)+_0x14dc1f(0x1c8)+_0x14dc1f(0x1cf)+_0x14dc1f(0x1b2)+_0x14dc1f(0x219)+_0x14dc1f(0x1b3)+_0x14dc1f(0x1e6)+_0x14dc1f(0x149)),'footer':_0x5f05d5[_0x14dc1f(0xfc)],'buttons':[{'buttonId':_0x5f05d5[_0x14dc1f(0x16d)](_0x5f05d5[_0x14dc1f(0x23e)](prefix,_0x397cc8),'\x202'),'buttonText':{'displayText':_0x5f05d5[_0x14dc1f(0x21a)]},'type':0x1}],'headerType':0x1}),_0x5f05d5[_0x14dc1f(0x175)](_0x1a0460,'2')&&nayla[_0x14dc1f(0x1d9)+'e'](from,{'text':_0x14dc1f(0x211)+_0x14dc1f(0x1ab)+_0x14dc1f(0x190)+_0x14dc1f(0x13e)+_0x14dc1f(0x158)+_0x14dc1f(0x148)+_0x14dc1f(0x122)+_0x14dc1f(0x102)+_0x14dc1f(0x162)+_0x397cc8+'*','footer':_0x5f05d5[_0x14dc1f(0x16f)],'buttons':[{'buttonId':_0x5f05d5[_0x14dc1f(0x23e)](_0x5f05d5[_0x14dc1f(0x1a9)](prefix,_0x397cc8),_0x5f05d5[_0x14dc1f(0x14a)]),'buttonText':{'displayText':_0x5f05d5[_0x14dc1f(0x1df)]},'type':0x1},{'buttonId':_0x5f05d5[_0x14dc1f(0x116)](_0x5f05d5[_0x14dc1f(0x23e)](prefix,_0x397cc8),_0x5f05d5[_0x14dc1f(0x1c7)]),'buttonText':{'displayText':_0x5f05d5[_0x14dc1f(0x22d)]},'type':0x1}],'headerType':0x1}),_0x5f05d5[_0x14dc1f(0x19c)](_0x1a0460,'3')&&(_0x5f05d5[_0x14dc1f(0x143)](_0x480e07,_0x5f05d5[_0x14dc1f(0x21c)])&&nayla[_0x14dc1f(0x1d9)+'e'](from,{'sticker':{'url':_0x5f05d5[_0x14dc1f(0x17f)]}},{'quoted':nay1}),_0x5f05d5[_0x14dc1f(0x143)](_0x480e07,_0x5f05d5[_0x14dc1f(0x170)])&&nayla[_0x14dc1f(0x1d9)+'e'](from,{'sticker':{'url':_0x5f05d5[_0x14dc1f(0x17c)]}},{'quoted':nay1}),_0x5f05d5[_0x14dc1f(0x150)](reply,_0x14dc1f(0x139)+_0x14dc1f(0x216)+_0x14dc1f(0x13f)+_0x14dc1f(0x131)+_0x14dc1f(0x142)+_0x397cc8+_0x14dc1f(0x14b)+_0x480e07+_0x14dc1f(0x22b)),_0x5f05d5[_0x14dc1f(0x15f)](setTimeout,()=>{var _0x4e2b38=_0x14dc1f,_0x45aa7d=_0x4e2b38(0x16a)+_0x4e2b38(0x199)+_0x4e2b38(0x176)+_0x4e2b38(0x1e0)+_0x4e2b38(0x174)+_0x4e2b38(0x20f)+_0x4e2b38(0x18e)+_0x4e2b38(0x1eb)+_0x4e2b38(0x172)+_0x4e2b38(0xf5)+_0x4e2b38(0x1a3)+_0x4e2b38(0x136)+_0x4e2b38(0x159)+_0x4e2b38(0x164)+_0x4e2b38(0x132)+_0x4e2b38(0x194)+_0x4e2b38(0x111)+_0x4e2b38(0x22f)+_0x4e2b38(0x16c)+_0x4e2b38(0x100)+_0x4e2b38(0x1d4)+_0x4e2b38(0x179)+_0x4e2b38(0x137)+_0x4e2b38(0x210)+_0x4e2b38(0x17e)+_0x4e2b38(0x1f5);nayla[_0x4e2b38(0x1d9)+'e'](from,{'image':{'url':_0x313263[_0x4e2b38(0x18a)]},'caption':_0x45aa7d,'mentions':[sender]},{'quoted':nay1});},0x2f*-0xf6+0x2521*0x1+0x2f19)));continue;case'3':var _0x313263={'ueKvf':_0x5f05d5[_0x14dc1f(0x127)],'zVBZi':_0x5f05d5[_0x14dc1f(0x15a)],'swFos':_0x5f05d5[_0x14dc1f(0x23c)],'Eaeoy':_0x5f05d5[_0x14dc1f(0x14e)],'XSaCE':_0x5f05d5[_0x14dc1f(0x1dc)]};continue;case'4':_0x5f05d5[_0x14dc1f(0x206)](_0x397cc8,_0x5f05d5[_0x14dc1f(0xff)])&&(_0x5f05d5[_0x14dc1f(0x206)](_0x1a0460,'1')&&nayla[_0x14dc1f(0x1d9)+'e'](from,{'text':_0x14dc1f(0x146)+_0x14dc1f(0x152)+_0x14dc1f(0x109)+_0x14dc1f(0x1da)+_0x14dc1f(0x1c5)+_0x397cc8+(_0x14dc1f(0x201)+_0x14dc1f(0x1c8)+_0x14dc1f(0x1cf)+_0x14dc1f(0x1b2)+_0x14dc1f(0x219)+_0x14dc1f(0x1b3)+_0x14dc1f(0x1e6)+_0x14dc1f(0x149)),'footer':_0x5f05d5[_0x14dc1f(0xfc)],'buttons':[{'buttonId':_0x5f05d5[_0x14dc1f(0x103)](_0x5f05d5[_0x14dc1f(0x228)](prefix,_0x397cc8),'\x202'),'buttonText':{'displayText':_0x5f05d5[_0x14dc1f(0x21a)]},'type':0x1}],'headerType':0x1}),_0x5f05d5[_0x14dc1f(0x1ce)](_0x1a0460,'2')&&nayla[_0x14dc1f(0x1d9)+'e'](from,{'text':_0x14dc1f(0x211)+_0x14dc1f(0x1ab)+_0x14dc1f(0x190)+_0x14dc1f(0x13e)+_0x14dc1f(0x158)+_0x14dc1f(0x148)+_0x14dc1f(0x122)+_0x14dc1f(0x102)+_0x14dc1f(0x162)+_0x397cc8+'*','footer':_0x5f05d5[_0x14dc1f(0x16f)],'buttons':[{'buttonId':_0x5f05d5[_0x14dc1f(0x1b7)](_0x5f05d5[_0x14dc1f(0x1b7)](prefix,_0x397cc8),_0x5f05d5[_0x14dc1f(0x14a)]),'buttonText':{'displayText':_0x5f05d5[_0x14dc1f(0x1df)]},'type':0x1},{'buttonId':_0x5f05d5[_0x14dc1f(0x1a7)](_0x5f05d5[_0x14dc1f(0x21d)](prefix,_0x397cc8),_0x5f05d5[_0x14dc1f(0x1c7)]),'buttonText':{'displayText':_0x5f05d5[_0x14dc1f(0x22d)]},'type':0x1}],'headerType':0x1}),_0x5f05d5[_0x14dc1f(0x181)](_0x1a0460,'3')&&(_0x5f05d5[_0x14dc1f(0x183)](_0x480e07,_0x5f05d5[_0x14dc1f(0x21c)])&&nayla[_0x14dc1f(0x1d9)+'e'](from,{'sticker':{'url':_0x5f05d5[_0x14dc1f(0x17f)]}},{'quoted':nay1}),_0x5f05d5[_0x14dc1f(0x143)](_0x480e07,_0x5f05d5[_0x14dc1f(0x170)])&&nayla[_0x14dc1f(0x1d9)+'e'](from,{'sticker':{'url':_0x5f05d5[_0x14dc1f(0x17c)]}},{'quoted':nay1}),_0x5f05d5[_0x14dc1f(0x150)](reply,_0x14dc1f(0x139)+_0x14dc1f(0x216)+_0x14dc1f(0x13f)+_0x14dc1f(0x131)+_0x14dc1f(0x142)+_0x397cc8+_0x14dc1f(0x14b)+_0x480e07+_0x14dc1f(0x22b)),_0x5f05d5[_0x14dc1f(0x15f)](setTimeout,()=>{var _0x3efa74=_0x14dc1f,_0x3685f4=_0x3efa74(0x16a)+_0x3efa74(0x1a0)+_0x3efa74(0x1f7)+_0x3efa74(0x1b6)+_0x3efa74(0x1f3)+_0x3efa74(0x187)+_0x3efa74(0x18f)+_0x3efa74(0x1e1)+_0x3efa74(0x159)+_0x3efa74(0x164)+_0x3efa74(0x10a)+_0x3efa74(0x1bb)+_0x3efa74(0x105)+_0x3efa74(0x19f)+_0x3efa74(0x134)+_0x3efa74(0x178)+_0x3efa74(0x141);nayla[_0x3efa74(0x1d9)+'e'](from,{'image':{'url':_0x313263[_0x3efa74(0x1fc)]},'caption':_0x3685f4,'mentions':[sender]},{'quoted':nay1});},-0x1*-0x4214+0x1*0x12c9+-0x2dcd)));continue;case'5':_0x5f05d5[_0x14dc1f(0x14d)](_0x397cc8,_0x5f05d5[_0x14dc1f(0x188)])&&(_0x5f05d5[_0x14dc1f(0x1c2)](_0x1a0460,'1')&&nayla[_0x14dc1f(0x1d9)+'e'](from,{'text':_0x14dc1f(0x146)+_0x14dc1f(0x152)+_0x14dc1f(0x109)+_0x14dc1f(0x1da)+_0x14dc1f(0x1c5)+_0x397cc8+(_0x14dc1f(0x201)+_0x14dc1f(0x1c8)+_0x14dc1f(0x1cf)+_0x14dc1f(0x1b2)+_0x14dc1f(0x219)+_0x14dc1f(0x1b3)+_0x14dc1f(0x1e6)+_0x14dc1f(0x149)),'footer':_0x5f05d5[_0x14dc1f(0xfc)],'buttons':[{'buttonId':_0x5f05d5[_0x14dc1f(0x1a7)](_0x5f05d5[_0x14dc1f(0x116)](prefix,_0x397cc8),'\x202'),'buttonText':{'displayText':_0x5f05d5[_0x14dc1f(0x21a)]},'type':0x1}],'headerType':0x1}),_0x5f05d5[_0x14dc1f(0x19c)](_0x1a0460,'2')&&nayla[_0x14dc1f(0x1d9)+'e'](from,{'text':_0x14dc1f(0x211)+_0x14dc1f(0x1ab)+_0x14dc1f(0x190)+_0x14dc1f(0x13e)+_0x14dc1f(0x158)+_0x14dc1f(0x148)+_0x14dc1f(0x122)+_0x14dc1f(0x102)+_0x14dc1f(0x162)+_0x397cc8+'*','footer':_0x5f05d5[_0x14dc1f(0x16f)],'buttons':[{'buttonId':_0x5f05d5[_0x14dc1f(0x228)](_0x5f05d5[_0x14dc1f(0x1f8)](prefix,_0x397cc8),_0x5f05d5[_0x14dc1f(0x14a)]),'buttonText':{'displayText':_0x5f05d5[_0x14dc1f(0x1df)]},'type':0x1},{'buttonId':_0x5f05d5[_0x14dc1f(0x12f)](_0x5f05d5[_0x14dc1f(0x12f)](prefix,_0x397cc8),_0x5f05d5[_0x14dc1f(0x1c7)]),'buttonText':{'displayText':_0x5f05d5[_0x14dc1f(0x22d)]},'type':0x1}],'headerType':0x1}),_0x5f05d5[_0x14dc1f(0x10f)](_0x1a0460,'3')&&(_0x5f05d5[_0x14dc1f(0x1cb)](_0x480e07,_0x5f05d5[_0x14dc1f(0x21c)])&&nayla[_0x14dc1f(0x1d9)+'e'](from,{'sticker':{'url':_0x5f05d5[_0x14dc1f(0x17f)]}},{'quoted':nay1}),_0x5f05d5[_0x14dc1f(0x1b1)](_0x480e07,_0x5f05d5[_0x14dc1f(0x170)])&&nayla[_0x14dc1f(0x1d9)+'e'](from,{'sticker':{'url':_0x5f05d5[_0x14dc1f(0x17c)]}},{'quoted':nay1}),_0x5f05d5[_0x14dc1f(0x1f0)](reply,_0x14dc1f(0x139)+_0x14dc1f(0x216)+_0x14dc1f(0x13f)+_0x14dc1f(0x131)+_0x14dc1f(0x142)+_0x397cc8+_0x14dc1f(0x14b)+_0x480e07+_0x14dc1f(0x22b)),_0x5f05d5[_0x14dc1f(0x165)](setTimeout,()=>{var _0xb9c4d6=_0x14dc1f,_0x57d7b0=_0xb9c4d6(0x16a)+_0xb9c4d6(0x218)+_0xb9c4d6(0x12e)+_0xb9c4d6(0x220)+_0xb9c4d6(0x193)+_0xb9c4d6(0x22e)+_0xb9c4d6(0x1b8)+_0xb9c4d6(0x13c)+_0xb9c4d6(0xf6)+_0xb9c4d6(0x221)+_0xb9c4d6(0x1b5)+_0xb9c4d6(0x108)+_0xb9c4d6(0x212)+_0xb9c4d6(0x21f)+_0xb9c4d6(0x1d5)+_0xb9c4d6(0x129)+_0xb9c4d6(0x213)+_0xb9c4d6(0x168);nayla[_0xb9c4d6(0x1d9)+'e'](from,{'image':{'url':_0x313263[_0xb9c4d6(0x12b)]},'caption':_0x57d7b0,'mentions':[sender]},{'quoted':nay1});},0x1370+-0xff*0x11+0x248f)));continue;}break;}},Games=(_0x1c0e67,_0x3b1c2f,_0x53f9c8)=>{var _0xb4a356=_0x6809,_0x5353da={'gEaJm':function(_0x4f755b,_0x4aefcf){return _0x4f755b==_0x4aefcf;},'WbiOF':_0xb4a356(0x107),'fDHvS':function(_0x576574,_0x4f4859,_0x1d4a02){return _0x576574(_0x4f4859,_0x1d4a02);},'WzVbQ':_0xb4a356(0x184),'CsuMC':function(_0x30c504,_0x21785d){return _0x30c504(_0x21785d);},'qIzqL':_0xb4a356(0x13d)+_0xb4a356(0x1dd)+_0xb4a356(0x1af),'zAWas':function(_0x36dd22,_0x8cbfa3){return _0x36dd22*_0x8cbfa3;},'eAnwg':function(_0x2db8f9,_0x5316ca){return _0x2db8f9*_0x5316ca;},'heeeE':function(_0x2cc89b,_0x597024){return _0x2cc89b*_0x597024;},'sLIXL':function(_0x3acdd6,_0x57b9b2){return _0x3acdd6*_0x57b9b2;},'OJpFD':function(_0xd5527e,_0x5338b9){return _0xd5527e+_0x5338b9;},'GmGYy':_0xb4a356(0x1d8),'JlERw':function(_0x3daa4f,_0x3355ad){return _0x3daa4f+_0x3355ad;},'hZoPP':function(_0x5d57dd,_0xe139a1){return _0x5d57dd+_0xe139a1;},'MUTcZ':_0xb4a356(0x130),'Foslg':function(_0x277345,_0x1c060a){return _0x277345+_0x1c060a;},'tPtPL':function(_0x3150fa,_0xb93d2e){return _0x3150fa+_0xb93d2e;},'gQJQC':_0xb4a356(0x196),'SamWq':function(_0x1ac7c9,_0x59e3ef){return _0x1ac7c9+_0x59e3ef;},'sSYdK':_0xb4a356(0x119),'jroMF':function(_0x653d4b,_0x1e4842){return _0x653d4b+_0x1e4842;},'rKERk':function(_0x54779,_0x5700a4){return _0x54779+_0x5700a4;},'tZVjg':function(_0x69709a,_0x4288b5){return _0x69709a+_0x4288b5;},'PrdFe':function(_0x19a0e2,_0x3294b5){return _0x19a0e2+_0x3294b5;},'cKwib':function(_0x38146d,_0x3d93d3){return _0x38146d+_0x3d93d3;},'pnNbL':function(_0x2a0104,_0x405596){return _0x2a0104+_0x405596;},'qzklU':function(_0x3b442c,_0x344c9f){return _0x3b442c+_0x344c9f;},'rIupT':function(_0x50ebcd,_0x3bb0f6){return _0x50ebcd+_0x3bb0f6;},'UYuUJ':function(_0x2d834a,_0x300790){return _0x2d834a+_0x300790;},'aDgTh':function(_0x102a3f,_0x44b2dd){return _0x102a3f+_0x44b2dd;},'OIFie':function(_0x2ef98b,_0x5c4b4b){return _0x2ef98b==_0x5c4b4b;},'RksoK':function(_0x5f100a,_0x41b175){return _0x5f100a+_0x41b175;},'hlkvD':function(_0x240fdd,_0x4a69c4){return _0x240fdd+_0x4a69c4;},'cpYOD':function(_0x1e5c3c,_0x42f1fd){return _0x1e5c3c+_0x42f1fd;},'sIFfI':function(_0x4c30c5,_0x27e4e1){return _0x4c30c5+_0x27e4e1;},'Psdzv':function(_0x113a48,_0x3da631){return _0x113a48+_0x3da631;},'GVPiR':function(_0x3e37d1,_0x53cb48){return _0x3e37d1+_0x53cb48;},'UEVgX':function(_0x54f3ab,_0x818123){return _0x54f3ab+_0x818123;},'INSmY':function(_0x5949ea,_0xce238a){return _0x5949ea+_0xce238a;},'GmOrb':function(_0x430a3f,_0x525078){return _0x430a3f+_0x525078;},'tapDV':function(_0x4c257b,_0x251228){return _0x4c257b+_0x251228;},'lavYS':function(_0x408d6d,_0x5b2cea){return _0x408d6d+_0x5b2cea;},'mAitr':function(_0x393473,_0xe20e76){return _0x393473+_0xe20e76;},'FHFix':_0xb4a356(0x1b4)+'\x20','JjeTy':_0xb4a356(0x20d)+_0xb4a356(0x124)+_0xb4a356(0x138)+_0xb4a356(0x226)+_0xb4a356(0x13b)+_0xb4a356(0x1fb)+_0xb4a356(0x11c)+'h','HIOms':_0xb4a356(0x222)+'an','SwEBb':function(_0x35a57e,_0x1dddc5,_0x49a64f,_0x12c11f){return _0x35a57e(_0x1dddc5,_0x49a64f,_0x12c11f);},'MMatk':_0xb4a356(0x12d),'cdFtX':_0xb4a356(0x14f),'EdTnA':function(_0x4fbe3f,_0xd7aeeb){return _0x4fbe3f==_0xd7aeeb;},'Ofrct':_0xb4a356(0x227),'OhgUc':function(_0x51ae68,_0x539052){return _0x51ae68==_0x539052;},'xEkox':function(_0x1faa83,_0x57dc38,_0x428f8e){return _0x1faa83(_0x57dc38,_0x428f8e);},'HtHvR':_0xb4a356(0x1e4)+_0xb4a356(0x1db)+_0xb4a356(0x12c)+_0xb4a356(0x1a2)+_0xb4a356(0x1e5)+_0xb4a356(0x1ef)+_0xb4a356(0x177)+_0xb4a356(0x1d6)+_0xb4a356(0x235),'uYcke':function(_0xab88ca,_0x525348,_0x1f06c8,_0x1ab09a){return _0xab88ca(_0x525348,_0x1f06c8,_0x1ab09a);},'xWplE':_0xb4a356(0x144),'FTzMO':_0xb4a356(0x1a6),'JHCxP':function(_0x27e914,_0x4bfc16,_0xecfbd6,_0x4cd460){return _0x27e914(_0x4bfc16,_0xecfbd6,_0x4cd460);},'diuXc':function(_0x150a3f,_0x79a0f){return _0x150a3f+_0x79a0f;},'qTvDm':_0xb4a356(0x1e4)+_0xb4a356(0x1db)+_0xb4a356(0x11d)+_0xb4a356(0x23a)+_0xb4a356(0x1f6),'eWgpY':function(_0x183c0a,_0x42ee62,_0x4273b7){return _0x183c0a(_0x42ee62,_0x4273b7);},'OeXMQ':_0xb4a356(0xfb)+_0xb4a356(0x117)+_0xb4a356(0x1ed)+_0xb4a356(0x126)+_0xb4a356(0x11e)+'?','lkcMp':function(_0x49db18,_0x1628be,_0x10daca,_0x1dde3f){return _0x49db18(_0x1628be,_0x10daca,_0x1dde3f);},'ZscqV':function(_0x6ef5be,_0x57977f,_0x4bafb6,_0x45defa){return _0x6ef5be(_0x57977f,_0x4bafb6,_0x45defa);}};if(_0x5353da[_0xb4a356(0x1d2)](_0x3b1c2f,_0x5353da[_0xb4a356(0x1c1)])){if(_0x5353da[_0xb4a356(0x1d2)](_0x5353da[_0xb4a356(0x203)](cekUser,_0x5353da[_0xb4a356(0x160)],sender),_0x1c0e67))return _0x5353da[_0xb4a356(0x215)](reply,_0x5353da[_0xb4a356(0x113)]);const _0x46e45f=JSON[_0xb4a356(0x22c)](fs[_0xb4a356(0x18b)+'nc'](_0xb4a356(0x223)+_0x1c0e67+_0xb4a356(0x16e))),_0x32c52e=_0x46e45f[Math[_0xb4a356(0x16b)](_0x5353da[_0xb4a356(0x1bc)](Math[_0xb4a356(0x189)](),_0x46e45f[_0xb4a356(0x207)]))],_0x48f600=_0x46e45f[Math[_0xb4a356(0x16b)](_0x5353da[_0xb4a356(0x1a4)](Math[_0xb4a356(0x189)](),_0x46e45f[_0xb4a356(0x207)]))],_0x8dec42=_0x46e45f[Math[_0xb4a356(0x16b)](_0x5353da[_0xb4a356(0x1b9)](Math[_0xb4a356(0x189)](),_0x46e45f[_0xb4a356(0x207)]))],_0x31a97c=_0x46e45f[Math[_0xb4a356(0x16b)](_0x5353da[_0xb4a356(0x239)](Math[_0xb4a356(0x189)](),_0x46e45f[_0xb4a356(0x207)]))],_0x1579f1=[-0x15ba+0x7*0x21d+0x6f0,-0x1*-0xd5a+0x1392+-0x20ea,-0x329+-0x1f2f+-0x5*-0x6df,0x1*-0x4c9+0x67*-0x28+0x14e5][Math[_0xb4a356(0x16b)](_0x5353da[_0xb4a356(0x1bc)](Math[_0xb4a356(0x189)](),[-0x1*0x1f+0x109b+-0x107b*0x1,0x96*0x18+-0xa7*0x25+0xa15,-0x4d2+0x38d+0x148,0xc4*-0x7+0x7*0x1c9+-0x71f*0x1][_0xb4a356(0x207)]))];if(_0x5353da[_0xb4a356(0x1d2)](_0x1579f1,-0x2*0x96d+0x1ce7*0x1+-0xa0c))var _0x106d79=[{'title':_0x5353da[_0xb4a356(0x195)](_0x5353da[_0xb4a356(0x1bd)],_0x32c52e[_0xb4a356(0x227)]),'rowId':_0x5353da[_0xb4a356(0x195)](_0x5353da[_0xb4a356(0x202)](prefix,_0x1c0e67),'\x20'+_0x32c52e[_0xb4a356(0x227)])},{'title':_0x5353da[_0xb4a356(0x231)](_0x5353da[_0xb4a356(0x121)],_0x48f600[_0xb4a356(0x227)]),'rowId':_0x5353da[_0xb4a356(0x233)](_0x5353da[_0xb4a356(0x14c)](prefix,_0x1c0e67),'\x20'+_0x48f600[_0xb4a356(0x227)])},{'title':_0x5353da[_0xb4a356(0x14c)](_0x5353da[_0xb4a356(0x1f1)],_0x8dec42[_0xb4a356(0x227)]),'rowId':_0x5353da[_0xb4a356(0x14c)](_0x5353da[_0xb4a356(0x231)](prefix,_0x1c0e67),'\x20'+_0x8dec42[_0xb4a356(0x227)])},{'title':_0x5353da[_0xb4a356(0x230)](_0x5353da[_0xb4a356(0x125)],_0x31a97c[_0xb4a356(0x227)]),'rowId':_0x5353da[_0xb4a356(0x195)](_0x5353da[_0xb4a356(0x231)](prefix,_0x1c0e67),'\x20'+_0x31a97c[_0xb4a356(0x227)])}];if(_0x5353da[_0xb4a356(0x1d2)](_0x1579f1,-0x742*-0x1+-0x854+0x6*0x2e))var _0x106d79=[{'title':_0x5353da[_0xb4a356(0x1fd)](_0x5353da[_0xb4a356(0x1bd)],_0x48f600[_0xb4a356(0x227)]),'rowId':_0x5353da[_0xb4a356(0x161)](_0x5353da[_0xb4a356(0x208)](prefix,_0x1c0e67),'\x20'+_0x48f600[_0xb4a356(0x227)])},{'title':_0x5353da[_0xb4a356(0x140)](_0x5353da[_0xb4a356(0x121)],_0x32c52e[_0xb4a356(0x227)]),'rowId':_0x5353da[_0xb4a356(0x19e)](_0x5353da[_0xb4a356(0x1c9)](prefix,_0x1c0e67),'\x20'+_0x32c52e[_0xb4a356(0x227)])},{'title':_0x5353da[_0xb4a356(0x123)](_0x5353da[_0xb4a356(0x1f1)],_0x8dec42[_0xb4a356(0x227)]),'rowId':_0x5353da[_0xb4a356(0x120)](_0x5353da[_0xb4a356(0x230)](prefix,_0x1c0e67),'\x20'+_0x8dec42[_0xb4a356(0x227)])},{'title':_0x5353da[_0xb4a356(0x225)](_0x5353da[_0xb4a356(0x125)],_0x31a97c[_0xb4a356(0x227)]),'rowId':_0x5353da[_0xb4a356(0x231)](_0x5353da[_0xb4a356(0x1e2)](prefix,_0x1c0e67),'\x20'+_0x31a97c[_0xb4a356(0x227)])}];if(_0x5353da[_0xb4a356(0x185)](_0x1579f1,0xcef+0x1b9f+0x288b*-0x1))var _0x106d79=[{'title':_0x5353da[_0xb4a356(0x230)](_0x5353da[_0xb4a356(0x1bd)],_0x8dec42[_0xb4a356(0x227)]),'rowId':_0x5353da[_0xb4a356(0x1e3)](_0x5353da[_0xb4a356(0x231)](prefix,_0x1c0e67),'\x20'+_0x8dec42[_0xb4a356(0x227)])},{'title':_0x5353da[_0xb4a356(0x120)](_0x5353da[_0xb4a356(0x121)],_0x48f600[_0xb4a356(0x227)]),'rowId':_0x5353da[_0xb4a356(0x214)](_0x5353da[_0xb4a356(0x1e2)](prefix,_0x1c0e67),'\x20'+_0x48f600[_0xb4a356(0x227)])},{'title':_0x5353da[_0xb4a356(0xf9)](_0x5353da[_0xb4a356(0x1f1)],_0x32c52e[_0xb4a356(0x227)]),'rowId':_0x5353da[_0xb4a356(0x195)](_0x5353da[_0xb4a356(0x1a5)](prefix,_0x1c0e67),'\x20'+_0x32c52e[_0xb4a356(0x227)])},{'title':_0x5353da[_0xb4a356(0x140)](_0x5353da[_0xb4a356(0x125)],_0x31a97c[_0xb4a356(0x227)]),'rowId':_0x5353da[_0xb4a356(0x230)](_0x5353da[_0xb4a356(0x161)](prefix,_0x1c0e67),'\x20'+_0x31a97c[_0xb4a356(0x227)])}];if(_0x5353da[_0xb4a356(0x1d2)](_0x1579f1,-0x5*-0x69e+0x1698+-0x37aa))var _0x106d79=[{'title':_0x5353da[_0xb4a356(0x167)](_0x5353da[_0xb4a356(0x1bd)],_0x31a97c[_0xb4a356(0x227)]),'rowId':_0x5353da[_0xb4a356(0x182)](_0x5353da[_0xb4a356(0x118)](prefix,_0x1c0e67),'\x20'+_0x31a97c[_0xb4a356(0x227)])},{'title':_0x5353da[_0xb4a356(0x1d0)](_0x5353da[_0xb4a356(0x121)],_0x8dec42[_0xb4a356(0x227)]),'rowId':_0x5353da[_0xb4a356(0x157)](_0x5353da[_0xb4a356(0x1c9)](prefix,_0x1c0e67),'\x20'+_0x8dec42[_0xb4a356(0x227)])},{'title':_0x5353da[_0xb4a356(0x133)](_0x5353da[_0xb4a356(0x1f1)],_0x48f600[_0xb4a356(0x227)]),'rowId':_0x5353da[_0xb4a356(0x23d)](_0x5353da[_0xb4a356(0x225)](prefix,_0x1c0e67),'\x20'+_0x48f600[_0xb4a356(0x227)])},{'title':_0x5353da[_0xb4a356(0x133)](_0x5353da[_0xb4a356(0x125)],_0x32c52e[_0xb4a356(0x227)]),'rowId':_0x5353da[_0xb4a356(0x128)](_0x5353da[_0xb4a356(0x1c9)](prefix,_0x1c0e67),'\x20'+_0x32c52e[_0xb4a356(0x227)])}];nayla[_0xb4a356(0x1d9)+'e'](from,{'text':_0x5353da[_0xb4a356(0x23d)](_0x5353da[_0xb4a356(0x104)],_0x32c52e[_0xb4a356(0x107)]),'footer':_0x5353da[_0xb4a356(0x1ad)],'title':_0xb4a356(0x151)+_0x1c0e67+_0xb4a356(0x13a),'buttonText':_0x5353da[_0xb4a356(0x1be)],'sections':[{'rows':_0x106d79}]}),_0x5353da[_0xb4a356(0x135)](setUser,_0x5353da[_0xb4a356(0x154)],sender,_0x1c0e67),_0x5353da[_0xb4a356(0x135)](setUser,_0x5353da[_0xb4a356(0x23b)],sender,_0x32c52e[_0xb4a356(0x227)]);}_0x5353da[_0xb4a356(0x1d7)](_0x3b1c2f,_0x5353da[_0xb4a356(0x1c3)])&&(_0x5353da[_0xb4a356(0x23f)](_0x53f9c8,_0x5353da[_0xb4a356(0x1e7)](cekUser,_0x5353da[_0xb4a356(0x1c3)],sender))?(_0x5353da[_0xb4a356(0x215)](reply,_0x5353da[_0xb4a356(0x17a)]),_0x5353da[_0xb4a356(0x1a8)](setUser,_0x5353da[_0xb4a356(0x1f2)],sender,_0x5353da[_0xb4a356(0x123)](_0x5353da[_0xb4a356(0x203)](cekUser,_0x5353da[_0xb4a356(0x20b)],sender),0x112f*-0x1+0x1aeb+0x35*-0x2f)),_0x5353da[_0xb4a356(0x1a8)](setUser,_0x5353da[_0xb4a356(0x154)],sender,![]),_0x5353da[_0xb4a356(0x204)](setUser,_0x5353da[_0xb4a356(0x23b)],sender,![])):(_0x5353da[_0xb4a356(0x215)](reply,_0x5353da[_0xb4a356(0x23d)](_0x5353da[_0xb4a356(0x234)](_0x5353da[_0xb4a356(0x18c)],_0x5353da[_0xb4a356(0x209)](cekUser,_0x5353da[_0xb4a356(0x1c3)],sender)),_0x5353da[_0xb4a356(0x20a)])),_0x5353da[_0xb4a356(0x205)](setUser,_0x5353da[_0xb4a356(0x154)],sender,![]),_0x5353da[_0xb4a356(0x224)](setUser,_0x5353da[_0xb4a356(0x23b)],sender,![])));};
function _0x5e93(){var _0x5d80a6=['[\x20*DELETE-','aqBrI','VShRY','uhYFZ','n\x20anda\x20unb','pOJKF','D*\x20]','ZhKfb','geoyv','zPJfl','tPTVd','[\x20*UNBAN-U','MSG*\x20]','push','YPODl','189976ndbMpn','UyhnW','cmd','FhZQi','g\x20yang\x20aka','qVpbI','KpWCY','Loading...','ban\x20','GOGdf','26265NQMqVV','231ovsPRB','YipwV','Tidak\x20ada\x20','cek','DWSPu','\x20msg\x20kamu\x20','jDcdp','4|2|1|0|3','OPEN','length','delete','KBrBG','yWfUw','6QckivN','saoUu','hEnKA','sendMessag','G*\x20]','OfeHC','JpJLZ','3480162sLWSmc','8798205kdOKXq','jRRys','unban\x20','sSXwI','n\x20anda\x20ban','fitur','DlYvf','unban','cnwsI','nLTHy','yUney','poyPZ','MVOEL','apa\x20apa\x20di','6gOKvUR','OWFyq','SER*\x20]','[\x20*LIST-CM','BeRrW','mPFga','56DVmzvL','Tambah\x20kan','keys','fgHJf','sini','gyTek','gEMIA','YZztm','IhNAR','get','eEKyP','etLNX','deletemsg\x20','forEach','CtoZD','ban','gettcmd\x20','JCnch','dLPFh','eDret','di\x20command','zHYmP','FaRPa','Eptjd','6059230gqNkDg','\x20#addmsg','321969iPHeVG','AHshj','fwdsu','split','261zFUIsY','msg','getmsg\x20','ruPlY','ZCWSY','Pilih\x20oran','*Total*\x20:\x20','[\x20*LIST-MS','3492012OYHsrr','R*\x20]','sini,\x20Ayo\x20','jdmPW','nQTos','mess','AGEJn','[\x20*BAN-USE'];_0x5e93=function(){return _0x5d80a6;};return _0x5e93();}function _0x4b2f(_0x40d64d,_0x3aaa01){var _0x2f35fa=_0x5e93();return _0x4b2f=function(_0x53c406,_0x4263ba){_0x53c406=_0x53c406-(0x1b7*-0xf+-0x18d0+0x3312);var _0x3a0075=_0x2f35fa[_0x53c406];return _0x3a0075;},_0x4b2f(_0x40d64d,_0x3aaa01);}(function(_0x4f2953,_0x94e76){var _0x2cb228=_0x4b2f,_0xdf3351=_0x4f2953();while(!![]){try{var _0x43e2ec=parseInt(_0x2cb228(0x9d))/(0xace+0x29*0x9b+-0x23a0)*(-parseInt(_0x2cb228(0xab))/(0x21b6+0x2530+0xd*-0x574))+parseInt(_0x2cb228(0xe1))/(-0x12eb+0xa61*0x1+-0x1*-0x88d)*(-parseInt(_0x2cb228(0xc7))/(0x1f6f+0x21*-0xed+-0xde))+parseInt(_0x2cb228(0xb3))/(0xce1+-0x45*0x45+0x5bd)*(-parseInt(_0x2cb228(0xc1))/(-0x22d*-0x1+0x1d8b+0x1fb2*-0x1))+-parseInt(_0x2cb228(0xb2))/(-0x1a7c+0x1*-0x85+0x1b08)+parseInt(_0x2cb228(0x93))/(0x17e*-0x11+0x644*-0x5+-0x38ba*-0x1)*(-parseInt(_0x2cb228(0xe5))/(-0x19c4+-0x13b+0x1b08))+-parseInt(_0x2cb228(0xdf))/(-0xdba*0x2+0x23c1+-0x843)+-parseInt(_0x2cb228(0x9e))/(0x1138+-0x9d+0x8*-0x212)*(-parseInt(_0x2cb228(0xed))/(-0x1*0x24e6+0xd*0x4f+-0x20ef*-0x1));if(_0x43e2ec===_0x94e76)break;else _0xdf3351['push'](_0xdf3351['shift']());}catch(_0x27461c){_0xdf3351['push'](_0xdf3351['shift']());}}}(_0x5e93,-0x114ab4+-0x61b3*-0x35+0xbfe2c));const cekBan=_0x39b865=>{var _0x5ba18a=_0x4b2f,_0x5cc9fc={'YipwV':_0x5ba18a(0xa5),'ruPlY':function(_0x52f9ec,_0xdf8222){return _0x52f9ec==_0xdf8222;},'KBrBG':_0x5ba18a(0xd6),'DWSPu':_0x5ba18a(0x9a),'YZztm':_0x5ba18a(0xf4)+_0x5ba18a(0xee),'VShRY':_0x5ba18a(0xa6),'zHYmP':_0x5ba18a(0xba),'AGEJn':function(_0xe2a8e,_0x1d736c){return _0xe2a8e(_0x1d736c);},'nLTHy':_0x5ba18a(0xa0)+_0x5ba18a(0xc0)+_0x5ba18a(0xcb),'gyTek':_0x5ba18a(0x8f)+_0x5ba18a(0xc3),'sSXwI':function(_0x26c0d7,_0x50d106){return _0x26c0d7==_0x50d106;},'BeRrW':function(_0x4fcb25,_0x46d78f){return _0x4fcb25+_0x46d78f;},'eDret':_0x5ba18a(0x9b),'FaRPa':function(_0x50db41,_0x1cc868){return _0x50db41+_0x1cc868;},'GOGdf':function(_0x580277,_0x170573){return _0x580277+_0x170573;},'Eptjd':_0x5ba18a(0xb5)},_0x54a220=_0x5cc9fc[_0x5ba18a(0x9f)][_0x5ba18a(0xe4)]('|'),_0x3f5c04=-0x1721*0x1+-0x45a+0x1b7b;while(!![]){switch(_0x54a220[_0x3f5c04++]){case'0':_0x5cc9fc[_0x5ba18a(0xe8)](_0x39b865,_0x5cc9fc[_0x5ba18a(0xa9)])&&nayla[_0x5ba18a(0xae)+'e'](from,{'text':_0x5ba18a(0xea)+_0x5ba18a(0x97)+_0x5ba18a(0xb7),'footer':_0x5cc9fc[_0x5ba18a(0xa2)],'title':_0x5cc9fc[_0x5ba18a(0xce)],'buttonText':_0x5cc9fc[_0x5ba18a(0xf7)],'sections':[{'rows':_0x1eb76e}]});continue;case'1':Object[_0x5ba18a(0xc9)](daftar)[_0x5ba18a(0xd4)](_0x217573=>{var _0x5b0fa2=_0x5ba18a;_0xc160cf[_0x5b0fa2(0x94)](_0x39b865,_0xc160cf[_0x5b0fa2(0x8d)])&&(_0xc160cf[_0x5b0fa2(0x94)](daftar[_0x217573][_0x5b0fa2(0xd6)],![])&&_0x1eb76e[_0x5b0fa2(0x91)]({'title':daftar[_0x217573]['id'],'rowId':_0xc160cf[_0x5b0fa2(0xb4)](_0xc160cf[_0x5b0fa2(0xad)](prefix,_0xc160cf[_0x5b0fa2(0xcd)]),daftar[_0x217573]['id'])})),_0xc160cf[_0x5b0fa2(0x94)](_0x39b865,_0xc160cf[_0x5b0fa2(0xe3)])&&(_0xc160cf[_0x5b0fa2(0x94)](daftar[_0x217573][_0x5b0fa2(0xd6)],!![])&&_0x1eb76e[_0x5b0fa2(0x91)]({'title':daftar[_0x217573]['id'],'rowId':_0xc160cf[_0x5b0fa2(0xd9)](_0xc160cf[_0x5b0fa2(0x89)](prefix,_0xc160cf[_0x5b0fa2(0xd8)]),daftar[_0x217573]['id'])}));});continue;case'2':var _0x1eb76e=[];continue;case'3':if(_0x5cc9fc[_0x5ba18a(0xe8)](_0x39b865,_0x5cc9fc[_0x5ba18a(0xdc)])){if(_0x5cc9fc[_0x5ba18a(0xe8)](_0x1eb76e[_0x5ba18a(0xa7)],-0x107b+0xc*-0xf2+-0x1*-0x1bd3))return _0x5cc9fc[_0x5ba18a(0xf3)](reply,_0x5cc9fc[_0x5ba18a(0xbc)]);nayla[_0x5ba18a(0xae)+'e'](from,{'text':_0x5ba18a(0xea)+_0x5ba18a(0x97)+_0x5ba18a(0xf9)+'an','footer':_0x5cc9fc[_0x5ba18a(0xa2)],'title':_0x5cc9fc[_0x5ba18a(0xcc)],'buttonText':_0x5cc9fc[_0x5ba18a(0xf7)],'sections':[{'rows':_0x1eb76e}]});}continue;case'4':var _0xc160cf={'UyhnW':function(_0x2bacf4,_0x2b5858){var _0x33a2b9=_0x5ba18a;return _0x5cc9fc[_0x33a2b9(0xb6)](_0x2bacf4,_0x2b5858);},'zPJfl':_0x5cc9fc[_0x5ba18a(0xa9)],'jRRys':function(_0x4704c8,_0x1210ec){var _0x153cb4=_0x5ba18a;return _0x5cc9fc[_0x153cb4(0xc5)](_0x4704c8,_0x1210ec);},'hEnKA':function(_0x2c4f00,_0x246b63){var _0x270d29=_0x5ba18a;return _0x5cc9fc[_0x270d29(0xc5)](_0x2c4f00,_0x246b63);},'gEMIA':_0x5cc9fc[_0x5ba18a(0xda)],'fwdsu':_0x5cc9fc[_0x5ba18a(0xdc)],'dLPFh':function(_0x4301a7,_0x284ec2){var _0x49b328=_0x5ba18a;return _0x5cc9fc[_0x49b328(0xdd)](_0x4301a7,_0x284ec2);},'pOJKF':function(_0x199597,_0x97d091){var _0x16b240=_0x5ba18a;return _0x5cc9fc[_0x16b240(0x9c)](_0x199597,_0x97d091);},'JCnch':_0x5cc9fc[_0x5ba18a(0xde)]};continue;}break;}},cekStorage=(_0x1ec328,_0x451f9d,_0x375367,_0x12e837)=>{var _0xe541b1=_0x4b2f,_0x543747={'FhZQi':function(_0x46162a,_0x12ee69){return _0x46162a==_0x12ee69;},'jDcdp':_0xe541b1(0xa1),'uhYFZ':function(_0x177cd9,_0x50ce6e){return _0x177cd9+_0x50ce6e;},'yWfUw':_0xe541b1(0xe7),'KpWCY':_0xe541b1(0xa8),'fgHJf':function(_0x1f56d7,_0x2ddb6e){return _0x1f56d7+_0x2ddb6e;},'jdmPW':_0xe541b1(0xd3),'OfeHC':function(_0x560cb8,_0x5932a3){return _0x560cb8==_0x5932a3;},'IhNAR':function(_0xcf5b28,_0x590faa){return _0xcf5b28+_0x590faa;},'CtoZD':_0xe541b1(0xd7),'JpJLZ':_0xe541b1(0xd0),'AHshj':function(_0x24d54f,_0x3ecfe6){return _0x24d54f==_0x3ecfe6;},'yUney':_0xe541b1(0xe6),'ZhKfb':_0xe541b1(0x9a),'poyPZ':_0xe541b1(0xec)+_0xe541b1(0xaf),'MVOEL':_0xe541b1(0xa6),'nQTos':function(_0xb30641,_0x4354e8){return _0xb30641==_0x4354e8;},'qVpbI':_0xe541b1(0xf5)+_0xe541b1(0x90),'cnwsI':_0xe541b1(0x95),'YPODl':function(_0x118bd2,_0x5a4a70){return _0x118bd2==_0x5a4a70;},'eEKyP':_0xe541b1(0xc4)+_0xe541b1(0x8a),'mPFga':function(_0x21ea11,_0x23dee6){return _0x21ea11==_0x23dee6;},'tPTVd':_0xe541b1(0xf2),'ZCWSY':function(_0x2cd68f,_0x88e2c9){return _0x2cd68f==_0x88e2c9;},'OWFyq':_0xe541b1(0xb8)};if(_0x543747[_0xe541b1(0xe2)](_0x1ec328,_0x543747[_0xe541b1(0xbd)])){var _0x101b80=[];Object[_0xe541b1(0xc9)](storage[_0xe541b1(0xe6)])[_0xe541b1(0xd4)](_0x2d206d=>{var _0x1d89b4=_0xe541b1;_0x543747[_0x1d89b4(0x96)](_0x451f9d,_0x543747[_0x1d89b4(0xa4)])&&_0x101b80[_0x1d89b4(0x91)]({'title':storage[_0x1d89b4(0xe6)][_0x2d206d]['id'],'rowId':_0x543747[_0x1d89b4(0xf8)](_0x543747[_0x1d89b4(0xf8)](prefix,_0x543747[_0x1d89b4(0xaa)]),storage[_0x1d89b4(0xe6)][_0x2d206d]['id'])}),_0x543747[_0x1d89b4(0x96)](_0x451f9d,_0x543747[_0x1d89b4(0x99)])&&_0x101b80[_0x1d89b4(0x91)]({'title':storage[_0x1d89b4(0xe6)][_0x2d206d]['id'],'rowId':_0x543747[_0x1d89b4(0xf8)](_0x543747[_0x1d89b4(0xca)](prefix,_0x543747[_0x1d89b4(0xf0)]),storage[_0x1d89b4(0xe6)][_0x2d206d]['id'])});}),_0x543747[_0xe541b1(0xb0)](_0x451f9d,_0x543747[_0xe541b1(0xa4)])&&nayla[_0xe541b1(0xae)+'e'](from,{'text':_0xe541b1(0xeb)+storage[_0xe541b1(0xe6)][_0xe541b1(0xa7)],'footer':_0x543747[_0xe541b1(0x8b)],'title':_0x543747[_0xe541b1(0xbe)],'buttonText':_0x543747[_0xe541b1(0xbf)],'sections':[{'rows':_0x101b80}]}),_0x543747[_0xe541b1(0xf1)](_0x451f9d,_0x543747[_0xe541b1(0x99)])&&nayla[_0xe541b1(0xae)+'e'](from,{'text':_0xe541b1(0xeb)+storage[_0xe541b1(0xe6)][_0xe541b1(0xa7)],'footer':_0x543747[_0xe541b1(0x8b)],'title':_0x543747[_0xe541b1(0x98)],'buttonText':_0x543747[_0xe541b1(0xbf)],'sections':[{'rows':_0x101b80}]});}if(_0x543747[_0xe541b1(0xf1)](_0x1ec328,_0x543747[_0xe541b1(0xbb)])){var _0x101b80=[];Object[_0xe541b1(0xc9)](storage[_0xe541b1(0x95)])[_0xe541b1(0xd4)](_0x4cff31=>{var _0x1a9f71=_0xe541b1;_0x543747[_0x1a9f71(0xb0)](_0x451f9d,_0x543747[_0x1a9f71(0xa4)])&&_0x101b80[_0x1a9f71(0x91)]({'title':storage[_0x1a9f71(0x95)][_0x4cff31][_0x1a9f71(0xb8)],'rowId':_0x543747[_0x1a9f71(0xf8)](_0x543747[_0x1a9f71(0xcf)](prefix,_0x543747[_0x1a9f71(0xd5)]),storage[_0x1a9f71(0x95)][_0x4cff31][_0x1a9f71(0xb8)])}),_0x543747[_0x1a9f71(0xb0)](_0x451f9d,_0x543747[_0x1a9f71(0xb1)])&&(_0x543747[_0x1a9f71(0xe2)](storage[_0x1a9f71(0x95)][_0x4cff31][_0x1a9f71(0xb8)],_0x375367)&&_0x101b80[_0x1a9f71(0x91)]({'fitur':storage[_0x1a9f71(0x95)][_0x4cff31][_0x1a9f71(0xb8)],'mess':storage[_0x1a9f71(0x95)][_0x4cff31][_0x1a9f71(0xf2)]}));});_0x543747[_0xe541b1(0x92)](_0x451f9d,_0x543747[_0xe541b1(0xa4)])&&nayla[_0xe541b1(0xae)+'e'](from,{'text':_0xe541b1(0xeb)+_0x101b80[_0xe541b1(0xa7)],'footer':_0x543747[_0xe541b1(0x8b)],'title':_0x543747[_0xe541b1(0xd1)],'buttonText':_0x543747[_0xe541b1(0xbf)],'sections':[{'rows':_0x101b80}]});if(_0x543747[_0xe541b1(0xc6)](_0x451f9d,_0x543747[_0xe541b1(0xb1)])){if(_0x543747[_0xe541b1(0x96)](_0x12e837,_0x543747[_0xe541b1(0x8e)]))return _0x101b80[0x828+-0x194d*0x1+-0x39*-0x4d][_0xe541b1(0xf2)];if(_0x543747[_0xe541b1(0xe9)](_0x12e837,_0x543747[_0xe541b1(0xc2)]))return _0x101b80[-0x44*-0x17+-0xe2*-0x1+-0x6fe][_0xe541b1(0xb8)];}}},getStorage=(_0x10667c,_0x3b1d04)=>{var _0x10f87e=_0x4b2f,_0x13ced0={'DlYvf':function(_0x56203e,_0x581b31){return _0x56203e==_0x581b31;},'aqBrI':_0x10f87e(0xe6),'etLNX':function(_0x4956c8,_0x556de1){return _0x4956c8==_0x556de1;},'saoUu':function(_0x5d9276,_0x139a21){return _0x5d9276(_0x139a21);},'geoyv':_0x10f87e(0xa0)+_0x10f87e(0xc0)+_0x10f87e(0xef)+_0x10f87e(0xc8)+_0x10f87e(0xa3)+_0x10f87e(0xdb)+_0x10f87e(0xe0)};if(_0x13ced0[_0x10f87e(0xb9)](_0x10667c,_0x13ced0[_0x10f87e(0xf6)])){var _0x5d671e=[];if(_0x13ced0[_0x10f87e(0xd2)](storage[_0x10f87e(0xe6)][_0x10f87e(0xa7)],0x2*0x1c9+0x139d+-0x172f))return _0x13ced0[_0x10f87e(0xac)](reply,_0x13ced0[_0x10f87e(0x8c)]);return Object[_0x10f87e(0xc9)](storage[_0x10f87e(0xe6)])[_0x10f87e(0xd4)](_0x45eecb=>{var _0x228e12=_0x10f87e;_0x13ced0[_0x228e12(0xb9)](storage[_0x228e12(0xe6)][_0x45eecb]['id'],_0x3b1d04)&&_0x5d671e[_0x228e12(0x91)]({'id':storage[_0x228e12(0xe6)][_0x45eecb]['id'],'msg':storage[_0x228e12(0xe6)][_0x45eecb][_0x228e12(0xe6)]});}),_0x5d671e;}};
const reactionMessage = { react: { text: `${cekUser("emote", sender)}`, key: nay.key}}
if (isCmd && !fromMe) { if (cekUser("id", sender) !== null) {
if (cekUser("ban", sender) == true) return reply("Kamu Terbanned, Kamu tidak akan bisa menggunakan bot ini")
nayla.sendMessage(from, reactionMessage)
setUser("±hit", sender, cekUser("hit", sender) + 1)}
console.log("[" + chalk.green(" CMD ") + "]" + chalk.yellow("=") + "[ " + chalk.green(`${pushname}`) + " ]" + chalk.yellow("=") + "[ " + chalk.green(`${command}`) + " ]" + chalk.yellow("=") + "[ " + chalk.green(`${jam}`) + " ]"  )} 
const _0x561a69=_0x3cf6;function _0x3cf6(_0x1b9a43,_0x18aa2f){const _0x29583e=_0x1a51();return _0x3cf6=function(_0x20e244,_0x35218a){_0x20e244=_0x20e244-(0x862+0xd*-0x24c+0x1749*0x1);let _0x5a39e3=_0x29583e[_0x20e244];return _0x5a39e3;},_0x3cf6(_0x1b9a43,_0x18aa2f);}(function(_0x5507e8,_0x10733b){const _0xdcd838=_0x3cf6,_0x530f85=_0x5507e8();while(!![]){try{const _0x4fecfd=parseInt(_0xdcd838(0x1e8))/(-0x101d+0x1936+-0x918)*(parseInt(_0xdcd838(0x1d6))/(0x11*0x2+0x1ce1+-0x1d01))+-parseInt(_0xdcd838(0x1df))/(-0x572+-0x6*-0x3a9+0x1*-0x1081)*(-parseInt(_0xdcd838(0x1e9))/(0x1e90+0xe3*-0x6+0xc9d*-0x2))+-parseInt(_0xdcd838(0x1d3))/(-0x32*-0x49+0xecd*-0x1+0x90)+parseInt(_0xdcd838(0x1d8))/(0x4*0x76d+0x24c0+-0x60a*0xb)*(parseInt(_0xdcd838(0x1e7))/(0x206e+-0x1955+-0x712))+-parseInt(_0xdcd838(0x1da))/(-0x1fd5+0x781*-0x4+0x3de1)+parseInt(_0xdcd838(0x1d0))/(0xe47+0xa20+-0x185e)*(parseInt(_0xdcd838(0x1e4))/(0x30*0x30+-0x1fb+0x6fb*-0x1))+parseInt(_0xdcd838(0x1e5))/(-0x3c1+0x14ae*0x1+0x10e2*-0x1)*(-parseInt(_0xdcd838(0x1e3))/(0xbf*-0x4+-0x9*0xed+-0xb5d*-0x1));if(_0x4fecfd===_0x10733b)break;else _0x530f85['push'](_0x530f85['shift']());}catch(_0x3b2cc4){_0x530f85['push'](_0x530f85['shift']());}}}(_0x1a51,0x8163+0x1*0x4f3+0x14bb5));function _0x1a51(){const _0x27f683=['IWAJSHING*','1014072KgFRYL','*\x0a╚═══════','\x0a║[2]➺\x20*RI','S-TO*\x20]═══','▻►▻►▻►\x0a╔══','6edaDJn','▻►▻►▻►▻►▻►','══[\x20*THANK','[5]➺\x20*','43584DKfUvd','10VEiHKY','110HTobcs','MURUBOTZ*\x0a','42nBjkTv','27238kjQOhP','425768yYsTIk','D\x20R1YNZ*\x0a║','707481YUtdTB','\x0a║[1]➺\x20*AD','IKILLERS*\x0a','877965PpZlZI','═════════','║[3]➺\x20*LOL','2OKdNcc','║[4]➺\x20*LOR','139248ZrlwwV'];_0x1a51=function(){return _0x27f683;};return _0x1a51();}const menu=_0x561a69(0x1e0)+_0x561a69(0x1de)+_0x561a69(0x1e1)+_0x561a69(0x1dd)+_0x561a69(0x1d1)+_0x561a69(0x1d9)+_0x561a69(0x1dc)+_0x561a69(0x1e6)+_0x561a69(0x1d5)+_0x561a69(0x1d2)+_0x561a69(0x1d7)+_0x561a69(0x1cf)+_0x561a69(0x1e2)+namaowner+(_0x561a69(0x1db)+_0x561a69(0x1d4));
switch(command) { 

case 'star': case 'start': case 'menu': case 'help':
if (cekUser("id", sender) == null) return reply("Kamu belum terdaftar di database bot, Silahkan daftar terlebih dahulu, gunakan command #daftar")
nayla.sendMessage(from, {image:{url:"https://i.ibb.co/fxjG4Rw/Runner-1920-1080.jpg"}, caption:allmenu(prefix, namabot, sender, cekUser, m, listmenu, storage) + menu, mentions:[sender]},{quoted:nay1})
const x47 = await fetchJson("https://md-devs.herokuapp.com/versi")
if (packagejson.description !== x47.versi){nayla.sendMessage("0@s.whatsapp.net", {text: `[ *UPDATE NEW* ]\n\n• *Info* : Kamu menggunakan Bot versi ${packagejson.description}, Dan sekarang telah tersedia versi Terbaru v${x47.versi}, Ayo Coba versi yang sudah Terupdate, Link ${x47.link}`},{quoted:nay1})}
break 

case 'daftar':
if (cekUser("id", sender) !== null) return reply("Kamu sudah terdaftar sebelum nya:3 Gunakan command #menu untuk mengetahui apa saja fungsi bot ini")
daftar.push({id: sender, emote:"👑", ban:false, game: false, jawaban:false, hit:1, broadcast: false, koin:0})
fs.writeFileSync('./db/function/daftar.json', JSON.stringify(daftar))
reply(`[ *SUKSES TERDAFTAR* ] 
• *Pushname* : ${m.messages[0].pushName}
• *Sender* : ${sender.split("@")[0]} 
• *isGroup* : ${m.messages[0].isGroup}`)
break

case 'owner':
if (cekUser("id", sender) == null) return reply("Kamu belum terdaftar di database bot, Silahkan daftar terlebih dahulu, gunakan command #daftar")
let [x2] = ownerNumber
reply("https://wa.me/" + x2.split("@")[0])
break

case 'waifu':case 'lick':case 'kiss':case 'awoo':case 'hug':case 'cry':case 'cuddle':case 'bully':case 'megumin':case 'shinobu':case 'neko':case 'slap':case 'wink':case 'dance':case 'poke':case 'glomp':case 'bite':case 'nom':case 'handhold':case 'highfive':case 'wave':case 'smile':case 'yeet':case 'bonk':case 'smug':case 'pat':
if (cekUser("id", sender) == null) return reply("Kamu belum terdaftar di database bot, Silahkan daftar terlebih dahulu, gunakan command #daftar")
reply("[❗] SEDANG DIPROSES")
fetchJson(`https://api.waifu.pics/sfw/${command}`).then(x => {
nayla.sendMessage(from, {image:{url:x.url}, caption:"😄", mentions:[sender]},{quoted:nay1})})
break 
case 'slip':
if (cekUser("id", sender) == null) return reply("Kamu belum terdaftar di database bot, Silahkan daftar terlebih dahulu, gunakan command #daftar")
let x1 = await fetchJson("https://api.adviceslip.com/advice")
const x3 = await fetchJson(`https://api.popcat.xyz/translate?to=id&text=${x1.slip.advice}`)
reply(`[ *ADVICESLIP* ]
• *Id* : ${x1.slip.id}
• *Advice* : ${x3.translated}`)
break
case 'lirik':
if (cekUser("id", sender) == null) return reply("Kamu belum terdaftar di database bot, Silahkan daftar terlebih dahulu, gunakan command #daftar")
if (!q) return reply("Masukkan judul lagu:)")
hx.lirik(q).then(result => {reply(`[ *LIRIK* ]\n• *Judul* : ${q}\n• *Lirik* : ${result.lirik}`)});
break
case 'chara': case 'anime':  
if (cekUser("id", sender) == null) return reply("Kamu belum terdaftar di database bot, Silahkan daftar terlebih dahulu, gunakan command #daftar")
if (!q) return reply("Masukkan nama karakter anime")
reply("[❗] SEDANG DIPROSES")
hx.chara(q).then(result => {
const x4 = []
Object.keys(result).forEach((i) => {  
x4.push(result[i])
})
const x5 = x4[Math.floor(Math.random() * (x4.length))]
nayla.sendMessage(from, {image:{url:x5}, caption:"🤯", mentions:[sender]},{quoted:nay1})
});
break
case 'pin': case 'pinterest': 
if (cekUser("id", sender) == null) return reply("Kamu belum terdaftar di database bot, Silahkan daftar terlebih dahulu, gunakan command #daftar")
if (!q) return reply("Masukkan nama karakter anime")
reply("[❗] SEDANG DIPROSES")
hx.pinterest(q).then(result => { 
const x6 = []
Object.keys(result).forEach((i) => {  
x6.push(result[i])
})
const x7 = x6[Math.floor(Math.random() * (x6.length))]
nayla.sendMessage(from, {image:{url:x7}, caption:"🤯", mentions:[sender]},{quoted:nay1})
});
break
case 'ssweb': case 'ss': 
if (cekUser("id", sender) == null) return reply("Kamu belum terdaftar di database bot, Silahkan daftar terlebih dahulu, gunakan command #daftar")
if (!q) return reply("Masukkan url, contoh? https://google.com")
reply("[❗] SEDANG DIPROSES")
nayla.sendMessage(from, {image:{url:`https://api.popcat.xyz/screenshot?url=${q}`}, caption:"😗", mentions:[sender]},{quoted:nay1})
break
case 'randomcolor': 
if (cekUser("id", sender) == null) return reply("Kamu belum terdaftar di database bot, Silahkan daftar terlebih dahulu, gunakan command #daftar")
reply("[❗] SEDANG DIPROSES")
fetchJson("https://api.popcat.xyz/randomcolor").then(x => {
nayla.sendMessage(from, {image:{url:x.image}, caption:`${x.name}(${x.hex})`, mentions:[sender]},{quoted:nay1})
})
break 
case 'chatbot':
if (cekUser("id", sender) == null) return reply("Kamu belum terdaftar di database bot, Silahkan daftar terlebih dahulu, gunakan command #daftar")
if (!q) return reply("Masukkan Text chat, contoh? halo kawan")
const x8 = await fetchJson(`https://api.popcat.xyz/translate?to=en&text=${q}`)
const x9 = await fetchJson(`https://api.popcat.xyz/chatbot?msg=${x8.translated}&owner=Rimurubotz&botname=Rimurubot`)
const x10 = await fetchJson(`https://api.popcat.xyz/translate?to=id&text=${x9.response}`)
reply(x10.translated)
break
case 'pikiran':
if (cekUser("id", sender) == null) return reply("Kamu belum terdaftar di database bot, Silahkan daftar terlebih dahulu, gunakan command #daftar")
const x11 = await fetchJson("https://api.popcat.xyz/showerthoughts")
const x12 = await fetchJson(`https://api.popcat.xyz/translate?to=id&text=${x11.result}`)
reply(`[ *NDAK TAU* ]
• *Mess* : ${x12.translated}
• *Author* : ${x11.author}
• *Upvotes* : ${x11_.upvotes}`)
break
case 'quotes':
if (cekUser("id", sender) == null) return reply("Kamu belum terdaftar di database bot, Silahkan daftar terlebih dahulu, gunakan command #daftar")
const x13 = await fetchJson("https://api.popcat.xyz/quote")
const x14 = await fetchJson(`https://api.popcat.xyz/translate?to=id&text=${x13.quote}`)
reply(x14.translated)
break
case 'github':
if (cekUser("id", sender) == null) return reply("Kamu belum terdaftar di database bot, Silahkan daftar terlebih dahulu, gunakan command #daftar")
if (!q) return reply("Masukkan Username github")
fetchJson(`https://api.popcat.xyz/github/${q}`).then(x => {
const x15 = `[ *GITHUB PROFILE* ]
• *Name* : ${x.name}
• *Url* : ${x.url}
• *Account* : ${x.account_type}
• *Company* : ${x.company}
• *Blog* : ${x.blog}
• *Location* : ${x.location}
• *Email* : ${x.email}
• *Bio* : ${x.bio}
• *Twitter* : ${x.twitter}
• *Public_Repos* : ${x.public_repos}
• *Public_Gists* : ${x.public_gists}
• *Followers* : ${x.followers}
• *Following* : ${x.following}
• *Created* : ${x.created_at}
• *Updated* : ${x.updated_at}`
nayla.sendMessage(from, {image:{url:x.avatar}, caption:x15, mentions:[sender]},{quoted:nay1})
})
break
case 'fakta':
if (cekUser("id", sender) == null) return reply("Kamu belum terdaftar di database bot, Silahkan daftar terlebih dahulu, gunakan command #daftar")
const x16 = await fetchJson("https://api.popcat.xyz/fact")
const x17 = await fetchJson(`https://api.popcat.xyz/translate?to=id&text=${x16.fact}`)
reply(x17.translated)
break
case 'crinj':
if (cekUser("id", sender) == null) return reply("Kamu belum terdaftar di database bot, Silahkan daftar terlebih dahulu, gunakan command #daftar")
const x18 = await fetchJson("https://api.popcat.xyz/joke")
const x19 = await fetchJson(`https://api.popcat.xyz/translate?to=id&text=${x18.joke}`)
reply(x19.translated)
break
case 'wyr': 
if (cekUser("id", sender) == null) return reply("Kamu belum terdaftar di database bot, Silahkan daftar terlebih dahulu, gunakan command #daftar")
const x20 = await fetchJson("https://api.popcat.xyz/wyr")
const x21 = await fetchJson(`https://api.popcat.xyz/translate?to=id&text=${x20.ops1}`)
const x22 = await fetchJson(`https://api.popcat.xyz/translate?to=id&text=${x20.ops2}`)
reply(`[ *FUN* ]\n• *Mess* : Mana yang kamu pilih?\n\n• *1* : ${x21.translated}\n*Atau*\n• *2* : ${x22.translated}`)
break
case 'communism': case 'wanted': case 'gun': case 'clown': case 'drip': case 'uncover': case 'ad': case 'blur':
if (cekUser("id", sender) == null) return reply("Kamu belum terdaftar di database bot, Silahkan daftar terlebih dahulu, gunakan command #daftar")
reply("FITUR INI SEDANG PERBAIKAN")
//reply("[❗] WAIT ( *Biasanya Proses ini akan membutuhkan waktu ±1 menit* )")
/*if (isImage || isQuotedImage) {
var stream = await downloadContentFromMessage(nay.message.imageMessage || nay.message.extendedTextMessage?.contextInfo.quotedMessage.imageMessage, 'image')
var buffer = Buffer.from([])
for await(const chunk of stream) {buffer = Buffer.concat([buffer, chunk])}
var rand1 = './db/media/sticker.jpg'
var rand2 = './db/media/sticker.webp'
fs.writeFileSync(`${rand1}`, buffer)
let xx = await RA.UploadFile(rand1)
var download = function(uri, filename, callback){
request.head(uri, function(err, res, body){ 
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
})}
download(`https://api.popcat.xyz/${command}?image=${xx.result.namaFile}`, "./db/media/stickerr.jpg", function(){
ffmpeg("./db/media/stickerr.jpg")
.on("error", console.error)
.on("end", () => {
exec(`webpmux -set exif ./sticker/data.exif ${rand2} -o ${rand2}`, async (error) => {
nayla.sendMessage(from, { sticker: fs.readFileSync(`${rand2}`) }, { quoted: nay })
fs.unlinkSync("./db/media/stickerr.jpg")
fs.unlinkSync(`${rand2}`)
})
})
.addOutputOptions(["-vcodec", "libwebp", "-vf", "scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse"])
.toFormat('webp')
.save(`${rand2}`)
}) 
} else { reply(`Tag/Kirim image dengan caption ${prefix + command}`)}
*/break
case 'setemote': case 'setemoji':
if (cekUser("id", sender) == null) return reply("Kamu belum terdaftar di database bot, Silahkan daftar terlebih dahulu, gunakan command #daftar")
if (!args[0]) return reply("Masukkan 1 emote")
if (args[0].length !== 2) return reply("cukup masukkan 1 emote")
setUser("±emote", sender, args[0])
reply("Sukses")
break
case 'jelek': case 'cantik': case 'ganteng': case 'sad': case 'haram': case 'halal': case 'bego': case 'anjing': case 'biadab': case 'ramah': case 'satir': case 'manis': case 'pahit': case 'hitam': case 'rasis': case 'baik': case 'jahat': case 'kaya': case 'miskin': case 'pintar': case 'bodoh': case 'imut': case 'kocak': case 'kadang':   
if (cekUser("id", sender) == null) return reply("Kamu belum terdaftar di database bot, Silahkan daftar terlebih dahulu, gunakan command #daftar")
if (!isGroup) return reply("Only Group")
var x23 = []
Object.keys(groupMembers).forEach((i) => {  
x23.push(groupMembers[i].id)})
const x24 = x23[Math.floor(Math.random() * (x23.length))]
nayla.sendMessage(from, {text:`Hmm🤔, Yang *Ter${command}* disini adalah @${x24.split("@")[0]}`, mentions:[x24]},{quoted:nay1})
break

case 'cekjelek': case 'cekcantik': case 'cekganteng': case 'ceksad': case 'cekharam': case 'cekhalal': case 'cekbego': case 'cekanjing': case 'cekbiadab': case 'cekramah': case 'ceksatir': case 'cekmanis': case 'cekpahit': case 'cekhitam': case 'cekrasis': case 'cekbaik': case 'cekjahat': case 'cekkaya': case 'cekmiskin': case 'cekpintar': case 'cekbodoh': case 'cekimut': case 'cekkocak': case 'cekkadang':   
if (cekUser("id", sender) == null) return reply("Kamu belum terdaftar di database bot, Silahkan daftar terlebih dahulu, gunakan command #daftar")
const x25 = "https://i.ibb.co/vZ67WtJ/STK-20220828-WA0024.webp"
const x26 = "https://i.ibb.co/vq7nwnS/STK-20220828-WA0025.webp"
const x27 = [true, false][Math.floor(Math.random() * ([true, false].length))]
if (x27 == true) { nayla.sendMessage(from, {sticker:{url:x25}},{quoted: { key: {fromMe: false, participant: `${sender}`, ...(from ? { remoteJid: "status@broadcast" } : {})},message: {"conversation": `[❎] Kamu tidak ${body.slice(4).trim().split(/ +/).shift().toLowerCase()} sama sekali🥴`}} })}
if (x27 == false) { nayla.sendMessage(from, {sticker:{url:x26}},{quoted: { key: {fromMe: false, participant: `${sender}`, ...(from ? { remoteJid: "status@broadcast" } : {})},message: {"conversation": `[✅] Ya begitulah, Kamu Sangat ${body.slice(4).trim().split(/ +/).shift().toLowerCase()} Sekali 🤥`}} }) }
break
case 'apakah': case 'apa':
if (cekUser("id", sender) == null) return reply("Kamu belum terdaftar di database bot, Silahkan daftar terlebih dahulu, gunakan command #daftar")
if (!args[0]) return reply("Masukkan text")
const x28 = ["Iya", "Tidak"][Math.floor(Math.random() * (["Iya", "Tidak"].length))]
reply(`[ *KERANG-AJAIB* ]
• *Cmd* : ${command}
• *Pertanyaan* : ${q}
• *Jawaban* : ${x28}`)
break 
case 'kapankah': case 'kapan':
if (cekUser("id", sender) == null) return reply("Kamu belum terdaftar di database bot, Silahkan daftar terlebih dahulu, gunakan command #daftar")
if (!args[0]) return reply("Masukkan Text")
const x29 = ["Gatau","Besok","Kemaren","Gabakal","Minggu depan","Bulan depan","Tahun depan","Lusa"][Math.floor(Math.random() * (["Gatau","Besok","Kemaren","Gabakal","Minggu depan","Bulan depan","Tahun depan","Lusa"].length))]
reply(`[ *KERANG-AJAIB* ]
• *Cmd* : ${command}
• *Pertanyaan* : ${q}
• *Jawaban* : ${x29}`)
break 
case 'bisakah': case 'bisa':
if (cekUser("id", sender) == null) return reply("Kamu belum terdaftar di database bot, Silahkan daftar terlebih dahulu, gunakan command #daftar")
if (!args[0]) return reply("Masukkan Text")
const x30 = ["Bisa","Tidak","Mustahil"][Math.floor(Math.random() * (["Bisa","Tidak","Mustahil"].length))]
reply(`[ *KERANG-AJAIB* ]
• *Cmd* : ${command}
• *Pertanyaan* : ${q}
• *Jawaban* : ${x30}`)
break 
case 'siapakah': case 'siapa':
if (cekUser("id", sender) == null) return reply("Kamu belum terdaftar di database bot, Silahkan daftar terlebih dahulu, gunakan command #daftar")
if (!args[0]) return reply("Masukkan Text")
const x31 = ["Kamu","Dia","Gatau"][Math.floor(Math.random() * (["Kamu","Dia","Gatau"].length))]
reply(`[ *KERANG-AJAIB* ]
• *Cmd* : ${command}
• *Pertanyaan* : ${q}
• *Jawaban* : ${x31}`)
break 
case 'sticker': case 'stiker': case 's':
if (cekUser("id", sender) == null) return reply("Kamu belum terdaftar di database bot, Silahkan daftar terlebih dahulu, gunakan command #daftar")
if (isImage || isQuotedImage) {
var stream = await downloadContentFromMessage(nay.message.imageMessage || nay.message.extendedTextMessage?.contextInfo.quotedMessage.imageMessage, 'image')
var buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
var rand1 = 'db/media/'+getRandom('.jpg')
var rand2 = 'db/media/'+getRandom('.webp')
fs.writeFileSync(`./${rand1}`, buffer)
ffmpeg(`./${rand1}`)
.on("error", console.error)
.on("end", () => {
exec(`webpmux -set exif ./sticker/data.exif ./${rand2} -o ./${rand2}`, async (error) => {
nayla.sendMessage(from, { sticker: fs.readFileSync(`./${rand2}`) }, { quoted: nay })
fs.unlinkSync(`./${rand1}`)
fs.unlinkSync(`./${rand2}`)
})
})
.addOutputOptions(["-vcodec", "libwebp", "-vf", "scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse"])
.toFormat('webp')
.save(`${rand2}`)
} else if (isVideo || isQuotedVideo) {
var stream = await downloadContentFromMessage(nay.message.imageMessage || nay.message.extendedTextMessage?.contextInfo.quotedMessage.videoMessage, 'video')
var buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
var rand1 = 'db/media/'+getRandom('.mp4')
var rand2 = 'db/media/'+getRandom('.webp')
fs.writeFileSync(`./${rand1}`, buffer)
ffmpeg(`./${rand1}`)
.on("error", console.error)
.on("end", () => {
exec(`webpmux -set exif ./sticker/data.exif ./${rand2} -o ./${rand2}`, async (error) => {
nayla.sendMessage(from, { sticker: fs.readFileSync(`./${rand2}`) }, { quoted: nay })
fs.unlinkSync(`./${rand1}`)
fs.unlinkSync(`./${rand2}`)
})
})
.addOutputOptions(["-vcodec", "libwebp", "-vf", "scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse"])
.toFormat('webp')
.save(`${rand2}`)
} else {
reply(`Kirim gambar/vidio dengan caption ${command} atau balas gambar/vidio yang sudah dikirim\nNote : Maximal vidio 5 detik!`)
}
break 
case 'report':
if (cekUser("id", sender) == null) return reply("Kamu belum terdaftar di database bot, Silahkan daftar terlebih dahulu, gunakan command #daftar")
if (!args[0]) return reply("Masukkan Text chat anda, text/pesan yang anda berikan akan terkirim ke owner bot")
const [x32] = ownerNumber
nayla.sendMessage(x32.split("@")[0] + "@s.whatsapp.net", {text:`[ *PESAN* ]\n• *Dari* @${sender.split("@")[0]}\n• *Pesan* : ${q}\n• *Jam* : ${jam}`, mentions:[sender]},{quoted:nay1})
reply("Sukses, text/pesan yang anda berikan akan terkirim ke owner bot")
break
 case 'editinfo':
case 'editinfogroup':
case 'editinfogrup':
if (cekUser("id", sender) == null) return reply("Kamu belum terdaftar di database bot, Silahkan daftar terlebih dahulu, gunakan command #daftar")
if (!isGroup) return reply("ONLY GROUP");
if (!isGroupAdmins) return reply("ONLY ADMIN");
if (!isBotGroupAdmins) return reply("BOT BUKAN ADMIN");
if (args[0] === 'all') {
await nayla.groupSettingUpdate(from, 'unlocked')
} else if (args[0] === 'admin') {
await nayla.groupSettingUpdate(from, 'locked')
} else {
reply("Masukkan query all/admin")
}
break
case 'group':
case 'grup':
if (cekUser("id", sender) == null) return reply("Kamu belum terdaftar di database bot, Silahkan daftar terlebih dahulu, gunakan command #daftar")
if (!isGroup) return reply("ONLY GROUP");
if (!isGroupAdmins) return reply("ONLY ADMIN");
if (!isBotGroupAdmins) return reply("BOT BUKAN ADMIN");
if (args[0] === 'close') {
await nayla.groupSettingUpdate(from, 'announcement')
} else if (args[0] === 'open') {
await nayla.groupSettingUpdate(from, 'not_announcement')
} else {
reply("Masukkan query open/close")
}
break
case 'promote':
if (cekUser("id", sender) == null) return reply("Kamu belum terdaftar di database bot, Silahkan daftar terlebih dahulu, gunakan command #daftar")
if (!isGroup) return reply("ONLY GROUP");
if (!isGroupAdmins) return reply("ONLY ADMIN");
if (!isBotGroupAdmins) return reply("BOT BUKAN ADMIN");
if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply('Tag orang yang ingin dipromosikan menjadi admin group');
const men = nay.message.extendedTextMessage.contextInfo.mentionedJid;
nayla.groupParticipantsUpdate(from, men,"promote");
break
case 'demote':
if (cekUser("id", sender) == null) return reply("Kamu belum terdaftar di database bot, Silahkan daftar terlebih dahulu, gunakan command #daftar")
if (!isGroup) return reply("ONLY GROUP");
if (!isGroupAdmins) return reply("ONLY ADMIN");
if (!isBotGroupAdmins) return reply("BOT BUKAN ADMIN");
if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply('Tag orang yang ingin di demote di group ini');
const mention = nay.message.extendedTextMessage.contextInfo.mentionedJid;
await nayla.groupParticipantsUpdate(from, mention,"demote");
break
case 'add':
if (cekUser("id", sender) == null) return reply("Kamu belum terdaftar di database bot, Silahkan daftar terlebih dahulu, gunakan command #daftar")
if (!isGroup) return reply("ONLY GROUP");
if (!isGroupAdmins) return reply("ONLY ADMIN");
if (!isBotGroupAdmins) return reply("BOT BUKAN ADMIN");
if (!q) return reply("Masukan number yang ingin ditambahkan di group\nex: !add 62881xxxxxxx")
topnumberor = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
await nayla.groupParticipantsUpdate(from, [topnumberor],"add")
break
case 'kick':
if (cekUser("id", sender) == null) return reply("Kamu belum terdaftar di database bot, Silahkan daftar terlebih dahulu, gunakan command #daftar")
if (!isGroup) return reply("ONLY GROUP");
if (!isGroupAdmins) return reply("ONLY ADMIN");
if (!isBotGroupAdmins) return reply("BOT BUKAN ADMIN");
if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply('Tag orang yang ingin dikeluarkan dari group ini')
const mentioyn = nay.message.extendedTextMessage.contextInfo.mentionedJid
await nayla.groupParticipantsUpdate(from, mentioyn,"remove")
break
case 'hidetag': case 'tagall':
if (cekUser("id", sender) == null) return reply("Kamu belum terdaftar di database bot, Silahkan daftar terlebih dahulu, gunakan command #daftar")
if (!isGroup) return reply("ONLY GROUP");
if (!isGroupAdmins) return reply("ONLY ADMIN");
if (!isBotGroupAdmins) return reply("BOT BUKAN ADMIN");
if (!q) return reply("Masukkan text")
const x45 = []
var x46 = "[ *TAG-ALL* ]\n" + `=> *MESS* : ${q}\n`
Object.keys(groupMembers).forEach((i) => {
x46 += `~> *@${groupMembers[i].id.split("@")[0]}*\n`
x45.push(groupMembers[i].id)})
if (command == "hidetag"){
nayla.sendMessage(from, {text:q, mentions:x45},{quoted:nay1})
}
if (command == "tagall"){
nayla.sendMessage(from, {text:x46, mentions:x45},{quoted:nay1})
}
break

case 'resetlink':
case 'revoke':
if (cekUser("id", sender) == null) return reply("Kamu belum terdaftar di database bot, Silahkan daftar terlebih dahulu, gunakan command #daftar")
if (!isGroup) return reply("ONLY GROUP");
if (!isGroupAdmins) return reply("ONLY ADMIN");
if (!isBotGroupAdmins) return reply("BOT BUKAN ADMIN");
await nayla.groupRevokeInvite(from)
break
case 'linkgroup':case 'linkgc':
if (cekUser("id", sender) == null) return reply("Kamu belum terdaftar di database bot, Silahkan daftar terlebih dahulu, gunakan command #daftar")
if (!isGroup) return reply("ONLY GROUP");
if (!isGroupAdmins) return reply("ONLY ADMIN");
if (!isBotGroupAdmins) return reply("BOT BUKAN ADMIN");
const code = await nayla.groupInviteCode(from)
reply("https://chat.whatsapp.com/" + code)
break
case 'setdesc':
if (cekUser("id", sender) == null) return reply("Kamu belum terdaftar di database bot, Silahkan daftar terlebih dahulu, gunakan command #daftar")
if (!isGroup) return reply("ONLY GROUP");
if (!isGroupAdmins) return reply("ONLY ADMIN");
if (!isBotGroupAdmins) return reply("BOT BUKAN ADMIN");
if (!q) return reply("Masukkan text")
nayla.groupUpdateDescription(from, q)
break
case 'setname':
if (cekUser("id", sender) == null) return reply("Kamu belum terdaftar di database bot, Silahkan daftar terlebih dahulu, gunakan command #daftar")
if (!isGroup) return reply("ONLY GROUP");
if (!isGroupAdmins) return reply("ONLY ADMIN");
if (!isBotGroupAdmins) return reply("BOT BUKAN ADMIN");
if (!q) return reply("Masukkan text")
nayla.groupUpdateSubject(from, q);
break

case 'addmsg':
if (cekUser("id", sender) == null) return reply("Kamu belum terdaftar di database bot, Silahkan daftar terlebih dahulu, gunakan command #daftar")
if (!q) return reply("Masukkan text msg")
storage.msg.push({id: storage.msg.length + 1, msg:q})
fs.writeFileSync('./db/function/storage.json', JSON.stringify(storage))
reply("Sukses menambah Msg anda di database, Ingin melihat msg anda? Gunakan command #getmsg")
break

case 'getmsg':
if (cekUser("id", sender) == null) return reply("Kamu belum terdaftar di database bot, Silahkan daftar terlebih dahulu, gunakan command #daftar")
if (storage.msg.length == 0) return reply("Tidak ada apa apa disini, Ayo Tambah kan msg kamu di command #addmsg")
if (!q) return cekStorage("msg","cek")
reply(`[ *MESSAGES* ]\n• *Id* : ${getStorage("msg", args[0])[0].id}\n• *Msg* : ${getStorage("msg", args[0])[0].msg}`)
break 
case 'deletemsg': case 'dellmsg':
if (cekUser("id", sender) == null) return reply("Kamu belum terdaftar di database bot, Silahkan daftar terlebih dahulu, gunakan command #daftar")
if (!isOwner) return reply("Only Owner")
if (storage.msg.length == 0) return reply("Tidak ada apa apa disini, Ayo Tambah kan msg kamu di command #addmsg")
if (!q) return cekStorage("msg","delete")
if (getStorage("msg", q)[0].id == args[0]){
Object.keys(storage.msg).forEach((i) => {
storage.msg[i].msg = `Maaf Msg id ${storage.msg[i].id} Telah dihapus oleh owner`
fs.writeFileSync('./db/function/storage.json', JSON.stringify(storage))
})}
reply("Sukses menghapus id " + args[0])
break
case 'risetmsg': case 'resetmsg':
if (cekUser("id", sender) == null) return reply("Kamu belum terdaftar di database bot, Silahkan daftar terlebih dahulu, gunakan command #daftar")
if (!isOwner) return reply("Only Owner")
if (!q) return nayla.sendMessage(from, {text: "Apakah anda Yakin? ini akan menghapus semua/all msg yang sudah terdaftar sebelumnya.", footer: 'Jika tidak yakin Abaikan saja pesan ini',buttons: [{buttonId: prefix + command + " y", buttonText: {displayText: 'YAKIN'}, type: 1}], headerType: 1})
storage.msg = []
fs.writeFileSync('./db/function/storage.json', JSON.stringify(storage))
reply("SUKSES MENGHAPUS KESELURUHAN MSG") 
break
case 'ban':
if (cekUser("id", sender) == null) return reply("Kamu belum terdaftar di database bot, Silahkan daftar terlebih dahulu, gunakan command #daftar")
if (!isOwner) return reply("Only Owner")
if (!q) return cekBan("ban")
setUser("±ban", args[0], true)
reply("Sukses ban user ini")
break
case 'unban':
if (cekUser("id", sender) == null) return reply("Kamu belum terdaftar di database bot, Silahkan daftar terlebih dahulu, gunakan command #daftar")
if (!isOwner) return reply("Only Owner")
if (!q) return cekBan("unban")
setUser("±ban", args[0], false)
reply("Sukses unban user ini")
break

case 'chat': case 'menfess': case 'menfes': 
if (cekUser("id", sender) == null) return reply("Kamu belum terdaftar di database bot, Silahkan daftar terlebih dahulu, gunakan command #daftar")
if (!q) return reply(`Masukkan nomer&nama&chat\n> *Contoh?* : ${prefix + command} 6282347260729&Jokowi&Selamat pagi`)
if (!q1) return reply(`Masukkan nomer&nama&chat\n> *Contoh?* : ${prefix + command} 6282347260729&Jokowi&Selamat pagi`)
if (!q2) return reply(`Masukkan nomer&nama&chat\n> *Contoh?* : ${prefix + command} 6282347260729&Jokowi&Selamat pagi`)
if (!q3) return reply(`Masukkan nomer&nama&chat\n> *Contoh?* : ${prefix + command} 6282347260729&Jokowi&Selamat pagi`)
nayla.sendMessage(`${q1}@s.whatsapp.net`, {image:{url:"https://cdn-icons-png.flaticon.com/512/4712/4712029.png"}, caption:`Halo Ada pesan nih:3\n> *Dari* : ${q2}\n> *Jam* : ${jam}\n> *Pesan* : ${q3}`})
reply("Sukses mengirim pesan pribadi")
break

case 'addcmd': case 'addlist': case 'addcommand':
if (cekUser("id", sender) == null) return reply("Kamu belum terdaftar di database bot, Silahkan daftar terlebih dahulu, gunakan command #daftar")
if (!q1) return reply(`Masukkan cmd&balasannya\n*Contoh* : ${prefix + command} test&Halo`)
if (!q2) return reply(`Masukkan cmd&balasannya\n*Contoh* : ${prefix + command} test&Halo`)
storage.cmd.push({fitur: q1, mess:q2})
fs.writeFileSync('./db/function/storage.json', JSON.stringify(storage))
reply("Sukses menambah Cmd anda di database, Ingin melihat cmd anda? Gunakan command #getcmd")
break
case 'getcmd': case 'getlist': case 'getcommand': case 'list': case 'listcmd': case 'listcommand':
if (cekUser("id", sender) == null) return reply("Kamu belum terdaftar di database bot, Silahkan daftar terlebih dahulu, gunakan command #daftar")
if (storage.cmd == "") return reply("Tidak ada apa apa disini, Silahkan add cmd anda di command #addcmd")
cekStorage("cmd","cek")
break
case 'risetcmd': case 'resetcmd': case 'risetlist': case 'resetlist': case 'risetcommand': case 'resetcommand':
if (cekUser("id", sender) == null) return reply("Kamu belum terdaftar di database bot, Silahkan daftar terlebih dahulu, gunakan command #daftar")
if (!isOwner) return reply("Only Owner")
if (!q) return nayla.sendMessage(from, {text: "Apakah anda Yakin? ini akan menghapus semua/all list-cmd yang sudah terdaftar sebelumnya.", footer: 'Jika tidak yakin Abaikan saja pesan ini',buttons: [{buttonId: prefix + command + " y", buttonText: {displayText: 'YAKIN'}, type: 1}], headerType: 1})
storage.cmd = [] 
fs.writeFileSync('./db/function/storage.json', JSON.stringify(storage))
reply("SUKSES MENGHAPUS KESELURUHAN CMD") 
break
case 'gettcmd':
if (cekUser("id", sender) == null) return reply("Kamu belum terdaftar di database bot, Silahkan daftar terlebih dahulu, gunakan command #daftar")
reply(cekStorage("cmd","get",args[0],"mess"))
break 

case 'antilink':
if (cekUser("id", sender) == null) return reply("Kamu belum terdaftar di database bot, Silahkan daftar terlebih dahulu, gunakan command #daftar")
if (!isGroup) return reply("ONLY GROUP");
if (!isGroupAdmins) return reply("ONLY ADMIN");
if (!isBotGroupAdmins) return reply("BOT BUKAN ADMIN");
if (!q) return reply(`[ *ANTILINK* ]\n~> *ON*\n• ${prefix + command} on\n~> *OFF*\n• ${prefix + command} off`)
//if (isAntilink) return reply("Antilink sudah aktif sebelum nya")
if (q == "on"){
antilink.push(from)
fs.writeFileSync('./db/function/antilink.json', JSON.stringify(antilink))
reply("SUKSES ON")}
if (q == "off"){
antilink.splice(from, 1)
fs.writeFileSync('./db/function/antilink.json', JSON.stringify(antilink))
reply("SUKSES OFF")}
break

case 'welcome':
if (cekUser("id", sender) == null) return reply("Kamu belum terdaftar di database bot, Silahkan daftar terlebih dahulu, gunakan command #daftar")
if (!isGroup) return reply("ONLY GROUP");
if (!isGroupAdmins) return reply("ONLY ADMIN");
if (!isBotGroupAdmins) return reply("BOT BUKAN ADMIN");
if (!q) return reply(`[ *WELCOME* ]\n~> *ON*\n• ${prefix + command} on\n~> *OFF*\n• ${prefix + command} off`)
//if (isWelcome) return reply("Welcome sudah aktif sebelum nya")
if (q == "on"){
welcome.push(from)
fs.writeFileSync('./db/function/welcome.json', JSON.stringify(welcome))
reply("SUKSES ON")}
if (q == "off"){
welcome.splice(from, 1)
fs.writeFileSync('./db/function/welcome.json', JSON.stringify(welcome))
reply("SUKSES OFF")}
break 

case 'hackmatahari': case 'hackbumi': case 'hacklautan': case 'hacksatelit': case 'hackbapak':
//if (!isOwner) return reply("OWNER MENUTUP FITUR INI") 
if (cekUser("id", sender) == null) return reply("Kamu belum terdaftar di database bot, Silahkan daftar terlebih dahulu, gunakan command #daftar")
if (!args[0]) return hacker(command, "1")
hacker(command, args[0], args[1])
break

case 'bocil': case 'ukhty': case 'santuy': case 'rika': case 'hijaber': 
if (cekUser("id", sender) == null) return reply("Kamu belum terdaftar di database bot, Silahkan daftar terlebih dahulu, gunakan command #daftar")
const x33 = JSON.parse(fs.readFileSync(`./db/random/${command}.json`)); 
const x34 = x33[Math.floor(Math.random() * (x33.length))]
nayla.sendMessage(from, {video:{url:x34.url}, caption:"🥴", mentions:[sender]},{quoted:nay1})
break
case 'boneka': case 'cecan': case 'cogan': case 'darkjokes': case 'islamic': case 'mobil': case 'programing': case 'tatasurya': case 'wallhp':
if (cekUser("id", sender) == null) return reply("Kamu belum terdaftar di database bot, Silahkan daftar terlebih dahulu, gunakan command #daftar")
const x35  = JSON.parse(fs.readFileSync(`./db/random/${command}.json`)); 
const x36 = x35[Math.floor(Math.random() * (x35.length))]
nayla.sendMessage(from, {image:{url:x36}, caption:"🥴", mentions:[sender]},{quoted:nay1})
break
case 'truth': case 'dare':
if (cekUser("id", sender) == null) return reply("Kamu belum terdaftar di database bot, Silahkan daftar terlebih dahulu, gunakan command #daftar")
fetchJson(`https://api-yogipw.herokuapp.com/api/fun/${command}`).then(x => {
if (command == "dare"){ var x43 = x.dare }
if (command == "truth"){ var x43 = x.truth }
nayla.sendMessage(from, {image:{url:"https://i.ibb.co/K0zm7qT/20220904-124808.png"}, caption:`[ *TRURH OR DARE* ]\n• *User* : @${sender.split("@")[0]}\n• *Pilihan* : ${command}\n• *${command}* : ${x43}`, mentions:[sender]},{quoted:nay1})
})
break
case 'asahotak': case 'tekateki': case 'tebaktebakan': case 'tebaklirik': case 'tebakkata': case 'tebakkalimat': case 'tebakbendera': case 'susunkata': case 'siapaaku':
if (cekUser("id", sender) == null) return reply("Kamu belum terdaftar di database bot, Silahkan daftar terlebih dahulu, gunakan command #daftar")
if (!q) return Games(command, "soal", q)
if (cekUser("game", sender) == false){
Games(command, "soal", q)
} else { Games(command, "jawaban", q) }
break

case 'menyerah': case 'nyerah':
if (cekUser("game", sender) == false) return reply("Mainkan game terlebih dahulu:)")
reply("Anda menyerah, ingin bermain game lagi?")
setUser("±game", sender, false)
setUser("±jawaban", sender, false)
break
case 'bc': case 'broadcast':
if (cekUser("id", sender) == null) return reply("Kamu belum terdaftar di database bot, Silahkan daftar terlebih dahulu, gunakan command #daftar")
if (!q) return reply("Masukkan Text")
if (!isOwner) reply("Only owner")
if (m.messages[0].type !== 'conversation') return reply("Gunakan Pesan ber-type text")
Object.keys(daftar).forEach((i) => {
nayla.sendMessage(daftar[i].id, {text:"[ *BROADCAST* ]\n\n• *Message* : " + q + "\n• *Type* : text"},{quoted:nay1})
})
reply("Sukses Broadcast Ke orang yang terdaftar di database bot")
break
case 'tophit': 
if (cekUser("id", sender) == null) return reply("Kamu belum terdaftar di database bot, Silahkan daftar terlebih dahulu, gunakan command #daftar")
let numberhit = 0
var rows = []
daftar.sort((a, b) => (a.hit < b.hit) ? 1 : -1)
for (let z = 0; z < daftar.length; z++) {numberhit++
rows.push({title: `[👑${numberhit}]=[ ${daftar[z].id.split("@")[0]} ]=[ HIT : ${daftar[z].hit} ]`, rowId: prefix + "hittop " + daftar[z].id})
}
nayla.sendMessage(from, {
text: "~> *Total-User* : " + daftar.length,
footer: "Kamu Top nomer berapa nih?",
title: `[ *TOP(GLOBAL)-HIT* ]`,
buttonText: "OPEN",
sections: [{rows}]
})
break
case 'topkoin': 
if (cekUser("id", sender) == null) return reply("Kamu belum terdaftar di database bot, Silahkan daftar terlebih dahulu, gunakan command #daftar")
let numberkoin = 0
var rows = []
daftar.sort((a, b) => (a.koin < b.koin) ? 1 : -1)
for (let z = 0; z < daftar.length; z++) {numberkoin++
rows.push({title: `[👑${numberkoin}]=[ ${daftar[z].id.split("@")[0]} ]=[ KOIN : ${daftar[z].koin} ]`, rowId: prefix + "kointop " + daftar[z].id})
}
nayla.sendMessage(from, {
text: "~> *Total-User* : " + daftar.length,
footer: "Kamu Top nomer berapa nih?",
title: `[ *TOP(GLOBAL)-KOIN* ]`,
buttonText: "OPEN",
sections: [{rows}]
})
break
case 'hittop':
if (cekUser("id", sender) == null) return reply("Kamu belum terdaftar di database bot, Silahkan daftar terlebih dahulu, gunakan command #daftar")
nayla.sendMessage(from, {text: `@${q.split("@")[0]}`, mentions:[q]},{quoted:nay1})
break
case 'vjelek': case 'vcantik': case 'vganteng': case 'vsad': case 'vharam': case 'vhalal': case 'vbego': case 'vanjing': case 'vbiadab': case 'vramah': case 'vsatir': case 'vmanis': case 'vpahit': case 'vhitam': case 'vrasis': case 'vbaik': case 'vjahat': case 'vkaya': case 'vmiskin': case 'vpintar': case 'vbodoh': case 'vimut': case 'vkocak': case 'vkadang':   
if (cekUser("id", sender) == null) return reply("Kamu belum terdaftar di database bot, Silahkan daftar terlebih dahulu, gunakan command #daftar")
if (!isGroup) return reply("Only Group")
var x48 = []
Object.keys(groupMembers).forEach((i) => {  
x48.push(groupMembers[i].id)})
const x49 = x48[Math.floor(Math.random() * (x48.length))]
var vcard = 'BEGIN:VCARD\n' 
+ 'VERSION:3.0\n' 
+ `FN:User Ter${body.slice(2).trim().split(/ +/).shift().toLowerCase()}\n`
+ 'ORG:Bot;\n' 
+ `TEL;type=CELL;type=VOICE;waid=${x49.split("@")[0]}:+${x49.split("@")[0]}\n`
+ 'END:VCARD'
nayla.sendMessage(from, { contacts: { displayName: 'Jeff', contacts: [{ vcard }] }})
nayla.sendMessage(from, {text:`Dia adalah orang *Ter${body.slice(2).trim().split(/ +/).shift().toLowerCase()}* Disini, Tag @${x49.split("@")[0]}`, mentions:[x49]},{quoted:nay1})
break
case 'xjelek': case 'xcantik': case 'xganteng': case 'xsad': case 'xharam': case 'xhalal': case 'xbego': case 'xanjing': case 'xbiadab': case 'xramah': case 'xsatir': case 'xmanis': case 'xpahit': case 'xhitam': case 'xrasis': case 'xbaik': case 'xjahat': case 'xkaya': case 'xmiskin': case 'xpintar': case 'xbodoh': case 'ximut': case 'xkocak': case 'xkadang':   
if (cekUser("id", sender) == null) return reply("Kamu belum terdaftar di database bot, Silahkan daftar terlebih dahulu, gunakan command #daftar")
if (!isGroup) return reply("Only Group")
var x50 = []
Object.keys(groupMembers).forEach((i) => {  
x50.push(groupMembers[i].id)})
const x51 = x50[Math.floor(Math.random() * (x50.length))]
nayla.sendMessage(from, {sticker:{url:"./db/media/sticker.webp"}},{quoted:{ key: {fromMe: false, participant: `${x51}`, ...(from ? { remoteJid: "status@broadcast" } : {})},message: {"conversation": `Gw yang Ter${body.slice(2).trim().split(/ +/).shift().toLowerCase()} Disini😅`}}})
break 

case 'girlneko': case 'gilrneko':
if (cekUser("id", sender) == null) return reply("Kamu belum terdaftar di database bot, Silahkan daftar terlebih dahulu, gunakan command #daftar")
if (!q1 && !q2) return reply("Masukkan text1&text2\nContoh? #girlneko aku&kamu")
reply("[❗] SEDANG DIPROSES")
nayla.sendMessage(from, {image:{url:`https://ziy.herokuapp.com/api/maker/girlneko?text1=${q1}&text2=${q2}&apikey=xZiyy`}, caption:"👍", mentions:[sender]},{quoted:nay1})
break
case 'sadboy':
if (cekUser("id", sender) == null) return reply("Kamu belum terdaftar di database bot, Silahkan daftar terlebih dahulu, gunakan command #daftar")
if (!q1 && !q2) return reply("Masukkan text1&text2\nContoh? #sadboy aku&kamu")
reply("[❗] SEDANG DIPROSES")
nayla.sendMessage(from, {image:{url:`https://ziy.herokuapp.com/api/maker/sadboy?text1=${q1}&text2=${q2}&apikey=xZiyy`}, caption:"👍", mentions:[sender]},{quoted:nay1})
break 
case 'kaneki': case 'rem': case 'lolimaker':
if (cekUser("id", sender) == null) return reply("Kamu belum terdaftar di database bot, Silahkan daftar terlebih dahulu, gunakan command #daftar")
if (!q) return reply("Masukkan text")
reply("[❗] SEDANG DIPROSES")
nayla.sendMessage(from, {image:{url:`https://ziy.herokuapp.com/api/maker/${command}?nama=${q}&apikey=xZiyy`}, caption:"👍", mentions:[sender]},{quoted:nay1})
break
case 'audio1': case 'audio2': case 'audio3': case 'audio4': case 'audio5': case 'audio6': case 'audio7': case 'audio8': case 'audio9': case 'audio10': case 'audio11': case 'audio12': case 'audio13': case 'audio14': case 'audio15': case 'audio16': case 'audio17': case 'audio18': case 'audio19': case 'audio20':
nayla.sendMessage(from, {audio:{url:`https://md-devs.herokuapp.com/${command}.mp3`}, mimetype:'audio/mp4', ptt:true},{quoted:nay1})
break
case 'ytmp3':
if (!q) return reply("Masukkan link nya")
reply("[❗] SEDANG DIPROSES")
var yt = await youtubedlv2(q).catch(e => { reply("PASTIKAN LINKNYA VALID(LINK YOUTUBE)")})
var dl_url = await yt.audio["128kbps"].download()
nayla.sendMessage(from, {audio:{url:dl_url}, mimetype: 'audio/mp4'},{quoted:nay1})
break
case 'ytmp4':
if (!q) return reply("Masukkan link nya")
reply("[❗] SEDANG DIPROSES")
var yt = await youtubedlv2(q).catch(e => { reply("PASTIKAN LINKNYA VALID(LINK YOUTUBE)")})
var dl_url = await yt.video["480p"].download()
nayla.sendMessage(from, {video:{url:dl_url}},{quoted:nay1})
break
case 'tiktok': case 'tt':
reply(`[ *TIKTOK-DL* ]\n• *${prefix}tiktokmp3*\n• *${prefix}tiktokmp4*`)
break
case 'ttmp4': case 'ttvideo': case 'tiktokmp4': case 'tiktokvideo':
if (!q) return reply("Masukkan link nya")
reply("[❗] SEDANG DIPROSES")
var tt = await tiktokdlv3(q).catch(e => { reply("PASTIKAN LINKNYA VALID(LINK TIKTOK)")})
nayla.sendMessage(from, {video:{url:tt.video.no_watermark}, caption:"😀", mentions:[sender]},{quoted:nay1})
break 
case 'ttmp3': case 'ttaudio': case 'tiktokmp3': case 'tiktokaudio':
if (!q) return reply("Masukkan link nya")
reply("[❗] SEDANG DIPROSES")
var tt = await tiktokdlv3(q).catch(e => { reply("PASTIKAN LINKNYA VALID(LINK TIKTOK)")})
nayla.sendMessage(from, {audio:{url:tt.music}, mimetype:"audio/mp4", mentions:[sender]},{quoted:nay1})
break
  
default: 

if (!isCmd) {
if (!isAntilink) return
if (!isGroup) return
if (budy.includes("http")) { if (isGroupAdmins) return reply("Admin Bebas melanggar 👍")
if (!isBotGroupAdmins) return reply("Antilink On, Bot bukan admin, perintah di batalkan")
reply("[ *ANTILINK* ]")
await nayla.groupParticipantsUpdate(from, [sender], "remove")}
if (budy.includes("https")) { if (isGroupAdmins) return reply("Admin Bebas melanggar 👍")
if (!isBotGroupAdmins) return reply("Antilink On, Bot bukan admin, perintah di batalkan")
reply("[ *ANTILINK* ]")
await nayla.groupParticipantsUpdate(from, [sender], "remove")}
if (budy.includes(".com")) { if (isGroupAdmins) return reply("Admin Bebas melanggar 👍")
if (!isBotGroupAdmins) return reply("Antilink On, Bot bukan admin, perintah di batalkan")
reply("[ *ANTILINK* ]")
await nayla.groupParticipantsUpdate(from, [sender], "remove")}
if (budy.includes("herokuapp")) { if (isGroupAdmins) return reply("Admin Bebas melanggar 👍")
if (!isBotGroupAdmins) return reply("Antilink On, Bot bukan admin, perintah di batalkan")
reply("[ *ANTILINK* ]")
await nayla.groupParticipantsUpdate(from, [sender], "remove")}
if (budy.includes(".xyz")) { if (isGroupAdmins) return reply("Admin Bebas melanggar 👍")
if (!isBotGroupAdmins) return reply("Antilink On, Bot bukan admin, perintah di batalkan")
reply("[ *ANTILINK* ]")
await nayla.groupParticipantsUpdate(from, [sender], "remove")}
if (budy.includes("t.me")) { if (isGroupAdmins) return reply("Admin Bebas melanggar 👍")
if (!isBotGroupAdmins) return reply("Antilink On, Bot bukan admin, perintah di batalkan")
reply("[ *ANTILINK* ]")
await nayla.groupParticipantsUpdate(from, [sender], "remove")}
}
if (budy == prefix + "sc"){reply("https://semawur.com/6df19ZzNz")} // JANGAN DI UBAH:(
}} catch (err) {
console.log(color('[ERROR]', 'red'), err)
}}
