const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

client.on("ready", () => {
  console.log("I am ready!");
});

client.on("message", (message) => {
  if (!message.content.startsWith(config.prefix)) return;

  if (message.content.startsWith(config.prefix + "ping")) {
    message.channel.send("pong");
  } else
  if (message.content.startsWith(config.prefix + "Hi") || message.content.startsWith(config.prefix + "Hello") || message.content.startsWith(config.prefix + "Herro")) {
    message.channel.send("Hi... how are you?");
  }
});

client.login(process.env.BOT_TOKEN);
//(config.prefix + "");
