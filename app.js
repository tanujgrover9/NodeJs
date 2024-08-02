// const {createReadStream} = require('fs');
// const stream = createReadStream('./content/bigfile.txt',{
//     highWaterMark: 10 * 1024 * 1024, // 10MB
//     encoding:'utf8'
// });
// stream.on('data',(result)=>{
//     console.log(result);
// })

// stream.on('error', (err) => console.log(err));


setInterval(()=>{
    console.log("Interval text")
},2000);
console.log("First text")