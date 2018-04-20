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

  message.channel.send(message.author.id);
  if (command === "ping") 
  {
    message.channel.send("pong");
  } 
  else 
  {
    message.channel.send("Invalid Command!!!");
  }
});

client.login(process.env.BOT_TOKEN);
