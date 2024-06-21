const axios = require('axios');
const fs = require('fs-extra');

module.exports.config = {
	name: "uns2",
	version: "1.0.0", 
	permission: 2,
	credits: "Islamick Cyber Chat Admin nazrul",
	description: "Remove Bot's messages",
	category: "System", 
 prefix: true,
	usages: "", 
	cooldowns: 0,
	dependencies: [] 
};
module.exports.languages = { "bn": 
   { "unsendErr1": "╭•┄┅════❁🌺❁════┅┄•╮\n\nঅন্য লোকেদের বার্তা মুছে ফেলা যাবে না\n\n╰•┄┅════❁🌺❁════┅┄•╯",
 "unsendErr2": "╭•┄┅════❁🌺❁════┅┄•╮\n\nঅপসারণ করা প্রয়োজন যে বার্তার উত্তর দয়া করে\n\n╰•┄┅════❁🌺❁════┅┄•╯" }, 
"en": { "unsendErr1": "Can't to unsend message from other user.",
        "unsendErr2": "Reaction to the message you want to unsend." } }
module.exports.handleEvent = async function ({ api, event }) {
  if (!(event.body.indexOf("😡") === 0 || event.body.indexOf("🤬") === 0)) return;
  const args = event.body.split(/\s+/);
  args.shift();
	if (event.messageReaction.senderID != api.getCurrentUserID()) return api.sendMessage(getText('unsendErr1'), event.threadID, event.messageID);
			if (event.type != "message_reaction") return api.sendMessage(getText('unsendErr2'), event.threadID, event.messageID);
			return api.unsendMessage(event.messageReaction.messageID, err => (err) ? api.sendMessage(getText('error'), event.threadID, event.messageID) : '');
    }
module.exports.run = async function ({ api, event }) {};
