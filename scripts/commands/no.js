const fs = require("fs");
module.exports.config = {
	    name: "🥺",
    version: "1.1.0",
    permission: 0,
    credits: "nazrul",
    description: "noprefix",
    prefix: true,
    category: "commands",
    usages: "🥺",
    cooldowns: 5,
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("💯")==0 || event.body.indexOf("💯")==0 || event.body.indexOf("💯")==0 || event.body.indexOf("💯")==0) {
		var msg = {
				body: "মুখে বলা কথা কাজে করে দেখাতে হবে তবেই মানুষের বিশ্বাসভাজন হতে পারবে🤠 \n✢━━━━━━━━━━━━━━━✢\n ----❖----- 𝐍𝐀𝐙𝐑𝐔𝐋 -----❖----",
				attachment: fs.createReadStream(__dirname + `/noprefix/bot11.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🤦‍♂️", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

                                                       }
