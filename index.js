const { Client, Intents } = require('discord.js-selfbot-v13');
const Discord = require('discord.js-selfbot-v13');
const readline = require('readline-sync');
const m = require("moment-duration-format");
const exp = require('express'); 
const s = exp();

const client = new Client({
  checkUpdate: false
});

s.all('/', (req, res) => { 
  res.send("Ready Dek") 
 })

s.listen(4020, () => { 
  console.log("Port : 4020") 
 })

client.on('ready', async () => {

        if (global.dataWeather && global.dataWeather.current_weather) {
          global.temp = global.dataWeather.current_weather.temperature;
          global.wind = global.dataWeather.current_weather.windspeed

        } else {
          global.temp = 25
          global.wind = 3.5
        }

 const num = parseFloat((Math.random() * 0.2 + 0.1 + Number.EPSILON).toFixed(1));
        const operator = Math.random() < 0.3 ? '+' : '-';

  setInterval(() => {
    const moment = require('moment');
    const created = moment().format('YYYY-MM-DD HH:mm:ss ');
    const change = ['https://cdn.discordapp.com/attachments/1070765609559785583/1236175585470976102/B991492D-C00D-4554-9375-E309F63C01F1.gif?ex=6639b0ba&is=66385f3a&hm=40706310d81c180c1712cb3787230d26525bff798092074895194e80f41ae740&']; //รูปใหญ่
    const poop = ['https://emoji.discadia.com/emojis/c6bae7ae-eee1-4b05-9bde-d3a664a5e1d3.gif']; // รูปเล็ก
     //const change2 = ['']; // ชื่อสลับ
  const yyyt = ['💦  My Gang 🌊']; // ชื่อ button2
  const ddds = ['https://discord.gg/mygv2']; // ลิ้ง button1

   const iooi = ['💦  My Gang 🌊']; // ชื่อ button 1
   const iiio = ['https://discord.gg/mygv2']; // ลิ้ง button 2
   const tyyy = yyyt[Math.floor(Math.random()*yyyt.length)]; // ชื่อ button 2
   const sddd = ddds[Math.floor(Math.random()*ddds.length)]; // ลิ้ง button 2
   const oooi = 
iiio[Math.floor(Math.random()*iiio.length)]; // button 1 ใส่ลิ้ง
    const ioii =
iooi[Math.floor(Math.random()*iooi.length)]; // button 1 ใส่ชื่อ
    const popp =
poop[Math.floor(Math.random()*poop.length)]; // รูปเล็ก
    const ssss = 
change[Math.floor(Math.random()*change.length)]; // รูปใหญ่
    //const dwada = change2[Math.floor(Math.random()*change2.length)]; // ชื่อสลับคำ
    const r = new Discord.RichPresence()
      .setApplicationId('1112701450150232085')
      .setType('STREAMING')
      .setURL('https://www.youtube.com/watch?v=Wq4fctOxTYY')
      .setState(`Discord`)
      .setName(`YouTube`)
      .setDetails(`เชื่อใจใน My G`)
      //.setAssetsSmallImage(`${popp}`) 
.setAssetsLargeImage(`${ssss}`)
.setAssetsLargeText(`🕐 ${getTime()}  ${moment().format(' 📅 DD/MM/YYYY ')}`)
.setAssetsSmallText(`ping : ${Math.round(client.ws.ping)}`)
.addButton(`${ioii}`,`${oooi}`)  

    //  .addButton(`${tyyy}`,`${sddd}`)
//.setStartTimestamp("1672545600" || Date.now())
//.setEndTimestamp("1704077999" || Date.now())
    client.user.setActivity(r);
  }, 8*1000); // อัพเดท ทุกๆ 7 วินาที
  console.log(`${client.user.username} Is Ready!`)
});


client.login(process.env.token)



   let endTime = new Date().setHours(24 + 6, 0, 0, 0), //nextMidnight
  today = new Date().setHours(0, 0, 0, 0), //lastMidnight
  dayCount = Math.floor( 
    (today - new Date(2023, 0).getTime()) / (24 * 60 * 60 * 1000) 
  )

var date = new Date().getDate() + "/"+ (new Date().getMonth()+1)  + "/" + new Date().getFullYear();
    var time = new Date().getHours() + ":"+ new Date().getMinutes();

let options = {
    timeZone: 'Asia/Bangkok',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: false
  };

  function getDate() {
    return (new Date()).toLocaleString([], options).split(" ")[0].replaceAll(",", "");
  }
  function getTime() {
    return (new Date()).toLocaleString([], options).split(" ")[1].replaceAll(",", "");
          }	
