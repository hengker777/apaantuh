let handler =  m => m.reply(`
╭━━━━「 *SEWA* 」
┊⫹⫺ *Hemat:* _5k/grup (1 minggu)_
┊⫹⫺ *Normal:* _10k/grup (1 bulan)_
┊⫹⫺ *Standar:* _20k/grup (2 bulan)_
┊⫹⫺ *Pro:* _40k/grup (4 bulan)_                                                      
┊⫹⫺ *Vip:* = _60k/grup (12 bulan)_
╰═┅═━––––––๑

╭━━━━「 *PREMIUM* 」
┊⫹⫺ *Hemat:* _10k (1 minggu)_
┊⫹⫺ *Normal:* _20k (1 bulan)_
┊⫹⫺ *Pro:* _30k (4 bulan)_
┊⫹⫺ *Vip:* _40k (8 bulan)_                                               
┊⫹⫺ *Permanent:* = _50k (Unlimited)_
╰═┅═━––––––๑
*⫹⫺ PAYMENT*
*DANA: 082123019956*
*GOPAY: 082123019956*
*PULSA: 082123019956*

🗣️: Kak, Kok harganya mahal banget?
💬: Mau tawar menawar? boleh, silahkan chat owner aja
© 𝙋𝙤𝙬𝙚𝙧𝙚𝙙 𝘽𝙮 𝐅𝐢𝐤𝐫𝐢𝐢
`.trim()) // Tambah sendiri kalo mau
handler.help = ['sewa', 'premium']
handler.tags = ['main']
handler.command = /^(sewa(bot)?|premium)$/i

export default handler
