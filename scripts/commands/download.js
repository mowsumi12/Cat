const axios = require("axios");
const fs = require("fs-extra");
const { alldown } = require("nayan-media-downloader");

module.exports = {
  config: {
    name: "auto",
    version: "0.0.2",
    permission: 0,
    prefix: true,
    credits: "Nayan",
    description: "auto video download",
    category: "user",
    usages: "",
    cooldowns: 5,
  },
  start: async function ({ nayan, events, args }) {},
  handleEvent: async function ({ api, event, args }) {
    const content = event.body ? event.body : '';
    const body = content.toLowerCase();

    if (body.startsWith("https://")) {
      api.setMessageReaction("🔍", event.messageID, (err) => {}, true);
      try {
        const data = await alldown(content);
        console.log(data);

        if (!data.status) {
          api.setMessageReaction("❌", event.messageID, (err) => {}, true);
          return api.sendMessage(data.msg, event.threadID, event.messageID);
        }

        const { low, high, title } = data.data;
        const u = high || low;

        api.setMessageReaction("✔️", event.messageID, (err) => {}, true);

        const video = (await axios.get(u, { responseType: "arraybuffer" })).data;

        fs.writeFileSync(__dirname + "/cache/auto.mp4", Buffer.from(video, "utf-8"));

        return api.sendMessage({
          body: `《TITLE》: ${title}`,
          attachment: fs.createReadStream(__dirname + "/cache/auto.mp4")
        }, event.threadID, event.messageID);
      } catch (error) {
        return api.sendMessage("An error occurred while processing the request.", event.threadID, event.messageID);
      }
    }
  }
};
