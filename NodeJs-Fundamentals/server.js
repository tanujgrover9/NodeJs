const http = require('http');

const server = http.createServer((req, res) => {
    console.log('request event');  // Log message when a request is received
    res.end('Hello world 🙌');        // Send a response to the client
});

server.listen(5000, () => {
    console.log('Server is running on port 5000...');
});