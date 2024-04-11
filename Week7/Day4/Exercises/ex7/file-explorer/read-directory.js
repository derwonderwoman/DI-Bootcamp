import fs from "fs";

function readList(name){
    fs.readdir(name, (err,file)=> {
        if(err) {
            console.error("error");
        }
        console.log(file);
    })
}
readList("./");