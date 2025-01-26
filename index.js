// const os = require('os');
// // console.log(os.cpus().length);
// const fs = require('fs');
// const res = fs.writeFileSync('context.txt');
// console.log(res)

const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 200; // Set HTTP status code
    res.setHeader('Content-Type', 'text/plain'); // Set headers
    res.end('Hello, World!'); // Send response body
});

server.listen(3000, () => {
    console.log('Server running on http://localhost:3000/');
});
