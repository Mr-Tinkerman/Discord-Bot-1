const Discord = require("discord.js");
const client = new Discord.Client();
const config_file = require("./config.json");
var prefix = config_file.prefix;


client.on("ready", () => {
  console.log("I am ready!");
});

client.on("message", (message) => {
  var args = message.content.slice(prefix.length).trim().split(/ +/g);
  var command = args.shift().toLowerCase();

  if (command === "ping") 
  {
    message.channel.send("pong");
  } 
  else 
    if (command === "clear")
    {
      try 
      {
        if (message.member.hasPermission("MANAGE_MESSAGES")) 
        {
          messages = message.channel.fetchMessages();
          message.channel.bulkDelete(messages);
        }
      } catch(e) {
          message.channel.send("ERROR: ERROR CLEARING CHANNEL.");
          console.log(e);
      }
    }
});

client.login(process.env.BOT_TOKEN);
