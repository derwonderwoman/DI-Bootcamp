const morse = `{
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--..",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "!": "-.-.--",
    "-": "-....-",
    "/": "-..-.",
    "@": ".--.-.",
    "(": "-.--.",
    ")": "-.--.-"
  }`


function toJs(string){
    return new Promise((res,rej) => {
        if(string.length > 0){
           let value = JSON.parse(string); 
           res(value);
        }
        else{
            rej("error")
        }
    })
};

function toMorse(morseJS) {
    const text = [];
    let word = prompt("Type something and I'll translate it for you:");
    return new Promise((resolve, reject) => {
        for (const letter of word) {
            if (morseJS[letter.toLowerCase()]) {
                text.push(morseJS[letter.toLowerCase()]);
            } else {
                reject("The key doesn't exist");
                return;
            }
        }
        resolve(text);
    });
}

function joinWords(morseTranslation){
    const morseString = morseTranslation.join("\n");
    document.getElementById("morseOutput").innerText = morseString;
}

toJs(morse)
    .then(toMorse)
    .then(joinWords)
    .catch(error => console.error(error));

