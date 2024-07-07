import http, { request } from "http";

const server = http.createServer((request, response) => {
  console.log(request);
  response.writeHead(200, { "Content-Type": "text/plain" });
  response.end("<h1>Hello Node!!!!</h1>\n");
});

//to listen to server
const port = 5000;
server.listen(port, () => {
  console.log("server running at http://localhost:3000/");
});
