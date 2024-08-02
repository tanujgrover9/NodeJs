const express= require("express");
const app = express();
const path = require('path')

app.get('/',(req,res)=>{
    res.status(200).send('Hello World!');
})

app.get('/about',(req,res)=>{
    res.status(200).send('This is the about page.');
})

app.all('*',(req,res)=>{
    res.status(404).send('<h1>404! Not Found 🤖</h1>');
})

app.listen(5000,()=>{
    console.log("server is running on port 5000..");
})



// app.get -- Read data
// app.post -- insert data
// app.put -- update data
// app.delete -- delete data
// app.listen -- server host
// app.all
// app.use
