let sentence ="The movie is not that bad, I like it";

let wordNot = sentence.indexOf("not");
let wordBad = sentence.indexOf("bad");
console.log(wordNot)
console.log(wordBad)

    if (wordNot < wordBad && wordNot != -1){
        let array = sentence.split("")
        array.splice(wordNot,wordBad - wordNot + 3,"good")
        sentence = array.join('')
        console.log(sentence)
    }
    else {
        console.log(sentence)
    }

