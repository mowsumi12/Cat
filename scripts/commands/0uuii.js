module.exports.config = {
	name: "uid20",
	version: "1.0.0",
	Permission: 0,
	credits: "nazrul",
    prefix: true,
	description: "Lấy ID người dùng.",
	category: "Tiện Ích",
	cooldowns: 0
};

module.exports.run = async function({ api, event, args }) {
const fs = global.nodemodule["fs-extra"];
    const request = global.nodemodule["request"];
    const axios = global.nodemodule['axios']; 
    if(event.type == "message_reply") { 
	uid = event.messageReply.senderID
	var data = await api.getUserInfoV2(uid);
        var name = data.name
        let
  s = process.uptime(),u = [s/3600<<0, s/60%60<<0, s%60<<0].map(el => el < 10?'0'+el: el);
 let n = (await axios.get(`https://golike.com.vn/func-api.php?user=${event.senderID}`)).data.data.date;
	var callback = () =>   api.sendMessage({body:`➩ Tên : ${name}\n➩ Uid : ${uid}\n➩ Inbox : m.me/${uid}\n➩ Link : ${data.link}\n➩ Ngày Tạo acc : ${n}\n➩ Thời gian onl : ${u.join(':')} `, attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID,
        () => fs.unlinkSync(__dirname + "/cache/1.png"),event.messageID); 
    return request(encodeURI(`https://graph.facebook.com/${uid}/picture?height=1500&width=1500&access_token=463372798834978|csqGyA8VWtIhabZZt-yhEBStl9Y`)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',
        () => callback()); 
    }
    if (!args[0]) {
	    var data = await api.getUserInfoV2(event.senderID);
var name = data.name
      let
  s = process.uptime(),u = [s/3600<<0, s/60%60<<0, s%60<<0].map(el => el < 10?'0'+el: el);
  let n = (await axios.get(`https://golike.com.vn/func-api.php?user=${event.senderID}`)).data.data.date;
        var callback = () =>  api.sendMessage({body:`➩ Tên : ${name}\n➩ Uid : ${event.senderID}\n➩ Inbox : m.me/${event.senderID}\n➩ Link : ${data.link}\n➩ Ngày Tạo acc : ${n}\n➩ Thời gian onl : ${u.join(':')} `, attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID,
        () => fs.unlinkSync(__dirname + "/cache/1.png"),event.messageID); 
    return request(encodeURI(`https://graph.facebook.com/${event.senderID}/picture?height=1500&width=1500&access_token=463372798834978|csqGyA8VWtIhabZZt-yhEBStl9Y`)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',
        () => callback()); 
    }
    else {
	if (args[0].indexOf(".com/")!==-1) {
    const res_ID = await api.getUID(args[0]);
    var data = await api.getUserInfoV2(res_ID);
    var name = data.first_name
    var link = data.link
    var callback = () => api.sendMessage({body:`➩ Tên : ${name}\n➩ Uid : ${res_ID}\n➩ Inbox : m.me/${res_ID}\n➩ Link : ${link}\n➩ Ngày Tạo acc : ${n}\n➩ Thời gian onl : ${u.join(':')} `, attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID,
        () => fs.unlinkSync(__dirname + "/cache/1.png"),event.messageID); 
    return request(encodeURI(`https://graph.facebook.com/${res_ID}/picture?height=1500&width=1500&access_token=463372798834978|csqGyA8VWtIhabZZt-yhEBStl9Y`)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',
        () => callback()); }
	else {
		if (args.join().indexOf('@') !== -1) var uid = Object.keys(event.mentions) 
var data = await api.getUserInfoV2(uid);
var name = data.name
const res = await axios.get(`https://golike.com.vn/func-api.php?user=${event.senderID}`);
      var callback = () => 
api.sendMessage({body:`➩ Tên : ${name}\n➩ Uid : ${uid}\n➩ Inbox m.me/${uid}\n➩ Link : ${data.link}\n➩ Ngày Tạo acc: ${n}\n➩ Thời gian onl: ${u.join(':')} `, attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID,
        () => fs.unlinkSync(__dirname + "/cache/1.png"),event.messageID); 
    return request(encodeURI(`https://graph.facebook.com/${uid}/picture?height=1500&width=1500&access_token=463372798834978|csqGyA8VWtIhabZZt-yhEBStl9Y`)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',
        () => callback()); 
	}
}
                                                                                        }