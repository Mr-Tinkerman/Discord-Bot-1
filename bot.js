const Discord = require("discord.js");
const client = new Discord.Client();
const config_file = require("./config.json");
var prefix = config_file.prefix;


client.on("ready", () => {
  message.channel.send("Welcome " + message.author.id);
  console.log("I am ready!");
});

client.on("message", (message) => {
  if (!message.content.startsWith(prefix)) return;

  if (message.content.startsWith(prefix + "ping")) {
    message.channel.send("pong");
  } else
  if (message.content.startsWith(prefix + "Hi") || message.content.startsWith(prefix + "Hello") || message.content.startsWith(prefix + "Herro")) {
    message.channel.send("Hi... how are you?");
  }
});

client.login(process.env.BOT_TOKEN);
