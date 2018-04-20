const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log("I am ready!");
});

const prefix = "~";
client.on("message", (message) => {
  if (!message.content.startsWith(prefix)) return;

  if (message.content.startsWith(prefix + "ping")) {
    message.channel.send("pong");
  } else
  if (message.content.startsWith(prefix + "Hi") || message.content.startsWith(prefix + "Hello") || message.content.startsWith(prefix + "Herro")) {
    message.channel.send("Hi, how are you");
  }
});

client.login(process.env.CLIENT_TOKEN);