import { readFile, writeFile } from "./filemanager.js";

readFile("./HelloWorld.txt");
writeFile("./ByeWorld.txt", "Writing to the file");