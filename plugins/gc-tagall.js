let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `《 𝐌𝐞𝐧𝐬𝐚𝐣𝐞 》: ${pesan}`
let teks = `《⺀💜 𝐱𝐢𝐨 𝐛𝐨𝐭 𝐥𝐚𝐬 𝐢𝐧𝐯𝐨𝐜𝐚 𝐦𝐚𝐧𝐜𝐚𝐬💜⺀》\n\n❏ ${oi}\n\n❏ 《 𝐄𝐭𝐢𝐪𝐮𝐞𝐭𝐚𝐬 》:\n`
for (let mem of participants) {
teks += `✼💜@${mem.id.split('@')[0]}\n`}
teks += `➥ 𝐁𝐨𝐭 𝐝𝐞 𝐗𝐢𝐨 `
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i
handler.admin = true
handler.group = true
export default handler
    
