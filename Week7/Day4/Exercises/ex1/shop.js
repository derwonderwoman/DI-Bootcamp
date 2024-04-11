const {array} = require("./products.js");

const search = (prod) => {
    for (const arr of array){
        if (arr.name === prod){
            return arr;
        }
    }
}
let product = search("Potato");
console.log(product);