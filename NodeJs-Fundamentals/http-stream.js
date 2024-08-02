const http = require('http');
const fs = require('fs');

http.createServer(function(req,res){
    console.log("Big file")
    const text= fs.readFileSync('./content/bigfile.txt','utf8')
    res.end(text);
})
.listen(3000, () => {
    console.log('Server is running on port 3000');
})