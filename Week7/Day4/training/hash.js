const bcrypt = require("bcrypt");
const saltRounds = 10;

const hash =(pass)=> {
   const hash = bcrypt.hashSync(pass + "", saltRounds);
   return hash;
}

module.exports = {
    hash
}
