const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our home page");
    return;
  }
  if (req.url === "/about") {
    res.end("Here is our short history");
    return;
  }
  res.end("we can not find the page you are looking for ");
});

server.listen(5000, () => {
  console.log("Server is listening on port 5000...");
});
