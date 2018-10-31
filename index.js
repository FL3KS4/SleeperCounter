const Discord = require("Discord.js");
const Botconfig = require("./botconfig.json");

const bot = new Discord.Client();  //({disableEveryone: true});

bot.on("ready", async() =>{
  console.log(`${bot.user.username} is online!`);
  bot.user.setActivity("Counting...");
});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = Botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  if(cmd ===`${prefix}count` ){

  let countt = (parseInt(args[0]) * 1.5);
  let counttt = Math.round(countt);

  let reportEmbed = new Discord.RichEmbed()
  .setDescription("Counts")
  .setColor("#15f153")
  .addField("Distance",`Number of sleepers on ${args[0]} metres.` )
  .addField("IS", `${counttt}`);

    return message.channel.send(reportEmbed);
  }

  if(cmd === `${prefix}botinfo`){
  let botembed = new Discord.RichEmbed()
  .setDescription("Bot information")
  .setColor("#15f153")
  .addField("Bot name ", bot.user.username)
  .addField("Created by", "FL3KS4");

  return message.channel.send(botembed);
  }


});

bot.login(process.env.BOT_TOKEN);
