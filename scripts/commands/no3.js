const fs = require("fs");
module.exports.config = {
	name: "😘",
    version: "1.0.1",
	permission: 0,
	credits: "nazrul", 
	prefix: true,
	description: "hihihihi",
	category: "no prefix",
	usages: "😘",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("😘")==0 || event.body.indexOf("😘")==0 || event.body.indexOf("😘")==0) {
		var msg = {
				body: "🙄লুৃ্চ্চাৃ্ঁমিৃ্ঁ ন্ঁট্ঁ এৃ্ঁলাৃ্ঁওৃ্ঁ😒আ্ঁমা্ঁর্ঁ ব্ঁস্ঁ _জিঁলাঁপিঁ_.ব্ঁল্ঁছে্ঁ😐 \n✢━━━━━━━━━━━━━━━✢\n ----❖----- 𝐍𝐀𝐙𝐑𝐔𝐋 -----❖----",
				attachment: fs.createReadStream(__dirname + `/noprefix/kiss.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🙈", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
