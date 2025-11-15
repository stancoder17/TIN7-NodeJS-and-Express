const http = require('http');
const url = require('url');
const fs = require("fs");

http.createServer((req, res) => {
    const { query, pathname } = url.parse(req.url, true);
    const { input } = query;

    if (pathname === '/') {
        fs.readFile('index.html', (err, data) => {
            if (err) throw err;
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        });
        return;
    } else if (pathname === '/result') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(input);
        return;
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not found');
    }
}).listen(8080);

console.log('Server is running on http://localhost:8080/');