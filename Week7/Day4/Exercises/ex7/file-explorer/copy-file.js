import fs from "fs";
    
export function readWriteFile(source,destination) {
    let data = fs.readFileSync(source,"utf8");
    fs.writeFileSync(destination, data, function (err) {
        if (err) throw err;
        console.log('Saved!');
      });
    return data;
}

let data = readWriteFile("source.txt", "destination.txt");



// In read-directory.js, use the fs module to read the list of files in a specified directory and display their names in the terminal.

// Open a terminal in the file-explorer directory.

// Run node copy-file.js to copy the content from source.txt to destination.txt.

// Run node read-directory.js to list the files in the directory.