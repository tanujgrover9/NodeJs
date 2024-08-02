const {readFile, writeFile}= require('fs');
readFile('./content/first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log(result)
})
readFile('./content/second.txt','utf8',(err,result)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log(result
        
    )

})

///////////////////////////////////////

const { readFile, writeFile } = require('fs')

console.log('start')
readFile('./content/first.txt', 'utf8', (err, result) => {
  if (err) {
    console.log(err)
    return
  }
  const first = result
  readFile('./content/second.txt', 'utf8', (err, result) => {
    if (err) {
      console.log(err)
      return
    }
    const second = result
    writeFile(
      './content/result-async.txt',
      `Here is the result : ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log(err)
          return
        }
        console.log('done with this task')
      }
    )
  })
})
console.log('starting next task');


///////////////////////////////////////////////////////////


const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end("Welcome to Home Page");
        return;
    }
    else if (req.url === '/about') {
        for (let i = 0; i < 1000; i++) {
            for (let j = 0; j < 1000; j++) {
                console.log(`${i} ${j}`);
            }
        }
        res.end("About Page");
        return;
    }
    else {
        res.end("Error!");
    }
});

server.listen(5000, () => {
    console.log('Server is running on port 5000...');
});
