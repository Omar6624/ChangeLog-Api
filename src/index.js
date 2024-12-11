const http = require("node:http");

const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/") {
    console.log("hello --sd");
    res.end();
  }
});

server.listen(3001, () => {
  console.log("server on  http://localhost:3001");
});
