const fs = require("fs");
module.exports.config = {
	name: "rajvir",
    version: "1.0.1",
	permission: 0,
	credits: "MrTomXxX", 
 prefix: true, 
	description: "hihihihi",
	category: "no prefix",
	usages: "tea",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("@खूनी")==0 || event.body.indexOf("🥺")==0 || event.body.indexOf("Rajvir")==0 || event.body.indexOf("Khuni")==0) {
		var msg = {
				body: "𝗕𝗲𝘀𝘁 𝗙𝗿𝗶𝗲𝗻𝗱 𝗢𝗳 𝗠𝘆 𝗕𝗼𝘀𝘀\n 💞 𝗔𝗿𝘂𝗻 𝗞𝗶 𝗝𝗮𝗻 😘 𝗝𝗶𝗴𝗿𝗶 𝗗𝗼𝘀𝘁 \n 𝗞𝗛𝗨𝗡𝗜  𝗕𝗔𝗕𝗔♥️🌹",
				attachment: fs.createReadStream(__dirname + `/noprefix/bot11.mp3`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🗡", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
