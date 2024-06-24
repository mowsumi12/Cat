module.exports.config = {
    name: 'janu',
    version: '1.1.1',
    permssion: 0,
    credits: 'Islamick Cyber Chat',
    description: 'use Jane for Funny Masage',
    category: 'janu',
    usages: 'janu',
    cooldowns: 2,
};
const {
    get
} = require('axios');
const CN = `https://simsimi-fun.onrender.com/sim?type=ask&ask=`
//https://simsimi-fun.onrender.com/sim?type=ask&ask=sim%20%C6%A1i
module.exports.run = () => {};
module.exports.handleEvent = async function( {
    api, event
}) {
var hm =["Assalamu Alaikum It’s Me Islamick Cyber Chat ","This is New update system for janu api","we can enjoy for janu api"]
  var t = hm[Math.random()*hm.length<<0]
    if (['Janu', 'Xanu','janu','xanu','jan','xan','Xan','Xan','hello Janu'].includes(event.body.toLowerCase())) {
       api.sendMessage({body: `${t}Reply to this message if you want to respond to the Janu✨🤍`,attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://scrapi.apibot.repl.co/gai')).data.data,
method: "GET",
responseType: "stream"
})).data
  }, event.threadID, (err, data) => global.client.handleReply.push({
        name: this.config.name, messageID: data.messageID
    }), event.messageID);
    };
};
module.exports.handleReply = async function({
    handleReply: $, api, event
}) {
    const res = await get(`${CN}${encodeURI(event.body)}`);
   if (res.data.error) return api.sendMessage(`${res.data.error}`, event.threadID, (err, data) => global.client.hhandleReply.push({
       name: this.config.name,
       messageID: data.messageID,
       ask: event.body
   }), event.messageID); else api.sendMessage({body: `response janu: ${res.data.answer}Reply to this message from the bot if you want to continue responding😊`, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://scrapi.apibot.repl.co/gai')).data.data,
method: "GET",
responseType: "stream"
})).data
},event.threadID, (err, data) => global.client.handleReply.push({
        name: this.config.name, messageID: data.messageID
    }), event.messageID);
};
