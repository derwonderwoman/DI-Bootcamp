import fs from "fs";

export function readFile(name) {
    fs.readFile(name,"utf8", function (err,data) {
        if (err) throw err;
        console.log(data);
      });
}
