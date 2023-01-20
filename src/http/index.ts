import http from "http";

const server = http.createServer();

server.on("request", (req, res) => {
  // req - Readable
  // res - Writable

  res.end("hello world");
});

server.listen(3000);
