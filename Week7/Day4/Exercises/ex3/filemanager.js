import fs from "fs"
export function readFile(name) {
    fs.readFile(name,"utf8", function (err,data) {
        if (err) throw err;
        return data;
      });
}

export function writeFile(name,text) {
    fs.appendFile(name, text, function (err) {
        if (err) throw err;
        console.log('Updated!');
      });
}


