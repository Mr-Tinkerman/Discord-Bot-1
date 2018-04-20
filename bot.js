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
  else if (command === "clear" && config_file.admin_permissions.includes(message.author.id))
  {
    message.channel.send("Invalid Command!!!");
  }
});

client.login(process.env.BOT_TOKEN);
