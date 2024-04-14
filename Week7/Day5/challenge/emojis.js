const express = require('express')
const {emojis} = require("./new_emojis.js")
const app = express();

app.use(express.static(__dirname + "challenge"))

app.listen(3001, () => {
    console.log("run on 3001");
});

app.get("/emojis", (req,res) =>{
    const randomIndx = Math.floor(Math.random() * emojis.length);
    const randomEmoji = emojis[randomIndx];
    const shuffle = shuffleArray(emojis);
    res.json({shuffle,randomEmoji});
});

const shuffleArray = (array) => {
    for(let i = array.length-1; i>0; i--){
        const j = Math.floor(Math.random() * (i+1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};