import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://zenzapis.xyz/api/morensfw/cuckold?apikey=a5652f2864'
		conn.sendButton(m.chat, 'Wibu stress', wm, await(await fetch(url)).buffer(), [['Next',`.${command}`]],m)
		}
		handler.command = /^(cuckoid)$/i
		handler.tags = ['nsfw']
		handler.help = ['cuckoid']
		handler.limit = true
export default handler
