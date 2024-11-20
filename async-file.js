const fs = require("fs");

// reading text asynchronously

fs.readFile("./text/read.txt", "utf-8", (error, data) => {
  if (error) {
    throw Error("Error reading data");
  }
  console.log(data);

  // writing text asynchronously
  fs.writeFile("./text/write2.txt", data, "utf-8", (error) => {
    if (error) {
      throw Error("Error write data");
    }
  });
});


console.log("testing asynchronous");