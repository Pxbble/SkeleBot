const Discord = require("discord.js");
const YTDL = require("ytdl-core");

const TOKEN = "NDE1NzY5NjA1NjE3NzQ1OTIw.DW6xGg.nwf5pWGPkr8pCLnYHnDSN_p2hls";
const PREFIX = "!";

function play(connection, message) {
    var server = servers[message.guild.id];

    server.dispatcher = conneection.playStream(YTDL(server.queue[0], {filter: "audioonly"}));

    server.queue.shift();

    server.dispatcher.on("end", function() {
        if (server.queue[0]) play(connection, message);
        else connection.disconnect();
  });
}

var bot = new Discord.Client();

var servers = {};

var fortunes = [
    "Yes",
    "No",
    "Maybe",
    "LOL NEVER",
    "Yes on so many levels",
    "Soz No",
    "Just don't",
    "OMG YES",
    "Pls No",
];

bot.on("ready", function() {
  console.log("Ready");
});

bot.on("message", function(message) {
  if (message.author.equals(bot.user)) return;

  if (!message.content.startsWith(PREFIX)) return;

  var args = message.content.substring(PREFIX.length).split(" ");

  switch (args[0].toLowerCase()) {
    case "ping":
      message.channel.sendMessage(message.author.toString() + ", Pong!")
      break;
     case "dick":
      message.channel.sendMessage("8=====D")
      break;
      case "penis":
      message.channel.sendMessage("https://prnt.sc/igmtns")
      break;
      case "version":
      message.channel.sendMessage("```PebBot: Version 1.0.0```")
      break;
      case "creator":
      message.channel.sendMessage(message.author.toString() + "**, This bot has been created by a 12 year old kid named Pebble**")
      break;
      case "bangtankook":
      message.channel.sendMessage("**is a great friend!**")
      break;
      case "pebble":    
      message.channel.sendMessage("**Developer and Creator of PebBot**")
      break;
      case "ohreally":
      message.channel.sendMessage("yes really")
      break;
      case "shadey":
      message.channel.sendMessage("```The Owner and Creator of the Discord Server```")
      break;
      case "momento":
      message.channel.sendMessage("**Its a fun server, Join now! :mc.momentonetwork.net**")
      break;
      case "danny":
      message.channel.sendMessage("_The Great Owner Of MomentoNetwork_")
      break;
      case "commands":
      message.channel.sendMessage(message.author.toString() + "**, ```To view the commands, Please go into the channel #command-request```**")
      break;
      case "8ball":
      if (args[1]) message.channel.sendMessage(fortunes[Math.floor(Math.random() * fortunes.length)]);
     else message.channel.sendMessage(message.author.toString() + ", I can't read that i'm v soz");
     break;
     case "play":
        if(!args[1]) {
            message.channel.sendMessage("Please provide a link");
            return;
        }

        if(!message.member.voiceChannel) {
            message.channel.sendMessage("Please join a voice channel");
            return;
        }

        if (!servers[message.guild.id]) servers[message.guild.id] = {
            queue: []
        };


        var server = servers[message.guild.id]

        if (!message.guild.voiceConnection) message.member.voiceChannel.join().then(function(connection) {
            play(connection, message);

            
        });
         break;
        case "skip":
            var server = servers[message.guild.id];

            if (server.dispatcher) server.dispatcher.end();
            break;
        case "stop":
            var server = servers[message.guild.id];

            server.queue.push(args[1]);

            if (message.guild.voiceConnection) message.guild.voiceConnection.disconnect
      case "":
            message.channel.sendMessage("Do !commands to see commands!");
            break;
          
         default:
         message.channel.sendMessage("That command does not exist! Put that in #command-request and Pebble will try to make it x3");
          

   }
});

bot.login(TOKEN);
