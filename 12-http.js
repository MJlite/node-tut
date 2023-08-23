const http = require("http");

// creating a server
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    return res.end("Server is working");
  } else if (req.url === "/about") {
    return res.end("About is working");
  } else {
    return res.end(`<h1>OOPS! </h1>`);
  }
});

server.listen(4500, "localhost", () => {
  console.log();
});
