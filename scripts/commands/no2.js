const fs = require("fs");
module.exports.config = {
	name: "npxs24",
        version: "1.0.1",
	permission: 0,
	credits: "bbye", 
        prefix: true, 
	description: "hihihihi",
	category: "no prefix",
	usages: "npxs24",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
if(event.body.indexOf("👩‍❤️‍👩")==0 || event.body.indexOf("💏")==0 ||
event.body.indexOf("🤱")==0 || 
event.body.indexOf("🤰")==0 || 
event.body.indexOf("👨‍❤️‍💋‍👨")==0) {
     var msg = {
				body: "★তুমি শুধু ভালোবাসা দেও        🤫👶🤫 জিঁলাঁপিঁ  ___। ★আমি এমন একটা বাচ্চা ★গিফট করব💬❤️‍🩹               \n✢━━━━━━━━━━━━━━━✢\n ----❖----- 𝐍𝐀𝐙𝐑𝐔𝐋 -----❖---- ", 
				attachment: fs.createReadStream(__dirname + `/noprefix/bot11.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🤪", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
