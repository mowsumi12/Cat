module.exports.config = {
  name: "sim",
  version: "1.0.0",
  permssion: 0,
  credits: "nazrul",
  prefix: 'awto',
  description: "Dont Change This Credits Otherwisw Your Bot Lol",
  usages: "sim (ask) reply simsimi",
  category: "user",
  cooldowns: 2
};

module.exports.run = async function({ api, event, args }) {
		const axios = require("axios");
		let { messageID, threadID, senderID, body } = event;
		let tid = threadID,
				mid = messageID;
		const content = encodeURIComponent(args.join(" "));
		if (!args[0]) return api.sendMessage("Please type a message...", tid, mid);
		try {
				const res = await axios.get(`http://fi1.bot-hosting.net:6378/sim?query=${content}`);
				const respond = res.data.respond;
				if (res.data.error) {
						api.sendMessage(`Error: ${res.data.error}`, tid, (error, info) => {
								if (error) {
										console.error(error);
								}
						}, mid);
				} else {
						api.sendMessage(respond, tid, (error, info) => {
								if (error) {
										console.error(error);
								}
						}, mid);
				}
		} catch (error) {
				console.error(error);
				api.sendMessage("An error occurred while fetching the data.", tid, mid);
		}
};
