const {hash} = require("./hash.js");

let pass = 12345;
let password = hash(pass);

console.log(password);