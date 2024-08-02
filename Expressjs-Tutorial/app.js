console.log("Express js");
const http = require('http');

const server = http.createServer((req,res)=>{
    // console.log(req.method)
    //console.log(req.url)
    const url = req.url;
    if(url === '/'){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write('<h1>Home Page</h1>')
        res.end("<h1>Home Page</h1>")
        
    }
    else if (url==='/about'){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write('<h1>About Page</h1>');
        res.end();
    }
    else{
        res.writeHead(404,{'Content-Type':'text/html'});
        res.write('<h1>Opps! Page not found..</h1>')
        res.end();

    }

})

server.listen(5000,()=>{
    console.log('server is running on port! 5000...')
});