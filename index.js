//770072052534870036 ID
//rqOhFto0UOj4VY0Ua0y7hiLYtd0PR8R6 TAJNA
//8d6cd77e9ec8af225fe731e6ae5c6efda16f4810e5bad79468a1566839dc7d28 JAVNI KLJUC
//NzcwMDcyMDUyNTM0ODcwMDM2.X5YPfA.9l9C1hOfKK-XP54GITpJB3VfTvo BOT
// 522304 INT

require('dotenv').config();
const Discord = require('discord.js');
const { resolve } = require('path');
const Twitter = require('twitter');
const bot = new Discord.Client();
const twitter=require('twitter');

const TOKEN = "NzcwMDcyMDUyNTM0ODcwMDM2.X5YPfA.9l9C1hOfKK-XP54GITpJB3VfTvo";
let client = new Twitter({
    consumer_key: "OvBLUl6ePuOsZ10xwZrTVopA4",
    consumer_secret: "ODeLKwAG2IQE8tGckl9TZ7eegv75gWz2KsY4lx4etEm7PpqnVP",
    access_token_key: "1169918783944892416-y32TqPcpjdiJZd7ls8L2EZacYkXHtM",
    access_token_secret : "FaXkJIjIakaRlM18HaI7AMjE9shgA2WZbZG3BasSirrEd"

});
bot.login(TOKEN);






bot.on('ready', () => {
    console.info(`Logged in as ${bot.user.tag}!`);
    
  });
bot.on("message",(msg)=>{

    try {
        if(msg.content.split(" ")[0]=="!ikac" ){
            
            var broj =msg.content.split(" ")[1];
            if(broj<=5){
            msg.channel.send("IDE GAS NOVI SAD RIBICE\n Ilija Maksimovic\nStudent fakulteta tehničkih nauka u Novom Sadu, crossfiter, podržalac Elona Musk-a, ljubitelj mesa, anime serija, putovanja i automobila.\n");
            var ime={screen_name: "IlijaIlija41"};
    
            client.get("statuses/user_timeline",ime,(error,tweets,response)=>{
                
                console.log(tweets);
                for(var i=0;i<broj;i++){
                    msg.channel.send((i+1)+": ----------------------------------------------------\n");
                    msg.channel.send(tweets[i].text+"\n\n");
                    
                }
            
    });}
    else{
        if(broj>100){
            msg.channel.send("TOLKO NA BENC IDE GAS,TUCEM CALETA ZA MANJE");
        }
        else{
        msg.channel.send("DODJI DODJI DODJI KOD CICE, MNOGO JE KUME");
        }
    }
            
            
            
        }
    } catch (error) {
        msg.channel.send("sjebao si se majmune,los gas");
    }
        
    
});

