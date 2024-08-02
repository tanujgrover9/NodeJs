const http = require('http');
const { readFileSync } = require('fs');
const path = require('path');

const PORT = 5000;

// File paths
const homePage = readFileSync(path.join(__dirname, 'navbar-app', 'index.html'));
const homeStyle = readFileSync(path.join(__dirname, 'navbar-app', 'style.css'));
const homeImage = readFileSync(path.join(__dirname, 'navbar-app', 'logo.png'));
const homeLogic = readFileSync(path.join(__dirname, 'navbar-app', 'browser-app.js'));

const server = http.createServer((req, res) => {
    const url = req.url;

    // Serve HOME Page
    if (url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(homePage);

    // Serve ABOUT Page
    } else if (url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>About Page</h1>');

    // Serve STYLE
    } else if (url === '/style.css') {
        res.writeHead(200, { 'Content-Type': 'text/css' });
        res.end(homeStyle);

    // Serve LOGIC
    } else if (url === '/browser-app.js') {
        res.writeHead(200, { 'Content-Type': 'text/javascript' });
        res.end(homeLogic);

    // Serve LOGO
    } else if (url === '/logo.png') {
        console.log('Serving logo.png');
        res.writeHead(200, { 'Content-Type': 'image/png' });
        res.end(homeImage);
    }
    //404
     else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>Oops! Page not found..</h1>');
    }
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}...`);
});
