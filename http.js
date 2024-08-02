const http = require('http');
// const server= http.createServer((req,res)=>{
// res.write("Welcome to Home page")
// res.end()
// })

// server.listen(5000)


const server= http.createServer((res,req)=>{
      if (req.url === '/') {
      res.write('Welcome to our home page')
    }
    if (req.url === '/about') {
      res.write('Here is our short history')
    }
    res.write(`
    <h1>Oops!</h1>
  <p>We can't seem to find the page you are looking for</p>
  <a href="/">back home</a>
    `)
    })
server.listen(5000);