const fs = require("fs");
const http = require("http");

const server = http.createServer();
server.on("request", (request, response) => {
    // 可读的读流
    const stream = fs.createReadStream("./big_file.txt");
    // 管道：可读的流连接上可写的流
    stream.pipe(response);
});
server.listen(8888);
console.log("8888");
