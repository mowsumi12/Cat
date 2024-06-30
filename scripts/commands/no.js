const fs = require("fs");
module.exports.config = {
  name: "nazrul4",
    version: "1.0.1",
  permission: 0,
  credits: "nazrul",
  
  description: "hihihihi",
  category: "nazrul",
  usages: "nazrul",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  if (event.body.indexOf("🥲")==0 || event.body.indexOf("🥲")==0 || event.body.indexOf("🥲")==0 || event.body.indexOf("🥲")==0) {
    var msg = {
        body: "-কারো মনে জায়গা পাই আর না পাই -!!🙂🥀\nকবরস্থানে একদিন ঠিকই জায়গা হয়ে যাবে ইনশাআল্লাহ্ ❞!🥲😔\n===== 𝐍𝐀𝐙𝐑𝐔𝐋 𝐁𝐎𝐓 =====",
        attachment: fs.createReadStream(__dirname + `/nazrul/nazrul3.mp3`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🥲", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
