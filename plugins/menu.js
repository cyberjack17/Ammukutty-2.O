const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'menu', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
    r_text[0] = "https://i.imgur.com/md5cPUA.jpeg";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `⛦━━━━━✨️ᴄʏʙᴇʀ㊌ᴊᴀᴄᴋ✨️━━━━━⛦


Hello👋 I am a ᴄʏʙᴇʀ㊌ᴊᴀᴄᴋ's bot.
            *Ammukutty*

■□■□■□■□■□■□■□■□■□■□
♕ *Media Commands* ♕

➡️Command ➜ -song <text>
🍙Use ➜ Downloads song for you.
⚠️.song  baby love

➡️Command ➜ -video <yt link>
🍙Use ➜ Downloads video from YouTube link.

➡️Command ➜  -insta <link>
🍙Use ➜   Downloads content from instagram.

➡️Command ➜  -yt<text>
🍙Use ➜   Gives you YT links.

➡️Command ➜  -show <show name>
🍙Use ➜   Get info related to tv series and shows.

➡️Command ➜ -gif 
🍙Use ➜ Converts video to gif.

➡️Command ➜ -tomp3 
🍙Use ➜ Converts video into audio.

➡️Command ➜ -say <text>
🍙Use ➜ Converts text into voice.

➡️Command ➜ -img <text>
🍙Use ➜ It sends image from google.

➡️Command ➜ -trt <language code>
🍙Use ➜ Translate the text you tag.

➡️Command ➜ -wiki <text>
🍙Use ➜ It sends Wikipedia result.

➡️Command ➜ -lyric <text>
🍙Use ➜ Finds the lyrics of the song.

➡️Command ➜ -covid <country code>
🍙Use ➜ Send the covid stats of your country.

➡️Command ➜ -weather <city>
🍙Use ➜ Tells you about the weather of your place.

➡️Command ➜ -removebg 
🍙Use ➜ Removes the background of tge image.

➡️Command ➜ -ocr
🍙Use ➜ Finds the text written on the image.

➡️Command ➜ -wallpaper
🍙Use ➜ It sends you random wallpaper.

■□■□■□■□■□Ammukutty□■□■□■□
♟ *Fun Commands* ♟

➡️Command ➜ -joke 
🍙Use ➜ It sends a random joke.
 
➡️Command ➜ -meme <text>
🍙Use ➜ Cations the image into a meme.

➡️Command ➜ -quote 
🍙Use ➜ It sends a random quote.

➡️Command ➜ -ss <website link>
🍙Use ➜ It sends the screenshot of the website.

➡️Command ➜ -changesay <text>
🍙Use ➜ Converts text into changesay meme image.

➡️Command ➜ -trumpsay
🍙Use ➜ Convert text into Trump's tweet.

➡️Command ➜ -compliment 
🍙Use ➜ Gives you a compliment.

➡️Command ➜  -bitly <link>
🍙Use ➜   Shorten your link.

➡️Command ➜  -dict 
🍙Use ➜   Dictionary [-dict en;anime]

➡️Command ➜  -zodiac <leo> 
🍙Use ➜   Tells you about your horoscope.

➡️Command ➜  -qr <text>
🍙Use ➜   Converts text into qr code.

➡️Command ➜  -movie 
🍙Use ➜  Gives you info about movie.
⚠️movie master

➡️Command ➜  -anime <text>
🍙Use ➜  Gives you info about anime.
⚠️anime Ammukutty
■□■□■□■□■Ammukutty□■□■□■□■□
♝ *Sticker Commands* ♝

➡️Command ➜ -sticker 
🍙Use ➜ Converts img/gif into a sticker.

➡️Command ➜ -photo 
🍙Use ➜ Converts sticker into image.

➡️Command ➜ -attp <text>
🍙Use ➜ Converts text into glowing sticker.
⚠️ex  attp Ammukutty
■□■□■□■□■□■□■□■□■□■□
═════💢Ammukutty💢═════
▣▣▣▣▣▣▣ᴄʏʙᴇʀ㊌ᴊᴀᴄᴋ▣▣▣▣▣▣▣

`}) 

}));
