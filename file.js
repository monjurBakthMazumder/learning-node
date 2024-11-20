const fs  = require('fs');


// reading a file text
const readText = fs.readFileSync("./text/read.txt", "utf-8")

console.log(readText);

// writing a text
const writtenText = fs.writeFileSync("./text/write.txt", readText+ "this is my written text")

console.log(writtenText);