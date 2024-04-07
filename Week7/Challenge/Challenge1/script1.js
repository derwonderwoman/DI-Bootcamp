// Create two functions. Each function should return a promise.
function makeAllCaps(array){
    return new Promise((res,rej) => {
        if (array.every(word => typeof word === 'string')) {
            const uppercasedWords = array.map(word => word.toUpperCase());
            res(uppercasedWords);
        } 
        else{
            rej("error, not strings")
        }
    })
}

function sortWords(array){
    return new Promise((res,rej) => {
        if(array.length > 4){
            const sortedWords = array.sort();
            res(sortedWords);
        }
        else{
            rej("error, too small")
        }
    })  
}

makeAllCaps([1, "pear", "banana"])
    .then((arr) => sortWords(arr))
    .then((result) => console.log(result))
    .catch(error => console.log(error))

makeAllCaps(["apple", "pear", "banana"])
    .then((arr) => sortWords(arr))
    .then((result) => console.log(result))
    .catch(error => console.log(error))

makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
    .then((arr) => sortWords(arr))
    .then((result) => console.log(result)) //["APPLE","BANANA", "KIWI", "MELON", "PEAR"]
    .catch(error => console.log(error))