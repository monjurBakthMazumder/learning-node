const http = require("http");
const fs = require("fs");
const { buffer } = require("stream/consumers");

// creating a serving using row node.js

const server = http.createServer();

// listener

server.on("request", (req, res) => {
  console.log(req.url, req.method);
  if (req.url === "/read-file" && req.method === "GET") {
    // streaming file reading
    //    const readableStream =  fs.createReadStream(__dirname +'/text/read.txt')
    const readableStream = fs.createReadStream(
      process.cwd() + "/text/read.txt"
    );

    readableStream.on("data", (buffer) => {
      res.statusCode = 200;
      res.write(buffer);
    });
    readableStream.on("end", () => {
      res.statusCode = 200;
      res.end("The streaming is over!");
    });
    readableStream.on("error", (error) => {
      console.log(error);
      res.statusCode = 500;
      res.end("something want wrong!");
    });
  }
});

server.listen(5000, () => {
  console.log(`server listening on ${5000}`);
});
