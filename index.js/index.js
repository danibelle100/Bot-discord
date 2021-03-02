const Discord = require('discord.js');
const bot = new Discord.Client();

bot.login("ODE2MzIyMzYxNDI2NTc1NDEw.YD5RcQ.p9_ooe6Nv_s44mrHb4tRUhyV-Uc");
bot.once ("ready",()=>{
    console.log("Bot Pirata");
    bot.user.setActivity("Bot Pirata",{type: "PLAYING"});
});


bot.on ("message",(message)=>{
    if (message.content==".ciao"||message.content==".Ciao")
    {
        message.channel.send("CIAO A TE")
    }
});

bot.on("message",(message)=>{

    if (message.content==".Help"|| message.content==".help")
    {
        message.channel.send("Questi sono i miei comandi :")
    }
});