module.exports.config = {
    name: "cat",
    version: "1.0.0",
    permission: 0,
    credits: "nazrul",
    description: "Talk to sim",
    prefix: "noprefix",
    category: "sim",
    usages: "[ask]",
    cooldowns: 2,

 }; module.exports.run = async ({ api, event,args }) => { const axios = require("axios"); let query = args.join(" "); if (!query) return api.sendMessage(`Wrong Command\nUse this: ${global.config.PREFIX}${this.config.name} Ki koros \n\n[ Teach: ${this.config.name} \n example : teach Tmr Name Ki - ${this.config.name} \n\n support language English - Banglish ✅ ]`, event.threadID, event.messageID); const res = await axios.get(`http://ip.minehost.fun:2279/sim?type=ask&ask=${query}`); var plaintext = res.data.answer; api.sendMessage(plaintext, event.threadID, event.messageID) }
